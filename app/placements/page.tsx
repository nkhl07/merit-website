import type { Metadata } from "next";
import { placements } from "@/data/placements";
import AnimateIn from "@/components/AnimateIn";
import { Quote, Briefcase, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "See where MERIT members from Virginia Tech have landed internships and full-time roles at top companies.",
};

const typeBadge: Record<string, string> = {
  Internship: "bg-blue-50 text-blue-700 border border-blue-100",
  "Full-Time": "bg-green-50 text-green-700 border border-green-100",
};

function CompanyPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  return (
    <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm flex-shrink-0">
      {initials}
    </div>
  );
}

export default function PlacementsPage() {
  const internships = placements.filter((p) => p.type === "Internship");
  const fullTime = placements.filter((p) => p.type === "Full-Time");

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Where We&apos;re Headed
            </span>
            <h1 className="mt-3 text-5xl font-black text-gray-900 tracking-tight">
              Member Placements
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              As a new organization, we&apos;re building our placement track
              record. Here&apos;s where we&apos;re headed — and where our
              members are landing.
            </p>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">{placements.length}</div>
                <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">Total</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">{internships.length}</div>
                <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900">{fullTime.length}</div>
                <div className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">Full-Time</div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Placement cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-10">
            <div className="flex items-center gap-3">
              <Star size={16} className="text-orange" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                All Placements
              </h2>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placements.map((placement, i) => (
              <AnimateIn key={`${placement.memberName}-${i}`} delay={i * 60}>
                <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <CompanyPlaceholder name={placement.company} />
                    <div className="min-w-0">
                      <div className="font-bold text-gray-900 truncate">{placement.company}</div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${typeBadge[placement.type]}`}>
                          {placement.type}
                        </span>
                        <span className="text-xs text-gray-400">{placement.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="font-semibold text-gray-900 text-sm">{placement.memberName}</div>
                    <div className="flex items-center gap-1.5 mt-0.5 text-gray-500 text-sm">
                      <Briefcase size={13} />
                      {placement.role}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <Quote size={16} className="text-gray-200 mb-2" />
                    <p className="text-sm text-gray-500 leading-relaxed italic">{placement.quote}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Land a great role?</h2>
            <p className="text-gray-500 mb-8">
              MERIT members who land internships and full-time offers are encouraged to share their story.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-maroon text-white font-semibold hover:bg-maroon-900 transition-all duration-200 shadow-lg"
            >
              Submit Your Placement
            </a>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
