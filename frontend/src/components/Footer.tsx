import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <footer className="w-full bg-paper-white border-t border-gallery-gold/20 mt-auto">
        <div className="flex flex-col gap-section-gap px-margin-mobile md:px-margin-desktop py-24 w-full max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="space-y-6 max-w-sm">
                    <div className="font-display-lg text-3xl text-primary tracking-widest uppercase whitespace-nowrap">THE KALA VAULT</div>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">Elevating corporate spaces through a revolutionary art leasing and bespoke curation service.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-12">
                    <div className="space-y-6">
                        <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase">Discover</p>
                        <ul className="space-y-4 font-body-md text-on-surface-variant text-sm">
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="/collections">Curations</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Artists</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Exhibitions</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Journal</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase">Service</p>
                        <ul className="space-y-4 font-body-md text-on-surface-variant text-sm">
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="/services">How it Works</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="/subscriptions">Appraisal</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Corporate</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Gift</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6 col-span-2 md:col-span-1">
                        <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase">Legal</p>
                        <ul className="space-y-4 font-body-md text-on-surface-variant text-sm">
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Privacy Policy</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Terms of Service</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Shipping & Returns</Link></li>
                            <li><Link className="hover:text-gallery-gold transition-colors duration-300" to="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gallery-gold/20 pt-10 gap-6 mt-16">
                <p className="font-label-caps tracking-widest text-primary/50 uppercase text-[10px] md:text-[11px]">© 2024 THE KALA VAULT. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-6">
                    <a className="material-symbols-outlined text-primary/40 hover:text-gallery-gold transition-colors" href="#">public</a>
                    <a className="material-symbols-outlined text-primary/40 hover:text-gallery-gold transition-colors" href="#">share</a>
                </div>
            </div>
        </div>
      </footer>
  );
}
