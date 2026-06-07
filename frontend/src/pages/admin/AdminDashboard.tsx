import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  useEffect(() => {
    // Basic drag and drop visual effect emulation
    const dropArea = document.getElementById('drop-area');
    if (!dropArea) return;

    const preventDefaults = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
    };

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => {
            dropArea.classList.add('bg-secondary-container/10', 'border-secondary', 'drop-area-pulse');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => {
            dropArea.classList.remove('bg-secondary-container/10', 'border-secondary', 'drop-area-pulse');
        });
    });

    return () => {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.removeEventListener(eventName, preventDefaults, false);
      });
    };
  }, []);

  return (
    <div className="bg-paper-white text-primary font-body-md selection:bg-gallery-gold/30 min-h-screen">
      { /* Side Navigation Bar */ }
      <aside className="h-screen w-64 fixed left-0 top-0 bg-subtle-smoke border-r border-gallery-gold/20 flex flex-col py-margin-desktop z-50">
        <div className="px-6 mb-12">
          <Link to="/">
            <h1 className="font-display-lg text-2xl text-primary tracking-widest uppercase">The Kala Vault</h1>
          </Link>
          <p className="font-label-caps text-[10px] text-gallery-gold mt-2 tracking-[0.2em] uppercase">Admin Dashboard</p>
        </div>
        <nav className="flex-1 flex flex-col gap-2 overflow-y-auto hide-scrollbar px-4">
          { /* Active Tab: Dashboard */ }
          <a className="text-primary font-bold border-l-2 border-gallery-gold bg-gallery-gold/5 py-3 pl-4 flex items-center gap-4 transition-transform active:scale-[0.99]" href="#">
            <span className="material-symbols-outlined text-[18px]">dashboard</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase">Dashboard</span>
          </a>
          <a className="text-primary/70 pl-4 py-3 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all flex items-center gap-4 group border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px] group-hover:text-gallery-gold">palette</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase group-hover:text-gallery-gold">Inventory & Catalog</span>
          </a>
          <a className="text-primary/70 pl-4 py-3 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all flex items-center gap-4 group border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px] group-hover:text-gallery-gold">swap_horiz</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase group-hover:text-gallery-gold">Rotations & Leases</span>
          </a>
          <a className="text-primary/70 pl-4 py-3 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all flex items-center gap-4 group border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px] group-hover:text-gallery-gold">group</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase group-hover:text-gallery-gold">CRM & Clients</span>
          </a>
          <a className="text-primary/70 pl-4 py-3 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all flex items-center gap-4 group border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px] group-hover:text-gallery-gold">receipt_long</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase group-hover:text-gallery-gold">Billing & Contracts</span>
          </a>
          <a className="text-primary/70 pl-4 py-3 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all flex items-center gap-4 group border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px] group-hover:text-gallery-gold">query_stats</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase group-hover:text-gallery-gold">Analytics</span>
          </a>
          <a className="text-primary/70 pl-4 py-3 hover:bg-gallery-gold/5 hover:text-gallery-gold transition-all flex items-center gap-4 group border-l-2 border-transparent" href="#">
            <span className="material-symbols-outlined text-[18px] group-hover:text-gallery-gold">settings</span>
            <span className="font-label-caps text-[11px] tracking-widest uppercase group-hover:text-gallery-gold">Settings</span>
          </a>
        </nav>
        <div className="px-6 mt-auto flex flex-col gap-4">
          <button className="w-full bg-primary text-white py-4 px-4 font-label-caps text-[11px] tracking-widest uppercase transition-all hover:bg-gallery-gold flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-gallery-gold/10 hover:shadow-gallery-gold/30">
            <span className="material-symbols-outlined text-[16px]">add</span>
            Add Artwork
          </button>
          <div className="pt-6 border-t border-gallery-gold/20 flex flex-col gap-3">
            <a className="text-primary/70 flex items-center gap-4 py-2 hover:text-gallery-gold transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px]">help</span>
              <span className="font-label-caps text-[10px] tracking-widest uppercase">Help Center</span>
            </a>
            <Link className="text-primary/70 flex items-center gap-4 py-2 hover:text-gallery-gold transition-colors" to="/">
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span className="font-label-caps text-[10px] tracking-widest uppercase">Logout</span>
            </Link>
          </div>
        </div>
      </aside>

      { /* Main Content */ }
      <main className="ml-64 min-h-screen pb-32">
        { /* Top App Bar Content */ }
        <header className="h-24 flex justify-between items-center px-12 bg-paper-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gallery-gold/20">
          <div className="flex items-center gap-6">
            <h2 className="font-display-md text-3xl text-primary tracking-tight">Portfolio Overview</h2>
            <div className="flex items-center gap-2 bg-gallery-gold/10 border border-gallery-gold/30 px-3 py-1.5">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gallery-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gallery-gold"></span>
              </span>
              <span className="text-primary font-label-caps text-[9px] tracking-[0.2em] uppercase">SYSTEM SYNCED</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative group">
              <span className="material-symbols-outlined text-primary/70 hover:text-gallery-gold transition-colors cursor-pointer text-[20px]">search</span>
            </div>
            <Link to="/customer">
              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-right hidden sm:block">
                  <p className="font-label-caps text-[11px] tracking-widest uppercase text-primary">Julianne Vose</p>
                  <p className="font-label-caps text-[9px] text-gallery-gold tracking-widest uppercase">SENIOR CURATOR</p>
                </div>
                <img alt="Julianne Vose" className="w-10 h-10 object-cover border border-gallery-gold/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2os61ZC-SzBY8woxh4lEkqpkfjgIpoZJ1QYQ2VAxu7JxypLtQr7UFIZR8i6dBmNftf5XaMBqGqZotrOu3de6gnQJuf9LzFS5L8o0Qy3hn4cj3E6eYzqoTD0ppx86Yc23jBJFLmpa8iGmhDHpo03Omyw5SACY9B7dBQURRkTAGbiHfAS5WyV1KHdMS4CG1rPTvouKFuHFVu-S13yiJhzh3HFnQhqGpYmajxMGjm3ltQgtRqlTGDsQ_Mf9v5KCXhcB-fTqyk7JV-VuI" />
              </div>
            </Link>
          </div>
        </header>

        <div className="p-12 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            { /* LEFT SECTION: Artwork Status & Subscription */ }
            <div className="col-span-1 border-primary/20 lg:col-span-7 flex flex-col gap-16">
              { /* Artwork Status Tracking */ }
              <section>
                <div className="flex justify-between items-end mb-8 border-b border-gallery-gold/20 pb-4">
                  <div>
                    <h3 className="font-label-caps text-[10px] text-gallery-gold tracking-[0.3em] uppercase mb-2">OPERATIONAL FLOW</h3>
                    <h4 className="font-display-md text-4xl tracking-tight text-primary">Artwork Tracking</h4>
                  </div>
                  <div className="flex gap-2">
                    <span className="material-symbols-outlined p-2 border border-gallery-gold/20 hover:bg-gallery-gold hover:text-white cursor-pointer transition-all text-[18px]">filter_list</span>
                    <span className="material-symbols-outlined p-2 border border-gallery-gold/20 hover:bg-gallery-gold hover:text-white cursor-pointer transition-all text-[18px]">download</span>
                  </div>
                </div>
                <div className="bg-subtle-smoke border border-gallery-gold/20 p-0 overflow-hidden shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gallery-gold/20 text-left bg-white">
                        <th className="p-6 font-label-caps text-[10px] tracking-widest text-primary/60 uppercase">Asset Details</th>
                        <th className="p-6 font-label-caps text-[10px] tracking-widest text-primary/60 uppercase">Current Location</th>
                        <th className="p-6 font-label-caps text-[10px] tracking-widest text-primary/60 uppercase text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gallery-gold/10">
                      <tr className="hover:bg-white transition-all group cursor-pointer flex-row">
                        <td className="p-6">
                          <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white overflow-hidden group-hover:ring-1 group-hover:ring-gallery-gold/30 transition-all">
                              <img alt="Painting Texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGIQBMiEo7QgpWj_bcyy1Lb6Mbo_Pu2_GroFzqZEbkQAdZstt2hkMfkk3ZinO0fv2vsT3PZuta5QlhfT20Vai2ybiJymjZtW2k0sm8jlx3pKCu_G9Eg3u-VriyCWZkOOsVmXcuifuSpVUjm6gKTTm8nHlTxcgawKSICPsbHxquxrRis0VVvhTR1EpVaEJ8plaWWn99eAWu9aVz4TWUDxl_GKikvg2TrmxLxSF9X0_fnvOAPbiKAZvBSNjuRUDEtLZG0NEbyuoF5n8e" />
                            </div>
                            <div>
                              <p className="font-display-md text-xl leading-tight mb-1 group-hover:text-gallery-gold transition-colors tracking-tight">Obsidian Void #4</p>
                              <p className="font-label-caps text-[10px] tracking-widest text-primary/50 uppercase">KV-9902-TR</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-6 align-middle">
                          <p className="font-body-md text-base text-primary">Zurich Warehouse (Sec. B)</p>
                          <p className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase mt-1">TRANSIT PENDING</p>
                        </td>
                        <td className="p-6 text-right align-middle">
                          <span className="px-3 py-1.5 bg-primary text-white font-label-caps text-[9px] tracking-widest uppercase border border-primary group-hover:bg-gallery-gold group-hover:border-gallery-gold transition-all">IN VAULT</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-white transition-all group cursor-pointer border-t border-gallery-gold/10">
                        <td className="p-6">
                          <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-white overflow-hidden group-hover:ring-1 group-hover:ring-gallery-gold/30 transition-all">
                              <img alt="Architectural Photo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfypeQoUjr9PF7JYglFZd290aT0tJ6kJq9ba7gQv66Nkk-EgQKbG_yzU-khC6ZstLKlvZ5YILLfRAXotdD-Zsj5C2ez7tY4zeXSFoA0WqppaVF5cbnfq79qcHO0vM52afEenF5qkeuIi6IDqhrg2o07_RTqxZDEEmxh4RMB9QAOYv82SYMJ1BZ4qKSkFcFNusQySja_I7TEFytzUqVFgpfEerMAW-LQqu79GV2DxCKovSVK3ARNcol5yZmjhJTHVH3SKj_rtGCvRq2" />
                            </div>
                            <div>
                              <p className="font-display-md text-xl leading-tight mb-1 group-hover:text-gallery-gold transition-colors tracking-tight">Ethereal Plane</p>
                              <p className="font-label-caps text-[10px] tracking-widest text-primary/50 uppercase">KV-1145-LX</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-6 align-middle">
                          <p className="font-body-md text-base text-primary">Penthouse, NYC (Client Loc)</p>
                          <p className="font-label-caps text-[10px] tracking-widest text-primary/50 uppercase mt-1">ON LOAN UNTIL 12.24</p>
                        </td>
                        <td className="p-6 text-right align-middle">
                          <span className="px-3 py-1.5 bg-subtle-smoke text-primary font-label-caps text-[9px] tracking-widest uppercase border border-gallery-gold/30 group-hover:border-gallery-gold transition-all">PLACED</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="p-4 border-t border-gallery-gold/20 bg-white text-center">
                    <button className="font-label-caps text-[10px] tracking-widest text-primary hover:text-gallery-gold uppercase transition-colors">View Inventory (482 Assets) →</button>
                  </div>
                </div>
              </section>

              { /* Subscription Lifecycle */ }
              <section>
                <div className="border-b border-gallery-gold/20 pb-4 mb-8">
                   <h4 className="font-display-md text-4xl tracking-tight text-primary">Subscription Vitality</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gallery-gold/20 p-8 shadow-sm relative overflow-hidden group hover:border-gallery-gold transition-colors cursor-pointer">
                    <div className="relative z-10">
                      <p className="font-label-caps text-[10px] tracking-widest text-primary/60 uppercase mb-4">ACTIVE SUBSCRIPTIONS</p>
                      <div className="flex items-baseline gap-4">
                        <p className="font-display-lg text-6xl leading-none text-primary">124</p>
                        <p className="font-body-sm text-gallery-gold text-sm">+8.4%</p>
                      </div>
                      <div className="mt-10 h-[2px] bg-gallery-gold/10 w-full relative">
                        <div className="absolute top-0 left-0 h-full bg-gallery-gold w-3/4 transition-all duration-1000 group-hover:w-full"></div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined absolute -bottom-4 right-0 text-[120px] text-subtle-smoke select-none transition-transform group-hover:scale-110 group-hover:text-gallery-gold/5">verified_user</span>
                  </div>
                  <div className="bg-white border border-gallery-gold/20 p-8 shadow-sm relative overflow-hidden group hover:border-gallery-gold transition-colors cursor-pointer">
                    <div className="relative z-10">
                      <p className="font-label-caps text-[10px] tracking-widest text-primary/60 uppercase mb-4">UPCOMING RENEWALS</p>
                      <div className="flex items-baseline gap-4">
                        <p className="font-display-lg text-6xl leading-none text-primary">18</p>
                        <p className="font-body-sm text-primary/60 text-sm">This Month</p>
                      </div>
                      <div className="mt-8 flex gap-3">
                        <button className="flex-1 bg-primary text-white font-label-caps text-[9px] tracking-[0.2em] py-3 hover:bg-gallery-gold transition-colors cursor-pointer">SEND ALERTS</button>
                        <button className="flex-1 border border-primary text-primary font-label-caps text-[9px] tracking-[0.2em] py-3 hover:bg-subtle-smoke transition-colors cursor-pointer">REVIEW</button>
                      </div>
                    </div>
                    <span className="material-symbols-outlined absolute -bottom-4 right-0 text-[120px] text-subtle-smoke select-none transition-transform group-hover:scale-110 group-hover:text-gallery-gold/5">event_repeat</span>
                  </div>
                </div>
              </section>

              { /* Catalog Intake Form */ }
              <section className="bg-white p-10 border border-gallery-gold/20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gallery-gold/5 to-transparent pointer-events-none rounded-bl-full" />
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h4 className="font-display-md text-3xl tracking-tight text-primary">Artwork Catalog Intake</h4>
                    <p className="font-body-md text-primary/60 mt-2">Register new assets into the primary vault database.</p>
                  </div>
                  <span className="material-symbols-outlined text-gallery-gold text-3xl font-light">inventory_2</span>
                </div>
                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  { /* Drag & Drop Area */ }
                  <div className="border border-gallery-gold border-dashed p-16 text-center bg-subtle-smoke hover:bg-gallery-gold/5 transition-all duration-300 cursor-pointer group" id="drop-area">
                    <span className="material-symbols-outlined text-4xl text-gallery-gold mb-6 group-hover:scale-110 transition-transform font-light">cloud_upload</span>
                    <p className="font-label-caps text-[11px] tracking-widest text-primary uppercase">DRAG HIGH-RES ASSET MEDIA</p>
                    <p className="font-label-caps text-[9px] tracking-widest text-primary/50 mt-4 uppercase">TIFF, RAW, or 4K ProRes Video supported</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-2 md:col-span-1 border-b border-primary/20 hover:border-gallery-gold focus-within:border-gallery-gold transition-colors pb-2">
                      <label className="font-label-caps text-[9px] tracking-widest text-primary/60 mb-2 block uppercase">ASSET ID</label>
                      <input className="w-full bg-transparent focus:outline-none focus:ring-0 font-body-md text-lg placeholder:text-primary/30" placeholder="KV-XXXX-XX" type="text" />
                    </div>
                    <div className="col-span-2 md:col-span-1 border-b border-primary/20 hover:border-gallery-gold focus-within:border-gallery-gold transition-colors pb-2">
                      <label className="font-label-caps text-[9px] tracking-widest text-primary/60 mb-2 block uppercase">BARCODE / SKU</label>
                      <input className="w-full bg-transparent focus:outline-none focus:ring-0 font-body-md text-lg placeholder:text-primary/30" placeholder="Scan or Enter SKU" type="text" />
                    </div>
                    <div className="col-span-2 border-b border-primary/20 hover:border-gallery-gold focus-within:border-gallery-gold transition-colors pb-2">
                      <label className="font-label-caps text-[9px] tracking-widest text-primary/60 mb-2 block uppercase">CONDITION LOG / NOTES</label>
                      <textarea className="w-full bg-transparent focus:outline-none focus:ring-0 font-body-md text-lg placeholder:text-primary/30 resize-none mt-1" placeholder="Document any visible wear..." rows={2}></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end gap-6 pt-6">
                    <button className="px-8 py-3 font-label-caps text-[10px] tracking-widest text-primary hover:text-gallery-gold transition-colors uppercase cursor-pointer" type="reset">DISCARD</button>
                    <button className="px-10 py-3 font-label-caps text-[10px] tracking-widest uppercase bg-primary text-white hover:bg-gallery-gold relative transition-colors cursor-pointer shadow-sm" type="submit">
                        SAVE TO VAULT
                    </button>
                  </div>
                </form>
              </section>
            </div>

            { /* RIGHT SECTION: CRM Lead Pipeline */ }
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-12">
              <section className="lg:sticky lg:top-36 border border-gallery-gold/20 bg-white p-8 lg:p-10 shadow-sm">
                <div className="flex justify-between items-end mb-10 pb-4 border-b border-gallery-gold/20">
                  <div>
                    <h3 className="font-label-caps text-[10px] tracking-widest text-gallery-gold uppercase mb-2">RELATIONSHIP MANAGEMENT</h3>
                    <h4 className="font-display-md text-3xl tracking-tight text-primary">Lead Pipeline</h4>
                  </div>
                  <div className="text-right">
                     <p className="font-label-caps text-[9px] tracking-widest text-primary/50 uppercase">TOTAL PIPELINE</p>
                     <p className="font-display-md text-2xl text-gallery-gold tracking-tight">$2.4M</p>
                  </div>
                </div>
                <div className="space-y-8">
                  { /* CRM Stage: Qualification */ }
                  <div className="bg-subtle-smoke p-6 border border-gallery-gold/10">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-label-caps text-[9px] tracking-widest uppercase bg-white border border-gallery-gold/20 px-3 py-1 border-l-2 border-l-primary/30">QUALIFICATION</span>
                      <span className="font-label-caps text-[10px] tracking-widest text-primary/60">3 LEADS</span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white border border-gallery-gold/10 p-5 hover:border-gallery-gold transition-colors cursor-pointer group shadow-sm">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-display-md text-lg group-hover:text-gallery-gold transition-colors tracking-tight">Harrison Fine Arts</p>
                            <p className="text-sm font-body-sm text-primary/60 mt-1">Subscription: Museum Tier</p>
                          </div>
                          <div className="text-right">
                            <p className="font-label-caps text-[11px] tracking-widest text-gallery-gold">$14,500/mo</p>
                            <p className="text-[10px] font-label-caps text-primary/40 mt-1">2D AGO</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-gallery-gold/10 p-5 hover:border-gallery-gold transition-colors cursor-pointer group shadow-sm">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-display-md text-lg group-hover:text-gallery-gold transition-colors tracking-tight">Vance Residency</p>
                            <p className="text-sm font-body-sm text-primary/60 mt-1">Inquiry: Private Estate</p>
                          </div>
                          <div className="text-right">
                            <p className="font-label-caps text-[11px] tracking-widest text-gallery-gold">$8,200/mo</p>
                            <p className="text-[10px] font-label-caps text-primary/40 mt-1">5H AGO</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  { /* CRM Stage: Negotiation */ }
                  <div className="bg-primary p-6 shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="flex justify-between items-center mb-6 relative z-10">
                      <span className="font-label-caps text-[9px] tracking-widest uppercase bg-gallery-gold text-white px-3 py-1">NEGOTIATION</span>
                      <span className="font-label-caps text-[10px] tracking-widest text-white/50">1 LEAD</span>
                    </div>
                    <div className="bg-white border border-gallery-gold/50 p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-shadow cursor-pointer group relative z-10">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-display-md text-xl group-hover:text-gallery-gold transition-colors tracking-tight text-primary">Stellaris Group</p>
                          <p className="text-sm font-body-sm text-primary/70 mt-1">Corporate Portfolio</p>
                          <div className="mt-5 flex gap-4">
                            <span className="material-symbols-outlined text-[16px] text-gallery-gold hover:scale-125 transition-transform">mail</span>
                            <span className="material-symbols-outlined text-[16px] text-gallery-gold hover:scale-125 transition-transform">call</span>
                            <span className="material-symbols-outlined text-[16px] text-gallery-gold hover:scale-125 transition-transform">assignment</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-display-md text-2xl text-gallery-gold">$42,000/yr</p>
                          <span className="font-label-caps text-[9px] bg-gallery-gold/10 text-gallery-gold border border-gallery-gold/20 tracking-widest px-2 py-1 mt-3 inline-block">HOT LEAD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  { /* CRM Stage: Closing */ }
                  <div className="bg-subtle-smoke p-6 border border-gallery-gold/10">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-label-caps text-[9px] tracking-widest uppercase bg-white border border-gallery-gold/20 px-3 py-1 border-l-2 border-l-gallery-gold">CLOSING</span>
                      <span className="font-label-caps text-[10px] tracking-widest text-primary/60">0 LEADS</span>
                    </div>
                    <div className="border border-dashed border-gallery-gold/30 p-10 text-center bg-white/50">
                      <p className="font-label-caps text-[10px] tracking-widest text-primary/40 uppercase">Drag leads here to finalize</p>
                    </div>
                  </div>
                </div>

                { /* Recent Activity Feed */ }
                <div className="mt-16 pt-8 border-t border-gallery-gold/20">
                  <h4 className="font-label-caps text-[10px] tracking-widest text-primary uppercase mb-8">Global Activity Log</h4>
                  <ul className="space-y-8">
                    <li className="flex gap-6 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-gallery-gold mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                      <div>
                        <p className="font-body-md text-base text-primary"><span className="font-medium tracking-tight">Asset KV-1145</span> arrived at NYC Residence.</p>
                        <p className="font-label-caps text-[9px] tracking-widest text-primary/50 uppercase mt-2">10:45 AM · LOGISTICS UNIT 4</p>
                      </div>
                    </li>
                    <li className="flex gap-6 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                      <div>
                        <p className="font-body-md text-base text-primary"><span className="font-medium tracking-tight">Subscription Renewal</span> confirmed for O'Connor Gallery.</p>
                        <p className="font-label-caps text-[9px] tracking-widest text-primary/50 uppercase mt-2">09:12 AM · ACCOUNTS</p>
                      </div>
                    </li>
                    <li className="flex gap-6 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/80 mt-2 shrink-0 animate-pulse"></div>
                      <div>
                        <p className="font-body-md text-base text-primary"><span className="font-medium tracking-tight">Condition Alert</span> high humidity in Zurich Section B.</p>
                        <p className="font-label-caps text-[9px] text-red-500/80 tracking-widest uppercase mt-2">08:50 AM · SENSOR ALERT</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>

        { /* Footer */ }
        <footer className="w-full px-12 py-12 flex flex-col items-center justify-center gap-6 bg-paper-white border-t border-gallery-gold/20 mt-20">
          <div className="flex gap-8 mb-4">
            <a className="font-label-caps text-[10px] tracking-widest text-primary/60 hover:text-gallery-gold transition-all uppercase" href="#">Terms of Service</a>
            <a className="font-label-caps text-[10px] tracking-widest text-primary/60 hover:text-gallery-gold transition-all uppercase" href="#">Privacy Policy</a>
            <a className="font-label-caps text-[10px] tracking-widest text-primary/60 hover:text-gallery-gold transition-all uppercase" href="#">Contact</a>
            <a className="font-label-caps text-[10px] tracking-widest text-primary/60 hover:text-gallery-gold transition-all uppercase" href="#">Press Kit</a>
          </div>
          <p className="font-label-caps text-[9px] tracking-widest text-primary/40 uppercase">© 2024 The Kala Vault. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
