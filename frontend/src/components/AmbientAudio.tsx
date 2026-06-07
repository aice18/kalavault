import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

class GalleryRoomTone {
  ctx: AudioContext | null = null;
  oscillators: { osc: OscillatorNode; gain: GainNode; lfo?: OscillatorNode; lfoGain?: GainNode }[] = [];
  noiseSrc: AudioBufferSourceNode | null = null;
  mainGain: GainNode | null = null;
  baseVolume: number = 0.5;
  isPlaying: boolean = false;

  start() {
    if (this.isPlaying) return;
    
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.mainGain = this.ctx.createGain();
    this.mainGain.connect(this.ctx.destination);
    
    // Very slow fade in
    this.mainGain.gain.setValueAtTime(0, this.ctx.currentTime);
    // Extremely low target volume for subtle gallery tone
    this.mainGain.gain.linearRampToValueAtTime(this.baseVolume * 0.15, this.ctx.currentTime + 4);

    // 1. Room Air (Brown-like Noise)
    const bufferSize = this.ctx.sampleRate * 3; // 3 seconds
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02; // Brown noise approximation
        lastOut = output[i];
        output[i] *= 4.0;
    }
    this.noiseSrc = this.ctx.createBufferSource();
    this.noiseSrc.buffer = noiseBuffer;
    this.noiseSrc.loop = true;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.value = 250; // Very muffled air

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.value = 0.08; // Quiet air

    this.noiseSrc.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.mainGain);
    this.noiseSrc.start();

    // 2. Subtle Resonant Hums (Like thick walls / museum acoustic)
    const freqs = [65.41, 130.81]; // C2, C3
    this.oscillators = freqs.map((freq, i) => {
        const osc = this.ctx!.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        const gain = this.ctx!.createGain();
        gain.gain.value = i === 0 ? 0.04 : 0.02; // Deeper is slightly louder, but overall very quiet
        
        // Slow modulation for a slight "breathing" feel
        const lfo = this.ctx!.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 0.05 + (i * 0.01);
        const lfoGain = this.ctx!.createGain();
        lfoGain.gain.value = gain.gain.value * 0.3; // modulate by 30% of base gain
        lfo.connect(lfoGain);
        lfoGain.connect(gain.gain);
        lfo.start();

        osc.connect(gain);
        gain.connect(this.mainGain!);
        osc.start();

        return { osc, gain, lfo, lfoGain };
    });
  }

  stop() {
    if (!this.isPlaying || !this.ctx || !this.mainGain) return;
    this.isPlaying = false;
    
    const now = this.ctx.currentTime;
    this.mainGain.gain.cancelScheduledValues(now);
    this.mainGain.gain.setValueAtTime(this.mainGain.gain.value, now);
    this.mainGain.gain.linearRampToValueAtTime(0, now + 2);
    
    setTimeout(() => {
        if (this.isPlaying) return;
        try { this.noiseSrc?.stop(); } catch(e) {}
        this.noiseSrc?.disconnect();
        
        this.oscillators.forEach(nodes => {
            try { nodes.osc.stop(); } catch(e) {}
            try { nodes.lfo?.stop(); } catch(e) {}
            nodes.osc.disconnect();
            nodes.gain.disconnect();
        });
        this.oscillators = [];
        
        this.mainGain?.disconnect();
        this.mainGain = null;
    }, 2000);
  }

  setVolume(val: number) {
     this.baseVolume = val;
     if (this.isPlaying && this.ctx && this.mainGain) {
         this.mainGain.gain.linearRampToValueAtTime(val * 0.15, this.ctx.currentTime + 0.1);
     }
  }
}

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const toneRef = useRef<GalleryRoomTone | null>(null);

  useEffect(() => {
    toneRef.current = new GalleryRoomTone();
    return () => {
      toneRef.current?.stop();
    };
  }, []);

  useEffect(() => {
    toneRef.current?.setVolume(volume);
  }, [volume]);

  const togglePlay = () => {
    if (!toneRef.current) return;
    
    if (isPlaying) {
      toneRef.current.stop();
      setIsPlaying(false);
    } else {
      toneRef.current.start();
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

  // Attempt to play slightly on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && toneRef.current && !isPlaying) {
        toneRef.current.start();
        setIsPlaying(true);
        setHasInteracted(true);
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    
    return () => {
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted, isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center gap-3 group">
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 20 }}
             className="hidden md:flex items-center gap-3 bg-paper-white/90 backdrop-blur-md border border-gallery-gold/20 px-4 py-2 shadow-sm pointer-events-auto"
          >
            <div className="flex items-center gap-1">
                {/* Minimalist pulse animation */}
                {[0, 1].map((i) => (
                    <motion.div 
                      key={i}
                      className="w-1 h-1 bg-gallery-gold rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          delay: i * 2,
                          ease: "easeInOut" 
                      }}
                    />
                ))}
            </div>
            <span className="font-label-caps text-[9px] uppercase tracking-[0.2em] text-primary/60 pr-2 border-r border-gallery-gold/20">GALLERY</span>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.05" 
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              aria-label="Volume Control"
              className="w-16 h-0.5 bg-gallery-gold/30 appearance-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:bg-gallery-gold [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={togglePlay}
        className="w-10 h-10 md:w-12 md:h-12 bg-paper-white/90 backdrop-blur-md border border-gallery-gold/20 flex items-center justify-center text-primary group-hover:text-gallery-gold transition-colors shadow-[0_4px_15px_rgba(212,175,55,0.1)] pointer-events-auto relative overflow-hidden"
        aria-label={isPlaying ? "Mute Room Tone" : "Play Room Tone"}
      >
        <span className="material-symbols-outlined text-[16px] md:text-[18px] relative z-10 transition-transform duration-300">
          {isPlaying ? 'volume_up' : 'volume_off'}
        </span>
      </button>
    </div>
  );
}
