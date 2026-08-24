import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#f05a1a" strokeWidth="2"/>
        <circle cx="16" cy="16" r="8" stroke="#f05a1a" strokeWidth="2"/>
        <circle cx="16" cy="16" r="2" fill="#f05a1a"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="#f05a1a" strokeWidth="2"/>
        <line x1="16" y1="26" x2="16" y2="30" stroke="#f05a1a" strokeWidth="2"/>
        <line x1="2" y1="16" x2="6" y2="16" stroke="#f05a1a" strokeWidth="2"/>
        <line x1="26" y1="16" x2="30" y2="16" stroke="#f05a1a" strokeWidth="2"/>
      </svg>
    ),
    title: "Instant Visual Feedback",
    desc: "See exactly where every round hits — no walking downrange to check holes.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 2 L18 10 L26 10 L20 15 L22 23 L16 18 L10 23 L12 15 L6 10 L14 10 Z" fill="#f05a1a"/>
      </svg>
    ),
    title: "Explosive Color",
    desc: "10 vivid powder colors burst on impact. You'll see it from any distance.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="12" width="24" height="14" rx="2" stroke="#f05a1a" strokeWidth="2"/>
        <path d="M10 12V8a6 6 0 0112 0v4" stroke="#f05a1a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Sticks to Any Surface",
    desc: "3M adhesive pad grips to steel, wood, paper, cardboard, concrete — and more.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3 C16 3 6 8 6 18 C6 24 10.5 28 16 28 C21.5 28 26 24 26 18 C26 8 16 3 16 3Z" stroke="#f05a1a" strokeWidth="2" fill="none"/>
        <path d="M11 18 L15 22 L21 14" stroke="#f05a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Eco-Friendly PHA Shell",
    desc: "Biodegradable material. Perform at the range without leaving a mess behind.",
  },
];

const steps = [
  { num: "1", label: "PEEL", desc: "Peel the target from its backing." },
  { num: "2", label: "STICK", desc: "Stick firmly to any clean, dry surface." },
  { num: "3", label: "SHOOT", desc: "Aim for center for maximum reaction." },
];

const surfaces = ["STEEL", "PAPER", "CARDBOARD", "WOOD", "CONCRETE", "+ MORE"];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0d0d0d] to-[#1a0a00]" />
        {/* Orange glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f05a1a] opacity-10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#f05a1a] opacity-5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Copy */}
          <div>
            <div className="inline-block bg-[#f05a1a]/10 border border-[#f05a1a]/30 text-[#f05a1a] text-xs font-[family-name:var(--font-display)] tracking-widest px-3 py-1 mb-6">
              REACTIVE POWDER TARGETS
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-black text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
              STICK IT.<br />
              SHOOT IT.<br />
              <span className="text-[#f05a1a]">SEE IT.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
              Kineticube reactive powder targets explode in a burst of color on impact —
              giving you instant visual feedback on every single shot.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="btn-orange bg-[#f05a1a] hover:bg-[#c44a12] text-white font-[family-name:var(--font-display)] font-800 tracking-widest text-lg px-8 py-4 transition-colors"
              >
                SHOP NOW — 6-PACK
              </Link>
              <Link
                href="/#how-it-works"
                className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-[family-name:var(--font-display)] font-700 tracking-widest text-lg px-8 py-4 transition-colors"
              >
                HOW IT WORKS
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#f05a1a]">✓</span> Made in the USA
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#f05a1a]">✓</span> Safe &amp; Non-Explosive
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-[#f05a1a]">✓</span> Eco-Friendly
              </div>
            </div>
          </div>

          {/* Product image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative float">
              <div className="absolute inset-0 bg-[#f05a1a] opacity-20 blur-3xl rounded-full scale-75" />
              <Image
                src="/product-hero.webp"
                alt="Kineticube reactive powder targets exploding with color"
                width={480}
                height={480}
                className="relative drop-shadow-2xl rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-5xl tracking-tight">
              WHY <span className="text-[#f05a1a]">KINETICUBE?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#f05a1a]/40 p-6 transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform origin-left">{f.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] font-700 text-lg tracking-wide mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-20 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-5xl tracking-tight">
              HOW TO <span className="text-[#f05a1a]">USE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.label} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-[#f05a1a]/30" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f05a1a] font-[family-name:var(--font-display)] font-black text-3xl text-white mb-4">
                  {s.num}
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-800 text-2xl tracking-widest mb-2">
                  {s.label}
                </h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORKS ON ─── */}
      <section className="py-12 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-500 font-[family-name:var(--font-display)] tracking-widest text-sm mb-6">
            WORKS ON
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {surfaces.map((s) => (
              <span
                key={s}
                className="border border-[#2a2a2a] text-gray-400 font-[family-name:var(--font-display)] tracking-widest text-sm px-4 py-2"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-gradient-to-b from-[#1a0a00] to-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f05a1a] opacity-5 blur-[80px]" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl tracking-tight mb-4">
            READY TO <span className="text-[#f05a1a]">SHOOT?</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            6-pack. 10 colors. Sticks anywhere. Explodes on impact.
          </p>
          <Link
            href="/shop"
            className="inline-block btn-orange bg-[#f05a1a] hover:bg-[#c44a12] text-white font-[family-name:var(--font-display)] font-800 tracking-widest text-xl px-12 py-5 transition-colors"
          >
            GET YOUR 6-PACK
          </Link>
        </div>
      </section>
    </>
  );
}
