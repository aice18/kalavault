const fs = require('fs');
let content = fs.readFileSync('src/pages/LandingPage.tsx', 'utf8');

// 1. Inject TestimonialCarouselSection
const carouselComponent = `
function TestimonialCarouselSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 450;
  const GAP = 32;
  const UNIT = CARD_WIDTH + GAP;
  const SPEED = 0.5;
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Duplicate for seamless loop
  const ITEMS = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  useEffect(() => {
    function animate() {
      posRef.current += SPEED;
      const loopWidth = TESTIMONIALS_DATA.length * UNIT;
      if (posRef.current >= loopWidth) {
        posRef.current -= loopWidth;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = \`translateX(-\${posRef.current}px)\`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [UNIT]);

  return (
    <section className="py-24 md:py-32 bg-paper-white overflow-hidden relative border-y border-outline/10">
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-16 text-center">
         <span className="font-label-caps text-[10px] text-gallery-gold tracking-[0.3em] uppercase block mb-4">// CURATION EXPERIENCE</span>
         <h2 className="font-display-lg text-4xl md:text-5xl text-primary leading-tight tracking-tight">What They're Saying</h2>
      </div>

      <div className="relative overflow-hidden w-full select-none" style={{ cursor: 'default' }}>
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />

        <div ref={trackRef} className="flex will-change-transform" style={{ gap: \`\${GAP}px\`, paddingLeft: '32px', paddingRight: '32px' }}>
          {ITEMS.map((item, i) => (
            <div key={i} className="flex-shrink-0 bg-subtle-smoke p-10 md:p-12 border border-outline/5 hover:border-gallery-gold/30 transition-colors duration-500 flex flex-col justify-center" style={{ width: \`\${CARD_WIDTH}px\`, minHeight: '320px' }}>
              <div className="text-gallery-gold mb-8 opacity-60">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <blockquote className="font-headline-md italic text-xl md:text-2xl text-primary/80 leading-[1.6] font-light">
                {item.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {`;

content = content.replace('export default function LandingPage() {', carouselComponent);

// 2. Remove trustSlide state and effects
const trustSlideStateRegex = /\s*const \[trustSlide, setTrustSlide\] = useState\(0\);/s;
content = content.replace(trustSlideStateRegex, '');

const trustSlideEffectRegex = /\s*useEffect\(\(\) => \{\s*const timer = setInterval\(\(\) => \{\s*setTrustSlide\(\(prev\) => \(prev \+ 1\) % TESTIMONIALS_DATA\.length\);\s*\}, 8000\);\s*return \(\) => clearInterval\(timer\);\s*\}, \[\]\);/s;
content = content.replace(trustSlideEffectRegex, '');

// 3. Replace the old section
const trustSectionRegex = /\s*\{\s*\/\*\s*Trust Section \/ Gallery Context\s*\*\/\s*\}.*?<\/motion\.section>/s;
content = content.replace(trustSectionRegex, '\n\n      {/* Testimonial Carousel */}\n      <TestimonialCarouselSection />');

fs.writeFileSync('src/pages/LandingPage.tsx', content);
