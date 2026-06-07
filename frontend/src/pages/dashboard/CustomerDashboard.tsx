import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerDashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  useEffect(() => {
    const bars = document.querySelectorAll('.progress-bar');
    const observerOptions = { threshold: 0.1 };

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target as HTMLElement;
                const finalWidth = bar.getAttribute('data-width');
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 2s cubic-bezier(0.16, 1, 0.3, 1)';
                    if (finalWidth) bar.style.width = finalWidth;
                }, 200);
                barObserver.unobserve(bar);
            }
        });
    }, observerOptions);

    bars.forEach(bar => barObserver.observe(bar));

    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    reveals.forEach(reveal => revealObserver.observe(reveal));
    
    return () => {
        barObserver.disconnect();
        revealObserver.disconnect();
    }
  }, []);

  return (
    <div className="bg-paper-white text-primary selection:bg-gallery-gold/30 font-body-md overflow-x-hidden min-h-screen">
      
      { /* Swap Modal Overlay */ }
      <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${modalOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} id="swapModal">
        <div className={`bg-paper-white p-12 max-w-lg w-full shadow-2xl relative transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${modalOpen ? 'scale-100' : 'scale-95'}`}>
          <button className="absolute top-6 right-6 text-primary/50 hover:text-primary transition-colors cursor-pointer" onClick={() => setModalOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <span className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase mb-4 block">CURATION SERVICES</span>
          <h3 className="font-display-md text-3xl text-primary mb-6">Initiate Artwork Swap</h3>
          <p className="font-body-md text-primary/70 mb-10 leading-relaxed">
            Our white-glove rotation service ensures a seamless transition. Select your preferred replacement from the catalog, and our logistics team will handle the installation and return of your current piece.
          </p>
          <div className="space-y-4">
            <button className="w-full bg-primary text-white py-4 font-label-caps text-[11px] tracking-widest hover:bg-gallery-gold transition-colors uppercase cursor-pointer">BROWSE CATALOG</button>
            <button className="w-full border border-gallery-gold/30 py-4 font-label-caps text-[11px] tracking-widest hover:bg-subtle-smoke transition-colors uppercase cursor-pointer" onClick={() => setModalOpen(false)}>CANCEL</button>
          </div>
        </div>
      </div>

      { /* Sidebar Navigation Shell */ }
      <aside className="h-screen w-64 fixed left-0 top-0 bg-subtle-smoke border-r border-gallery-gold/20 flex flex-col z-40">
        <div className="px-8 py-10">
          <Link to="/">
            <h1 className="font-display-lg text-2xl text-primary tracking-widest uppercase">The Kala Vault</h1>
          </Link>
          <p className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase mt-2">CURATED MANAGEMENT</p>
        </div>
        <nav className="flex-1 px-4 flex flex-col gap-2 hide-scrollbar overflow-y-auto">
          <a className="group relative flex items-center gap-4 px-4 py-3 text-primary font-bold border-l-2 border-gallery-gold bg-gallery-gold/5 transition-all" href="#">
            <span className="material-symbols-outlined text-[18px]">dashboard</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Dashboard</span>
          </a>
          <a className="group relative flex items-center gap-4 px-4 py-3 text-primary/70 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px]">palette</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Browse Catalog</span>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gallery-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300"></div>
          </a>
          <a className="group relative flex items-center gap-4 px-4 py-3 text-primary/70 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px]">history_edu</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Subscribed Artworks</span>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gallery-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300"></div>
          </a>
          <a className="group relative flex items-center gap-4 px-4 py-3 text-primary/70 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Swap Requests</span>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gallery-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300"></div>
          </a>
          <a className="group relative flex items-center gap-4 px-4 py-3 text-primary/70 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Invoices</span>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gallery-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300"></div>
          </a>
          <a className="group relative flex items-center gap-4 px-4 py-3 text-primary/70 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px]">gavel</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Contracts</span>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gallery-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-center duration-300"></div>
          </a>
        </nav>
        <div className="p-6 border-t border-gallery-gold/20 space-y-4">
          <div className="flex items-center gap-4 px-2">
            <div className="w-10 h-10 bg-white flex items-center justify-center border border-gallery-gold/30">
              <span className="material-symbols-outlined text-primary text-[18px]">person</span>
            </div>
            <div className="overflow-hidden">
              <p className="font-label-caps text-[11px] tracking-widest uppercase truncate text-primary">Alexander Voss</p>
              <p className="text-[9px] text-gallery-gold uppercase tracking-[0.2em] mt-1">Collector Tier</p>
            </div>
          </div>
          <Link className="flex items-center gap-4 px-2 py-2 text-primary/70 hover:text-gallery-gold transition-colors" to="/admin">
            <span className="material-symbols-outlined text-[18px]">settings</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Settings</span>
          </Link>
          <Link className="flex items-center gap-4 px-2 py-2 text-primary/70 hover:text-gallery-gold transition-colors" to="/">
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Logout</span>
          </Link>
        </div>
      </aside>

      { /* Main Content Area */ }
      <main className="ml-64 min-h-screen flex flex-col">
        { /* Header */ }
        <header className="h-24 flex items-center justify-between px-12 bg-paper-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gallery-gold/20">
          <div>
            <h2 className="font-display-md text-3xl tracking-tight text-primary">Customer Dashboard</h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-4 text-primary/60">
              <span className="font-label-caps text-[10px] tracking-widest uppercase">Local Time: 11:42 AM</span>
              <div className="h-4 w-px bg-gallery-gold/30"></div>
              <span className="font-label-caps text-[10px] tracking-widest uppercase">Berlin, DE</span>
            </div>
            <button className="bg-primary text-white font-label-caps text-[10px] tracking-widest uppercase px-8 py-3 flex items-center gap-3 hover:bg-gallery-gold transition-colors relative overlay-hidden group cursor-pointer" onClick={() => setModalOpen(true)}>
              <span className="relative z-10">Request Artwork Swap</span>
              <span className="material-symbols-outlined relative z-10 text-[16px]">swap_calls</span>
            </button>
          </div>
        </header>

        { /* Dashboard Content Grid */ }
        <div className="max-w-[1600px] mx-auto px-12 py-16 flex-1 w-full">
          { /* Hero Stats Row */ }
          <div className="grid grid-cols-12 gap-16 mb-20">
            <div className="col-span-12 lg:col-span-8 reveal">
              <section className="space-y-2 mb-10 border-b border-gallery-gold/20 pb-4">
                <span className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase block">ACTIVE SUBSCRIPTIONS</span>
                <h3 className="font-display-md text-4xl tracking-tight text-primary">In-Residence Collections</h3>
              </section>
              { /* Subscription Cards List */ }
              <div className="space-y-8">
                { /* Active Item 1 */ }
                <div className="flex flex-col md:flex-row gap-8 bg-subtle-smoke p-0 border border-gallery-gold/20 hover:border-gallery-gold/50 transition-colors group shadow-sm">
                  <div className="w-full md:w-64 aspect-[4/3] md:aspect-square relative overflow-hidden group/img shrink-0 bg-white">
                    <img alt="Active Artwork" className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHV6BdcqqJ0Kd4HzQCYEtxghiplc-bkrHPRJtn6_gCMm-eboA2eTFGcPmHFDYLqVzDX2QkVn2oE44yOZhW2qDUYFaGtV6COdnOZQggszVfZVU-BZ9QRK4iVyViHE8ieTp9P4JIZMYBUhTOM_xU0bS6kgy4eCDE1BFfLgIBubY-apzz3Un08sTbiICJm3_DkgcCbes1aGUMYOpaav3poHAmLsq-PgYw_cleOSaE5CsNXs7A-qZ1p7Ptq08cACr26-4BK0vIWvKbVrYR" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-6 pl-0">
                    <div>
                      <p className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase mb-2">ECHOES OF SILENCE NO. 4</p>
                      <h4 className="font-display-md text-3xl tracking-tight text-primary mb-6">Julianne Abernathy</h4>
                      <div className="flex gap-12 mb-8">
                        <div>
                          <p className="font-label-caps text-[9px] tracking-widest text-primary/50 uppercase mb-1">COMMENCED</p>
                          <p className="font-body-md text-lg text-primary">Oct 12, 2023</p>
                        </div>
                        <div>
                          <p className="font-label-caps text-[9px] tracking-widest text-primary/50 uppercase mb-1">SUBSCRIPTION VALUE</p>
                          <p className="font-body-md text-lg text-primary">€1,240 / mo</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <p className="font-label-caps text-[9px] tracking-widest text-primary/60 uppercase">ROTATION ELIGIBILITY: 74% COMPLETE</p>
                        <p className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase">22 Days Remaining</p>
                      </div>
                      <div className="w-full h-1 bg-gallery-gold/10 overflow-hidden">
                        <div className="h-full bg-gallery-gold progress-bar" data-width="74%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                { /* Active Item 2 */ }
                <div className="flex flex-col md:flex-row gap-8 bg-subtle-smoke p-0 border border-gallery-gold/20 hover:border-gallery-gold/50 transition-colors group shadow-sm">
                  <div className="w-full md:w-64 aspect-[4/3] md:aspect-square relative overflow-hidden group/img shrink-0 bg-white">
                    <img alt="Active Artwork" className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCoo7UW9ptW8bANITq2nQ__LG7kwzJDSpr9-DMU2Mkx8IGe5WSyvr7no2xN8E_JK5f7ZqEKNeawqhz1xYfFAKZUhNxr8Si16FcylaamlFhp3oYP33_6da_a-OST4FR4gjgeZo9FxZZpDplVozzy7wl-ySsvg4EC-K9Dy41ygRmC685D_cFoKoVYnxAagE6PfGaKvfh7AhAv3iGWfPkVst3wM6vO3tf9JxBQXflmCHhSj-tBR-EtWyZAhrwf3lNGK22vS2JqVhPFKY3" />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-6 pl-0">
                    <div>
                      <p className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase mb-2">MONOLITH STUDY II</p>
                      <h4 className="font-display-md text-3xl tracking-tight text-primary mb-6">Kento Nakamura</h4>
                      <div className="flex gap-12 mb-8">
                        <div>
                          <p className="font-label-caps text-[9px] tracking-widest text-primary/50 uppercase mb-1">COMMENCED</p>
                          <p className="font-body-md text-lg text-primary">Jan 04, 2024</p>
                        </div>
                        <div>
                          <p className="font-label-caps text-[9px] tracking-widest text-primary/50 uppercase mb-1">SUBSCRIPTION VALUE</p>
                          <p className="font-body-md text-lg text-primary">€890 / mo</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <p className="font-label-caps text-[9px] tracking-widest text-primary/60 uppercase">ROTATION ELIGIBILITY: 12% COMPLETE</p>
                        <p className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase">158 Days Remaining</p>
                      </div>
                      <div className="w-full h-1 bg-gallery-gold/10 overflow-hidden">
                        <div className="h-full bg-gallery-gold progress-bar" data-width="12%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            { /* Activity Sidebar */ }
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-8 reveal" style={{ transitionDelay: '200ms' }}>
              <section className="bg-white p-10 border border-gallery-gold/20 shadow-sm flex-1">
                <span className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase mb-4 block">MEMBER ACTIVITY</span>
                <h3 className="font-display-md text-3xl tracking-tight text-primary mb-10 pb-4 border-b border-gallery-gold/10">Recent Swap History</h3>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="relative shrink-0">
                      <div className="w-px h-full bg-gallery-gold/20 absolute left-1/2 -translate-x-1/2 top-4"></div>
                      <div className="w-3 h-3 rounded-full bg-gallery-gold relative z-10 ring-4 ring-white"></div>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase">SWAP COMPLETED</p>
                      <p className="text-primary/50 font-label-caps text-[9px] tracking-widest mb-3 mt-1 uppercase">Dec 15, 2023</p>
                      <p className="font-body-md text-sm text-primary mb-1 border-l-2 border-primary/20 pl-4">"The Fragmented Shore" returned.</p>
                      <p className="font-body-md text-sm text-primary border-l-2 border-primary/20 pl-4">"Echoes of Silence No. 4" installed.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="relative shrink-0">
                      <div className="w-px h-full bg-gallery-gold/20 absolute left-1/2 -translate-x-1/2 top-4"></div>
                      <div className="w-3 h-3 rounded-full bg-subtle-smoke border border-gallery-gold/50 relative z-10 ring-4 ring-white"></div>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase">MAINTENANCE CHECK</p>
                      <p className="text-primary/50 font-label-caps text-[9px] tracking-widest mb-3 mt-1 uppercase">Nov 02, 2023</p>
                      <p className="font-body-md text-sm text-primary border-l-2 border-primary/20 pl-4">Routine assessment of Monolith Study II completed by curator.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="relative shrink-0">
                      <div className="w-3 h-3 rounded-full bg-subtle-smoke border border-gallery-gold/50 relative z-10 ring-4 ring-white"></div>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase">SUBSCRIPTION INITIATED</p>
                      <p className="text-primary/50 font-label-caps text-[9px] tracking-widest mb-3 mt-1 uppercase">Oct 12, 2023</p>
                      <p className="font-body-md text-sm text-primary border-l-2 border-primary/20 pl-4">Premium Collection Plan activated.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-6 border-t border-gallery-gold/10">
                  <a className="inline-flex items-center gap-3 group text-primary hover:text-gallery-gold transition-colors" href="#">
                    <span className="font-label-caps text-[9px] tracking-[0.2em] uppercase">VIEW FULL ARCHIVE</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </section>

              { /* Support Card */ }
              <div className="bg-primary text-white p-10 space-y-6 relative overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gallery-gold/5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <span className="material-symbols-outlined text-gallery-gold text-3xl font-light relative z-10">auto_awesome</span>
                <h4 className="font-display-md text-2xl tracking-tight relative z-10">Bespoke Curation</h4>
                <p className="font-body-md text-white/70 leading-relaxed text-sm relative z-10">
                    Looking for something specific? Our head curators are available for 1-on-1 consultations to tailor your next swap.
                </p>
                <button className="w-full py-4 border border-gallery-gold/50 hover:bg-gallery-gold hover:border-gallery-gold transition-colors font-label-caps text-[10px] tracking-widest uppercase cursor-pointer relative z-10 shadow-sm">
                    SCHEDULE CALL
                </button>
              </div>
            </div>
          </div>

          { /* Management Section */ }
          <section className="border-t border-gallery-gold/20 pt-20 reveal" style={{ transitionDelay: '400ms' }}>
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase block mb-2">ADMINISTRATIVE</span>
                <h3 className="font-display-md text-3xl tracking-tight text-primary">Financial & Legal</h3>
              </div>
              <div className="flex gap-8">
                <button className="font-label-caps text-[10px] tracking-widest uppercase text-gallery-gold border-b-2 border-gallery-gold pb-2 cursor-pointer">ALL DOCUMENTS</button>
                <button className="font-label-caps text-[10px] tracking-widest uppercase text-primary/50 hover:text-primary transition-colors pb-2 cursor-pointer border-b-2 border-transparent hover:border-primary/20">PENDING ONLY</button>
              </div>
            </div>
            <div className="bg-white border border-gallery-gold/20 overflow-x-auto shadow-sm">
              <table className="w-full text-left">
                <thead className="border-b border-gallery-gold/20 bg-subtle-smoke">
                  <tr>
                    <th className="px-6 py-5 font-label-caps text-[9px] text-primary/60 uppercase tracking-[0.2em]">Document ID</th>
                    <th className="px-6 py-5 font-label-caps text-[9px] text-primary/60 uppercase tracking-[0.2em]">Description</th>
                    <th className="px-6 py-5 font-label-caps text-[9px] text-primary/60 uppercase tracking-[0.2em] text-center">Status</th>
                    <th className="px-6 py-5 font-label-caps text-[9px] text-primary/60 uppercase tracking-[0.2em] text-right">Amount</th>
                    <th className="px-6 py-5 font-label-caps text-[9px] text-primary/60 uppercase tracking-[0.2em] text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gallery-gold/10">
                  <tr className="group hover:bg-subtle-smoke/50 transition-colors">
                    <td className="px-6 py-6 font-body-md text-sm text-primary">KV-2024-0012</td>
                    <td className="px-6 py-6">
                      <p className="font-display-sm text-lg tracking-tight text-primary">Monthly Rental Invoice</p>
                      <p className="font-label-caps text-[9px] tracking-widest text-primary/50 mt-1 uppercase">Due Mar 01, 2024</p>
                    </td>
                    <td className="px-6 py-6 text-center align-middle">
                      <span className="px-3 py-1.5 bg-subtle-smoke border border-gallery-gold/30 text-primary text-[9px] font-label-caps tracking-widest uppercase">Paid</span>
                    </td>
                    <td className="px-6 py-6 text-right font-display-md text-xl tracking-tight text-primary">€2,130.00</td>
                    <td className="px-6 py-6 text-right align-middle">
                      <button className="material-symbols-outlined text-primary/50 hover:text-gallery-gold transition-colors cursor-pointer text-[20px]">download</button>
                    </td>
                  </tr>
                  <tr className="group hover:bg-subtle-smoke/50 transition-colors">
                    <td className="px-6 py-6 font-body-md text-sm text-primary">KV-L-4492-C</td>
                    <td className="px-6 py-6">
                      <p className="font-display-sm text-lg tracking-tight text-primary">Rental License Agreement</p>
                      <p className="font-label-caps text-[9px] tracking-widest text-primary/50 mt-1 uppercase">Updated Jan 15, 2024</p>
                    </td>
                    <td className="px-6 py-6 text-center align-middle">
                      <span className="px-3 py-1.5 bg-primary border border-primary text-white text-[9px] font-label-caps tracking-widest uppercase">Active</span>
                    </td>
                    <td className="px-6 py-6 text-right font-display-md text-xl tracking-tight text-primary/50">—</td>
                    <td className="px-6 py-6 text-right align-middle">
                      <button className="material-symbols-outlined text-primary/50 hover:text-gallery-gold transition-colors cursor-pointer text-[20px]">visibility</button>
                    </td>
                  </tr>
                  <tr className="group hover:bg-subtle-smoke/50 transition-colors">
                    <td className="px-6 py-6 font-body-md text-sm text-primary">KV-2024-0011</td>
                    <td className="px-6 py-6">
                      <p className="font-display-sm text-lg tracking-tight text-primary">Insurance Premium</p>
                      <p className="font-label-caps text-[9px] tracking-widest text-primary/50 mt-1 uppercase">Due Feb 15, 2024</p>
                    </td>
                    <td className="px-6 py-6 text-center align-middle">
                      <span className="px-3 py-1.5 bg-subtle-smoke border border-gallery-gold/30 text-primary text-[9px] font-label-caps tracking-widest uppercase">Paid</span>
                    </td>
                    <td className="px-6 py-6 text-right font-display-md text-xl tracking-tight text-primary">€450.00</td>
                    <td className="px-6 py-6 text-right align-middle">
                      <button className="material-symbols-outlined text-primary/50 hover:text-gallery-gold transition-colors cursor-pointer text-[20px]">download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        { /* Footer Shell */ }
        <footer className="w-full px-12 py-24 flex flex-col items-center justify-center gap-8 border-t border-gallery-gold/20 bg-paper-white mt-auto">
          <h2 className="font-display-md text-3xl tracking-[0.1em] text-primary uppercase mb-2">The Kala Vault</h2>
          <div className="flex gap-10 mb-6">
            <a className="font-label-caps text-[10px] tracking-widest uppercase text-primary/60 hover:text-gallery-gold transition-colors" href="#">Terms of Service</a>
            <a className="font-label-caps text-[10px] tracking-widest uppercase text-primary/60 hover:text-gallery-gold transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-caps text-[10px] tracking-widest uppercase text-primary/60 hover:text-gallery-gold transition-colors" href="#">Contact</a>
            <a className="font-label-caps text-[10px] tracking-widest uppercase text-primary/60 hover:text-gallery-gold transition-colors" href="#">Press Kit</a>
          </div>
          <p className="font-label-caps text-[9px] tracking-widest uppercase text-primary/40">© 2024 The Kala Vault. All Rights Reserved.</p>
        </footer>
      </main>

      { /* Floating Action for Mobile (Hidden on Desktop) */ }
      <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-gallery-gold text-white rounded-full shadow-2xl flex items-center justify-center z-50 cursor-pointer" onClick={() => setModalOpen(true)}>
        <span className="material-symbols-outlined text-[24px]">swap_calls</span>
      </button>
    </div>
  );
}
