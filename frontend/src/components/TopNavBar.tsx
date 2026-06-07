import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Collections', path: '/collections' },
  { name: 'Services', path: '/services' },
  { name: 'Subscriptions', path: '/subscriptions' },
  { name: 'Manifesto', path: '/manifesto' },
];

export default function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;
  
  const isHeroDark = !isScrolled && (location.pathname === '/' || location.pathname === '/manifesto');
  
  const linkColorClass = isHeroDark ? 'text-white hover:text-gallery-gold drop-shadow-sm' : 'text-primary hover:text-gallery-gold drop-shadow-sm';

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 px-4 md:px-8 transition-all duration-500 ${isScrolled ? 'bg-paper-white/95 backdrop-blur-md py-4 border-b border-gallery-gold/20 shadow-sm' : (isHeroDark ? 'bg-black/10 backdrop-blur-sm py-6 border-b border-transparent' : 'bg-paper-white/50 backdrop-blur-[10px] py-6 border-b border-transparent')}`}>
        <div className="grid grid-cols-3 items-center w-full">
          {/* Left Links */}
          <div className="hidden md:flex gap-8 items-center justify-start">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.path}
                className={`font-label-caps text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-gallery-gold border-b border-gallery-gold pb-0.5' 
                    : linkColorClass
                }`} 
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center text-center">
            <Link to="/" className="text-[20px] md:text-[28px] font-display-lg text-gallery-gold uppercase tracking-[0.15em] font-bold leading-none whitespace-nowrap">
              THE KALA VAULT
            </Link>
          </div>

          {/* Right Links & Button */}
          <div className="hidden md:flex gap-8 items-center justify-end">
             {navLinks.slice(2).map((link) => (
              <Link 
                key={link.path}
                className={`font-label-caps text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-gallery-gold border-b border-gallery-gold pb-0.5' 
                    : linkColorClass
                }`} 
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/signin" className="font-label-caps text-[10px] font-bold uppercase tracking-[0.2em] text-paper-white bg-gallery-gold px-6 py-2.5 hover:bg-primary hover:text-paper-white transition-all duration-500 whitespace-nowrap shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              SIGN IN
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden justify-end col-start-3">
             <button 
                onClick={() => setIsMenuOpen(true)}
                className={`material-symbols-outlined ${isHeroDark ? 'text-white drop-shadow-md' : 'text-primary'}`}
             >
                 menu
             </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Glassmorphism Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-paper-white/90 backdrop-blur-xl flex flex-col px-margin-mobile py-6"
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-16">
               <span className="text-[20px] font-display-lg text-gallery-gold uppercase tracking-[0.15em] font-bold leading-none">THE KALA VAULT</span>
               <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="material-symbols-outlined text-primary scale-110 hover:rotate-90 transition-transform duration-500"
               >
                  close
               </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-8 items-center justify-center flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  <Link 
                    to={link.path}
                    className={`font-display-md text-3xl uppercase tracking-widest ${
                      isActive(link.path) ? 'text-gallery-gold' : 'text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
                  className="mt-8"
                >
                 <Link 
                    to="/signin" 
                    className="font-label-caps text-[12px] font-bold uppercase tracking-[0.2em] text-paper-white bg-primary px-10 py-4 hover:bg-gallery-gold transition-colors block"
                  >
                    SIGN IN PORTAL
                 </Link>
              </motion.div>
            </div>
            
            {/* Mobile Menu Footer */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-auto flex justify-between items-center w-full border-t border-gallery-gold/20 pt-6"
            >
                <div className="flex gap-6">
                    <a className="material-symbols-outlined text-primary text-[20px]" href="#">public</a>
                    <a className="material-symbols-outlined text-primary text-[20px]" href="#">share</a>
                </div>
                <span className="font-label-caps text-[9px] text-tertiary-fixed-dim uppercase tracking-widest">© 2024</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
