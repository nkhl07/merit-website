import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore MERIT's industry projects — real-world engagements with partner companies where Virginia Tech students deliver meaningful work.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Real Work, Real Companies
            </span>
            <h1 className="mt-3 text-5xl font-black text-gray-900 tracking-tight">
              Our Projects
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              MERIT members don&apos;t just study business — they do it.
              Every project is a real engagement with a partner company,
              delivering actual value while building skills that matter.
            </p>
          </AnimateIn>

        </div>
      </section>

      {/* Empty state */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center py-16">
              <Building2 size={48} className="text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-400 mb-2">No projects yet</h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Our first projects are coming soon. Check back later or reach out below to partner with us.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="bg-gradient-to-br from-maroon to-maroon-900 rounded-3xl p-10 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <Building2 size={40} className="text-white/40 mx-auto mb-5" />
                <h2 className="text-3xl font-black text-white mb-3">
                  Partner With MERIT
                </h2>
                <p className="text-maroon-100/80 text-base mb-8 max-w-xl mx-auto leading-relaxed">
                  Are you a company looking for sharp, motivated students to
                  tackle a real business challenge? We&apos;d love to work with
                  you. Our members deliver professional-grade work at the
                  intersection of research, strategy, and technology.
                </p>
                <a
                  href="mailto:meritvtech@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-maroon font-bold hover:bg-gray-50 transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
