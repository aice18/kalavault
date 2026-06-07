import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    
    // Ambient delay to emphasize security and process
    setTimeout(() => {
      if (email.toLowerCase().includes('admin')) {
        navigate('/admin');
      } else {
        navigate('/customer');
      }
    }, 1500);
  };

  return (
    <div className="bg-paper-white text-primary font-body-md selection:bg-gallery-gold/30 min-h-screen flex flex-col md:flex-row overflow-hidden">
      
      { /* Left Panel - Visual Identity */ }
      <div className="w-full md:w-1/2 relative h-[30vh] md:h-screen flex flex-col justify-between p-8 md:p-16 z-10 bg-matte-black">
        <div className="absolute inset-0 overflow-hidden">
           <img 
              alt="Premium Gallery Space" 
              className="w-full h-full object-cover opacity-50 grayscale mix-blend-luminosity" 
              src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=2500" 
          />
        </div>
        <div className="relative z-10 w-max">
          <Link to="/" className="font-display-lg text-[20px] md:text-[26px] text-paper-white uppercase tracking-[0.15em] font-medium leading-none whitespace-nowrap hover:text-gallery-gold transition-colors">
              THE KALA VAULT
          </Link>
        </div>
        <div className="relative z-10 hidden md:block max-w-lg">
            <p className="font-label-caps text-[11px] text-gallery-gold tracking-[0.2em] mb-4 uppercase">Exhibition Access</p>
            <h2 className="font-display-lg text-4xl lg:text-5xl text-paper-white font-normal leading-snug drop-shadow-lg">
                Curating masterpieces for the discerning collector.
            </h2>
        </div>
      </div>

      { /* Right Panel - Authentication Container */ }
      <div className="w-full md:w-1/2 h-[70vh] md:h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 relative z-20 bg-paper-white">
        
        <div className="w-full max-w-sm">
          <div className="mb-12 text-center md:text-left">
            <h1 className="font-headline-md text-3xl text-primary mb-3">Sign In</h1>
            <p className="font-body-md text-on-surface-variant text-[14px]">
              Access your curated portfolios and private acquisitions.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-8">
            <div className="group relative">
              <label className="font-label-caps text-[11px] uppercase tracking-widest text-primary/70 mb-2 block">
                Email Address
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-outline/30 focus:border-primary py-2 font-body-md text-primary outline-none transition-colors"
                required
              />
            </div>

            <div className="group relative">
              <label className="font-label-caps text-[11px] uppercase tracking-widest text-primary/70 mb-2 block">
                Password
              </label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-outline/30 focus:border-primary py-2 font-body-md text-primary outline-none transition-colors tracking-widest"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-outline/50 group-hover:border-primary flex items-center justify-center transition-colors">
                        <div className="w-2 h-2 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </div>
                    <span className="font-label-caps text-[11px] text-primary/70 group-hover:text-primary transition-colors uppercase">Remember Me</span>
                </label>
                <a href="#" className="font-label-caps text-[11px] text-primary/70 hover:text-primary transition-colors uppercase">
                    Forgot Password?
                </a>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isAuthenticating}
                className="w-full bg-primary text-paper-white font-label-caps text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gallery-gold transition-colors disabled:opacity-80 flex justify-center items-center gap-3"
              >
                {isAuthenticating ? 'VERIFYING...' : 'SIGN IN'}
              </button>
            </div>
            
            <div className="text-center pt-6 flex flex-col items-center gap-4">
                <div className="bg-subtle-smoke border border-gallery-gold/20 p-4 w-full text-left text-sm font-body-sm text-on-surface-variant">
                    <p className="font-label-caps text-[10px] uppercase text-gallery-gold mb-2">Test Credentials</p>
                    <p><strong>Admin:</strong> admin@kalavault.com</p>
                    <p><strong>Customer:</strong> user@kalavault.com</p>
                    <p className="italic mt-1 text-xs text-primary/60">Any password will work. "admin" in email routes to admin console.</p>
                </div>
                <p className="font-body-md text-sm text-primary/70 mt-2">
                    Not a member yet?
                </p>
                <Link to="/" className="font-label-caps text-[11px] text-primary tracking-widest hover:text-gallery-gold transition-colors inline-block pb-1 border-b border-primary hover:border-gallery-gold uppercase">
                    Request an Invitation
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
