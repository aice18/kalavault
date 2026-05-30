'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { ProcessSteps } from '@/components/ProcessSteps';

const curatedSelection = [
  {
    artist: 'Elena Rossi',
    title: 'The Gaze of Silence',
    price: '$150 / mo',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADbFUEXVZ0qu64OHLAH0bdSHCr8lVZxAkHII2gFamHs8h17LiB87Rd7blp1HkW2GPMA9YS-PpRgJIJ8dzW1xtK0pAid56m4K5CSKRcnYQ5_3v4TE8u_LT567nidnCpe5CGPrheiaNB1oMf4T30RMqLJAPP1gYolh26eFJp8bCcE9L5HDlhjGqXpoXQ4rsMF3PUHZCtC6VIb8L9zyjniYNRsqiD3nDhr_mfz1hjrqrTiVTq38CyhGQDhdH6GdF2j3aZtC7paBagEiw',
  },
  {
    artist: 'Marcus Chen',
    title: 'Urban Tectonic II',
    price: '$185 / mo',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZqZZ80_Ho1o4KEoH7j_zBmGlGYGsGIxGBR_NXT1ZawZLC5lELgLj7l-ULMrSN2MN3AnJXK8Y_30q9sNtYJ7tjiCYBXvpWByIp8lPon5pRz6elo6Z0qXV7LUpKERImLxjksFetSA0NotqON7gkgkIqP0C5oKC0NwRVg_Bcq_pQ7m08rkVz47BE0b3MzZm5WghjGn7pz4s7itfowcjf3-3-znyb_XN-AaQ0FOsFgjsvLS2EsuZz9g-BtRP7gWrWhEA-HwkTSdy8cDY',
  },
  {
    artist: 'Sana Varma',
    title: 'Monsoon Whispers',
    price: '$210 / mo',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQZZNoHXqUriLFhlzAQpszIWG0JVHWFz3QARUHrsHqw-AbzaizLl5KjRKZmPFkKBTxyynVlh7K4N-Tj4nHpQ3HU72rOkbdzztxgtcAJ7WPgh1SlxPBS4cEFx9KLRAXEKF1jBzYtxtY4kEERUirdZhxYFERmV-Pa6cbHYrvtDecULta2kjIDGP2ZOTO9wnwkwnd4f-z79_PTswuV6vnjO09ySSkoPFuTfDcyiMMA3TlIfn-Tt2r8v1mEJZo5GfYKAQHuGJMB7bgG1w',
  },
  {
    artist: 'Vikram Seth',
    title: 'Celestial Flow',
    price: '$240 / mo',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDVPljk4-a_7GJfwXGj8kj-fidZzJqfI0j4aRiO6pQQBGz6sGJ2CTNjO7IFgFwszHGXorzslK83dxryqUTjvtssnnY-2XJcUzvUHdM22rcBiNvIwhpWkmVU0qw9mliCz0LL48rxDGrRHr3up7lUdJrAwQmlgb8AmppFnTlljfC8s9bKBoUmntyQfloTrbGjC2JQqAYLShFz43Jm4L24PBgaTNpTVs4AdMrHJduftX9n6I5VRTOnIjoFJohKh7Vs8bcOh5NryWQ-Z8',
  },
  {
    artist: 'Anya Gupta',
    title: 'Heritage Rhythms',
    price: '$130 / mo',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCHEhVnHXH-5pQE9EC6qYYZS16i7LQqLaYz1IKDqvHDEjtRUQXl4DPVWDNN7ZUUSChNJf1DnJ_GFx1elBzIx73ayTZgaJRdEF_9jHipQoo_LZ-GFvTrwKQPzQJmtZlRQyW1F0eRqfG3Gd_07GWW8VUVQK-_gvhLysDVGO5ryL5uFKRcjIUwnQRURIYHKpo6WJFygtCDUfnUqwoFC9fLP_knfuSwNvF_admsVsR_mlHhH0a7s5TaExcTRhVpphQsnQgYgY3H6UHelYo',
  },
  {
    artist: 'Kaito Tanaka',
    title: 'Zen Garden I',
    price: '$110 / mo',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7s-xJLLRwrC8BsRh3p5cvyx6Nf9bRHS99Rt_mUku37MBzEp7clOiJhzoKgxi_4aZcLk8JPCjhObZb0OWWCJCRuDATNq__ygNt3QdrrnrYgPolWqV38F0BpJVoHYG516k24OqjYOxOP2p8xxyK8XbjI7mJAq1WdbjI4pR0gO6aqoHvQXMz_qibavnNzl4oy2wpt4da__uL66s8XZI05O5SYf4S2UXTOZKlqLghlvx2teKtssyPjoOXD1NwRIqWuUshUaJeI_L7AMU',
  },
];

