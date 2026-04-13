import type { Metadata } from "next";
import { teamMembers } from "@/data/team";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Executive Team",
  description:
    "Meet the MERIT executive board — the students driving the mission to bridge classroom learning and professional experience at Virginia Tech.",
};

const titleColors: Record<string, string> = {
  President: "bg-maroon/10 text-maroon",
  "Vice President": "bg-maroon/10 text-maroon",
  "Chief Marketing Officer": "bg-orange/10 text-orange",
  "Chief Technology Officer": "bg-blue-50 text-blue-700",
  "Chief Risk Officer": "bg-gray-100 text-gray-600",
  Treasurer: "bg-green-50 text-green-700",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              The People Behind MERIT
            </span>
            <h1 className="mt-3 text-5xl font-black text-gray-900 tracking-tight">
              Executive Team
            </h1>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Meet the students leading MERIT&apos;s mission to bridge the gap
              between Virginia Tech&apos;s classrooms and the professional world.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* President — featured card */}
          {teamMembers.slice(0, 1).map((member) => (
            <AnimateIn key={member.name} className="mb-10">
              <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 p-8 flex flex-col sm:flex-row items-center gap-8 max-w-3xl mx-auto">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-maroon to-maroon-900 flex items-center justify-center text-white text-3xl font-black shadow-lg overflow-hidden">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      getInitials(member.name)
                    )}
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${titleColors[member.title] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {member.title}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-gray-500 leading-relaxed max-w-lg">
                    {member.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Remaining exec board */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(1).map((member, i) => (
              <AnimateIn key={member.name} delay={i * 100}>
                <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center h-full">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-xl font-bold mb-5 shadow-md group-hover:from-maroon group-hover:to-maroon-900 transition-all duration-300">
                    {member.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full rounded-xl object-cover"
                      />
                    ) : (
                      getInitials(member.name)
                    )}
                  </div>

                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${titleColors[member.title] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {member.title}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
