import profile from "../../content/profile.json";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-ice-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-2">
          Experience
        </h2>
        <div className="w-16 h-1 bg-gojo-500 rounded-full mb-10" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gojo-200 hidden sm:block" />

          <div className="space-y-8">
            {profile.experience.map((exp, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 w-8 h-8 rounded-full bg-gojo-600 items-center justify-center z-10 mt-1">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-ice-100 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-dark-800">
                        {exp.title}
                      </h3>
                      <p className="text-gojo-600 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-gojo-50 text-gojo-700 text-xs font-semibold rounded-full">
                        {exp.type}
                      </span>
                      <p className="text-xs text-dark-700/50 mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-dark-700/70 leading-relaxed">
                    {exp.description}
                  </p>
                  <p className="text-xs text-dark-700/40 mt-3">
                    {exp.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
