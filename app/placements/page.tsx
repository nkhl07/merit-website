import type { Metadata } from "next";
import Image from "next/image";
import { placements } from "@/data/placements";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "See where MERIT members from Virginia Tech have landed internships and full-time roles at top companies.",
};

export default function PlacementsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="pt-20 pb-16 relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <img src="/images/exec-team-photos/wpp-burruss-desktop-16x9-2133x1200.jpg" alt="Burruss Hall" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Where We&apos;re Headed
            </span>
            <h1 className="mt-3 text-5xl font-black text-gray-900 tracking-tight">
              Member Placements
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              As a new organization, we&apos;re building our placement track
              record. Here&apos;s where our members are landing.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Logo grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {placements.map((p, i) => (
                <AnimateIn key={p.company} delay={i * 60}>
                  <div className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                    {p.logo ? (
                      <Image
                        src={p.logo}
                        alt={p.company}
                        width={160}
                        height={80}
                        className="object-contain w-full h-16"
                      />
                    ) : (
                      <div className="w-full h-16 flex items-center justify-center text-lg font-bold text-gray-400">
                        {p.company
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()}
                      </div>
                    )}
                    <div className="text-center">
                      <div className="text-xs font-semibold text-gray-700">{p.memberName}</div>
                      <div className="text-xs text-gray-400">{p.company}</div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
