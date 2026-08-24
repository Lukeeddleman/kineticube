import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop — Kineticube™ Reactive Powder Targets",
  description: "Get your Kineticube 6-Pack. Reactive powder targets with instant colorful visual feedback. Made in the USA.",
};

// ── REPLACE THIS with your actual Stripe Payment Link URL ──
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REPLACE_WITH_YOUR_LINK";

const PRICE = 12.99; // Update when finalized

const colors = [
  { name: "Blaze Orange", hex: "#FF6B00" },
  { name: "Neon Yellow", hex: "#E8FF00" },
  { name: "Hot Pink", hex: "#FF1493" },
  { name: "Electric Blue", hex: "#0080FF" },
  { name: "Lime Green", hex: "#39FF14" },
  { name: "Purple Haze", hex: "#9B30FF" },
  { name: "Crimson Red", hex: "#DC143C" },
  { name: "Cyan Flash", hex: "#00FFFF" },
  { name: "Snow White", hex: "#F5F5F5" },
  { name: "Smoke Gray", hex: "#808080" },
];

const perks = [
  "6 cubes per pack",
  "Instant visual feedback on every shot",
  "3M adhesive — sticks to any surface",
  "Safe & non-explosive",
  "Biodegradable PHA shell",
  "Made in the USA 🇺🇸",
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      {/* Page header */}
      <div className="bg-[#111111] border-b border-[#1a1a1a] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-[family-name:var(--font-display)] font-black text-4xl tracking-tight">
            SHOP
          </h1>
          <p className="text-gray-500 text-sm mt-1">Reactive Powder Targets</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* ── PRODUCT CARD ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="space-y-4">
            <div className="bg-[#111111] border border-[#2a2a2a] p-8 flex items-center justify-center min-h-[480px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#f05a1a] opacity-5 blur-3xl" />
              <Image
                src="/product-front.png"
                alt="Kineticube 6-Pack — Front"
                width={380}
                height={440}
                className="relative object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="bg-[#111111] border border-[#2a2a2a] p-8 flex items-center justify-center min-h-[280px] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#f05a1a] opacity-5 blur-3xl" />
              <Image
                src="/product-back.jpg"
                alt="Kineticube 6-Pack — Back"
                width={380}
                height={260}
                className="relative object-contain"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="lg:sticky lg:top-20">
            <div className="inline-block bg-[#f05a1a]/10 border border-[#f05a1a]/30 text-[#f05a1a] text-xs font-[family-name:var(--font-display)] tracking-widest px-3 py-1 mb-4">
              IN STOCK · MADE IN THE USA
            </div>

            <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-5xl tracking-tight mb-2">
              KINETICUBE™
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-display)] tracking-widest text-sm mb-4">
              REACTIVE POWDER TARGETS — 6-PACK
            </p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-[family-name:var(--font-display)] font-black text-5xl text-white">
                ${PRICE.toFixed(2)}
              </span>
              <span className="text-gray-500 text-sm">per 6-pack</span>
            </div>

            {/* Perks list */}
            <ul className="space-y-2 mb-8">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-[#f05a1a] font-bold">✓</span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Buy button */}
            <a
              href={STRIPE_PAYMENT_LINK}
              className="btn-orange block w-full bg-[#f05a1a] hover:bg-[#c44a12] text-white font-[family-name:var(--font-display)] font-800 tracking-widest text-xl text-center py-5 transition-colors mb-4"
            >
              BUY NOW — ${PRICE.toFixed(2)}
            </a>

            <p className="text-gray-600 text-xs text-center mb-8">
              Secure checkout powered by Stripe. Free shipping over $40.
            </p>

            {/* Color variants section */}
            <div className="border-t border-[#1a1a1a] pt-6">
              <h3 className="font-[family-name:var(--font-display)] font-700 tracking-widest text-sm text-gray-400 mb-4">
                AVAILABLE IN 10 COLORS
              </h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <div key={c.name} className="group relative">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-[#2a2a2a] hover:border-white cursor-pointer transition-all hover:scale-110"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#1a1a1a] text-white text-xs px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {c.name}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs mt-3">
                * Color selection available — contact us or note your preference at checkout.
              </p>
            </div>
          </div>
        </div>

        {/* ── COMING SOON ── */}
        <div className="mt-20 border-t border-[#1a1a1a] pt-12">
          <div className="text-center mb-8">
            <h3 className="font-[family-name:var(--font-display)] font-black text-3xl tracking-tight text-gray-600">
              MORE PRODUCTS <span className="text-[#f05a1a]/50">COMING SOON</span>
            </h3>
            <p className="text-gray-600 text-sm mt-2">We&apos;re just getting started.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#111111] border border-dashed border-[#2a2a2a] h-48 flex items-center justify-center"
              >
                <span className="text-gray-700 font-[family-name:var(--font-display)] tracking-widest text-sm">
                  COMING SOON
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