export default function HomePage() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateScrollButtons = () => {
      const el = scrollRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    updateScrollButtons();
    const el = scrollRef.current;
    el?.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section, .art-card-hover').forEach((element) => {
      element.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(element);
    });

    const heroText = document.querySelector('h1');
    const heroButtons = heroText?.nextElementSibling as HTMLElement | null;

    if (heroText) {
      heroText.classList.add('transition-all', 'duration-1000', 'delay-300', 'opacity-0', 'translate-y-4');
    }
    if (heroButtons) {
      heroButtons.classList.add('transition-all', 'duration-1000', 'delay-500', 'opacity-0', 'translate-y-4');
    }

    const heroAnimationTimeout = window.setTimeout(() => {
      if (heroText) {
        heroText.classList.remove('opacity-0', 'translate-y-4');
      }
      if (heroButtons) {
        heroButtons.classList.remove('opacity-0', 'translate-y-4');
      }
    }, 100);

    return () => {
      el?.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
      observer.disconnect();
      window.clearTimeout(heroAnimationTimeout);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.5; // after half hero
      setIsScrolled(window.scrollY > trigger);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <main className="overflow-x-hidden text-matte-black font-bold">
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-sm border-b border-outline/10">
        <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-3 items-center px-4 md:px-20">
          <div className="hidden md:flex md:items-center md:gap-10">
            <Link href="/gallery" className="font-label-caps text-label-caps text-matte-black/70 transition duration-300 hover:text-matte-black">
              Collections
            </Link>
            <Link href="/services" className="font-label-caps text-label-caps text-matte-black/70 transition duration-300 hover:text-matte-black">
              Services
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="font-headline-lg-mobile md:font-display-lg text-[22px] md:text-[28px] lg:text-[32px] leading-[28px] md:leading-[36px] tracking-[0.12em] font-semibold text-[#b0871d]"
            >
              THE KALA VAULT
            </Link>
          </div>

          <div className="flex items-center justify-end gap-6">
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link href="/vault" className="font-label-caps text-label-caps text-matte-black/70 transition duration-300 hover:text-matte-black">
                Subscriptions
              </Link>
              <Link href="/manifesto" className="font-label-caps text-label-caps text-matte-black/70 transition duration-300 hover:text-matte-black">
                Manifesto
              </Link>
            </div>

            <Link
              href="/onboarding"
              className="font-label-caps text-label-caps uppercase tracking-widest text-matte-black border border-black px-4 py-2.5 hover:bg-matte-black hover:text-paper-white transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative h-screen w-full overflow-hidden pt-20">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="A sprawling, high-end minimalist living room with floor-to-ceiling windows overlooking a serene landscape. A massive, textured abstract oil painting in muted ochre and charcoal tones serves as the focal point on a pristine white wall. The furniture is low-profile and sculptural, finished in premium leathers and light woods. The lighting is soft and architectural, creating an atmosphere of quiet luxury and editorial sophistication."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRl-C8stKkrCsi-uPouiKhkpaOv2eQqpxSU5ASM6gU2nx-M8oaLc4_6Y9Wd4mRcTWW5iURU5C0OjtCPRbWJQdwH2h1FyMMyNLeHc8N4UqJUke-hQBMP-OuUgtHeGlynrSlSrKxIb5fmyQDKTgSuRPf-kgHSsM-JJDC2DZQWh0G85BNhIao9Vd61GkXKEYSK9QDvpe7__NLoFtjWZ5FtyPG_XYtJCp4v2jaWu7J0f6crm4nNRNbapTTRJ4ovPLjCLKQYMamatxFvbs"
        />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-3xl px-6 py-10 md:px-0 md:py-0">
            <div className="max-w-2xl rounded-[32px] border border-white/20 bg-white/20 p-8 shadow-soft backdrop-blur-xl md:p-10">
              <p className="text-sm uppercase tracking-[0.35em] text-matte-black/70">Curated Selection</p>
              <h1 className="mt-6 text-5xl font-black tracking-[-0.03em] text-matte-black md:text-[72px] md:leading-[0.95]">
                Art for Every Chapter
              </h1>
              <p className="mt-6 text-lg leading-8 text-matte-black/85">
                Discover museum-grade artwork, curated spaces, and white-glove delivery designed to elevate every private interior.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button className="min-w-[220px]">Explore Collection</Button>
                <Button variant="ghost" className="min-w-[220px]">Rent Artwork</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-20 hidden md:flex items-center gap-4 text-paper-white/60">
          <span className="font-label-caps text-[10px]">SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-paper-white/20"></div>
        </div>
      </section>

      <section className="py-section-gap px-5 md:px-20 max-w-[1600px] mx-auto">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-label-caps text-label-caps text-gallery-gold mb-4 uppercase tracking-[0.2em]">
              Curated Selection
            </p>
            <h2 className="font-headline-lg text-headline-lg">Latest Acquisitions</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollBy({ left: -el.clientWidth * 0.9, behavior: 'smooth' });
              }}
              disabled={!canScrollLeft}
              className="inline-flex h-12 w-12 items-center justify-center rounded border border-black/10 bg-transparent text-matte-black transition hover:bg-[#f3e7d8] hover:text-matte-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                el.scrollBy({ left: el.clientWidth * 0.9, behavior: 'smooth' });
              }}
              disabled={!canScrollRight}
              className="inline-flex h-12 w-12 items-center justify-center rounded border border-black/10 bg-transparent text-matte-black transition hover:bg-[#f3e7d8] hover:text-matte-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
          >
            {curatedSelection.map((item) => (
              <div
                key={item.title}
                className="snap-center flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_32%]"
              >
                <div className="art-card-hover group cursor-pointer overflow-hidden rounded-none bg-white shadow-soft">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      alt={`${item.title} by ${item.artist}`}
                      src={item.image}
                    />
                  </div>
                  <div className="space-y-1 p-6">
                    <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-matte-black/70">
                      {item.artist}
                    </p>
                    <h3 className="font-headline-md text-headline-md italic">{item.title}</h3>
                    <p className="font-body-md text-on-surface-variant pt-2">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* removed white edge gradients to reduce contrast */}
        </div>
      </section>

      <section className="py-section-gap flex flex-col md:flex-row w-full h-[819px] md:h-[921px]">
        <div className="group relative w-full h-full overflow-hidden flex-1 border-r border-paper-white/10">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            alt="A large-scale minimalist art banner showcasing an airy, modern interior with soft architectural lines. The focus is on a piece of art that features monochromatic gradients. The lighting is diffused and natural, highlighting a sophisticated, calm, and high-end living environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnaNS-PXVKrMZL6kUS4fpBdjbl5bXbbbf333fEG9JA9hLjEnMJ_ugmDRN00S6GEOzaEZCjvGMnoVyKPPs7bnzmDJEC0462krDEXR3QvXngFckb4zQpyQDY-e3AOCqcuEYQN5TyBUX45ZrhYw7YC65sWu2L9YL0SdLn0YInjZL9F-E1vkC5VLNWh8rJoI0-tVgO5N6OSbM5yCCkq1KDKB8CXk_WizAM4-cpCq5JF1JdAFoOCRbpxS55Wyxc6iEGNwVCaw6Y79fHqvs"
          />
          <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-matte-black/40 transition-colors duration-700"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-paper-white p-12 text-center">
            <p className="font-label-caps text-label-caps tracking-[0.3em] mb-4 opacity-80 uppercase">Collection 01</p>
            <h2 className="font-display-lg-mobile md:text-headline-lg mb-8">Modern Minimal</h2>
            <button className="font-label-caps text-label-caps border border-paper-white px-8 py-3 uppercase tracking-widest hover:bg-paper-white hover:text-matte-black transition-all duration-300">
              Explore
            </button>
          </div>
        </div>
        <div className="group relative w-full h-full overflow-hidden flex-1">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            alt="A dramatic interior banner featuring a contemporary Indian art setting. The space uses rich, dark textures and warm ambient lighting to highlight artwork with intricate cultural motifs and bold colors. The overall aesthetic is one of heritage meeting modern luxury, creating a powerful visual narrative."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDeWl2JX3y5bJNiy9ZMvLCxjxIkpmGGistEi80i-3VWj-jiKetT7E0w2JhvOLWGcp8boBku3P1NH1sZcVvsSTKqodNAqb4ysrx16gUKK6OuSjSlon93PrGh6SuqlI96y43DQRHrazKgnbgZ3v-125upSU6QW-pUncmB2jcycH7A5UWdxtTq4aMmej8gy1qHR3RwSfLP8a3K2vJzHeYjTjJCMuPSkliShqlkfrVoGCxsZgm5JALQtOQQa6bjDOmN3CTGDoRPNOevP4"
          />
          <div className="absolute inset-0 bg-matte-black/20 group-hover:bg-matte-black/40 transition-colors duration-700"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-paper-white p-12 text-center">
            <p className="font-label-caps text-label-caps tracking-[0.3em] mb-4 opacity-80 uppercase">Collection 02</p>
            <h2 className="font-display-lg-mobile md:text-headline-lg mb-8">Contemporary Indian</h2>
            <button className="font-label-caps text-label-caps border border-paper-white px-8 py-3 uppercase tracking-widest hover:bg-paper-white hover:text-matte-black transition-all duration-300">
              Explore
            </button>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="py-section-gap px-5 md:px-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="A premium luxury bedroom interior featuring a large abstract painting above a low-profile bed. The lighting is moody and warm, creating long shadows and highlighting the rich textures of velvet and linen. The overall scene is editorial and refined, demonstrating how art elevates a high-end personal sanctuary."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_lfwtAzyFIfTNLKi9QYrnf3k36HGNX68Td0f2LzAhedS1CGwCA0Qx4zC2TZb9Es5XA46x6GONusZW875b8JbY_8DnV_pmOtfUYcxoKcQZgmFnPVXfHujEMFmAo-rpDbYD67TiIef5d8jrYzvCMay5rU_0sMXaYziUYXSTWV3bL1SbMyP-nZAn39AAF3L_PCyQM-EfBViMp_Ro4WcmP4L7qRrED4BIvCzTmGAX90CEt20qn9TtYso2bYbdtmkyPyiYz64780nE3FI"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden md:block w-64 aspect-square border-8 border-paper-white bg-surface-container-highest overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                alt="A detailed close-up shot of a white-glove professional carefully hanging a large framed artwork in a minimalist gallery-style home. The focus is on the precision and care of the installation process, reinforcing the brand's commitment to premium service and luxury."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9hgPKm3x2DG62NPUAcYKLIHPkK6WSbVlR0DFSeLOnHIBKMPZuxOHRMlC5KJStxLq9Q27AerCIrcUEnAuMGXEqXBX7UiAPVHAmYFo4fgl4sTu5DGqtc1YwOQswHQDHID5tqG4wFmdzvkfC4fXdyicI46HcOUTD-hOWjp6kXjoPqKpwrOZbkulXL4Wbrv4QxURF81MIVXtGwS1n1rQEV6YDVxnJrJ_NjbpN5AhJfdKRSvRJQu9LqAYvO4FQ5Cg6N5QwSA67u40tFNs"
              />
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg mb-6">Designed for the Discerning Collector</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                We believe that art should be as fluid as the lives we lead. Kala Vault provides access to the world's most significant contemporary artists through a model that favors experience over ownership.
              </p>
            </div>
            <div className="pt-8 border-t border-outline/10">
              <p className="font-label-caps text-label-caps text-matte-black mb-8 uppercase tracking-widest">Trusted by leading designers</p>
              <div className="grid grid-cols-3 gap-8 grayscale opacity-50">
                <div className="h-10 flex items-center justify-center font-headline-lg-mobile text-[18px] font-bold">VOGUE</div>
                <div className="h-10 flex items-center justify-center font-headline-lg-mobile text-[18px] font-bold">ARCH DIGEST</div>
                <div className="h-10 flex items-center justify-center font-headline-lg-mobile text-[18px] font-bold">ELLE DECOR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .art-card-hover img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .art-card-hover:hover img {
          transform: scale(1.04);
        }

        .font-body-md {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
        }

        .font-display-lg-mobile {
          font-family: var(--font-serif);
          font-size: 40px;
          line-height: 48px;
          letter-spacing: -0.01em;
          font-weight: 700;
        }

        /* Hide scrollbars but keep scrolling functional for elements with .no-scrollbar */
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      `}</style>
    </main>
  );
}
