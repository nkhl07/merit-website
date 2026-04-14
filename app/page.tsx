import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { placements } from "@/data/placements";

export const metadata: Metadata = {
  title: "MERIT — Virginia Tech",
  description:
    "MERIT bridges the gap between classroom learning and real-world professional experience through industry projects, career development, and professional networking.",
};

const pillars = [
  {
    icon: Briefcase,
    title: "Real-World Projects",
    description:
      "Members work directly with companies on meaningful, hands-on engagements. These aren't hypothetical case studies. They're real deliverables for real partners.",
    accent: "bg-maroon",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Workshops and talks on recruiting prep, interview skills, and career strategy led by Virginia Tech professors and experienced industry professionals who know what it takes to get hired.",
    accent: "bg-orange",
  },
  {
    icon: Users,
    title: "Professional Networking",
    description:
      "Guest speakers, company info sessions, site visits, and direct connections to advocates in the workforce — building your network before you ever need it.",
    accent: "bg-maroon",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
        {/* Background grid decoration */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#861F41 1px, transparent 1px), linear-gradient(to right, #861F41 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-maroon/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <AnimateIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-maroon/20 bg-maroon/5 text-maroon text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-maroon rounded-full animate-pulse" />
              Virginia Tech Student Organization
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-6 text-balance">
              Bridging the Gap Between{" "}
              <span className="text-maroon">the Classroom</span> and{" "}
              <span className="text-orange">the Workforce.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              MERIT connects Virginia Tech students with real company projects,
              career development resources, and professional networks — giving
              you the experience and skills to hit the ground running after
              graduation.
            </p>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-base hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5"
              >
                Meet the Team
              </Link>
            </div>
          </AnimateIn>

          {/* Stats strip */}
          <AnimateIn delay={400}>
            <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { value: "3+", label: "Industry Partners" },
                { value: "6", label: "Exec Members" },
                { value: "11+", label: "Placements" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>


      </section>

      {/* ── Mission ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/exec-team-photos/wpp-burruss-desktop-16x9-2133x1200.jpg"
            alt="Burruss Hall"
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Our Mission
              </span>
              <h2 className="mt-3 text-4xl font-black text-gray-900 tracking-tight">
                Why MERIT Exists
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <blockquote className="relative">
              <div className="absolute -top-4 -left-2 text-8xl text-maroon/10 font-black leading-none select-none">
                "
              </div>
              <p className="relative text-lg sm:text-xl text-gray-600 leading-relaxed text-center px-8">
                MERIT&apos;s goal is to help bridge the gap between classroom
                learning and real-world professional experience. This is done by
                connecting students with company projects through our industry
                connections. We also provide students with career development
                opportunities and professional networking with industry
                professionals. MERIT&apos;s overall goal is to give members the
                experience, skills, and connections they need to succeed in the
                workforce post-graduation.
              </p>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                What We Do
              </span>
              <h2 className="mt-3 text-4xl font-black text-gray-900 tracking-tight">
                Three Ways We Prepare You
              </h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.title} delay={i * 120}>
                <div className="group relative p-8 rounded-2xl border border-gray-100 hover:border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div
                    className={`w-12 h-12 ${pillar.accent} rounded-xl flex items-center justify-center mb-6 shadow-sm`}
                  >
                    <pillar.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placements ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Where We&apos;re Headed
              </span>
              <h2 className="mt-3 text-4xl font-black text-gray-900 tracking-tight">
                Member Placements
              </h2>
            </div>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {placements
                .filter((p) => p.logo)
                .map((p) => (
                  <div
                    key={p.company}
                    className="flex items-center justify-center p-4 aspect-square bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <Image
                      src={p.logo!}
                      alt={p.company}
                      width={200}
                      height={100}
                      className="object-contain w-full h-full"
                    />
                  </div>
                ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Ready to build your career{" "}
              <span className="text-orange-300">before graduation?</span>
            </h2>
            <p className="text-maroon-100/80 text-lg mb-10 max-w-xl mx-auto">
              Join a community of ambitious students who refuse to wait until
              after graduation to start their careers.
            </p>
            <Link
              href="https://forms.gle/XgDAnvKSykMYqgEM6"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-maroon font-bold text-base hover:bg-gray-50 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              Apply to Join MERIT
              <ArrowRight size={18} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
