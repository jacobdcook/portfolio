import profile from "../../content/profile.json";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-ice-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-2">
          <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-gojo-500 rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SOC / Blue Team */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gojo-200">
            <h3 className="text-xl font-bold text-gojo-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🛡️</span> SOC / Blue Team
            </h3>
            <ul className="space-y-2">
              {profile.skills.soc_blue_team.map((skill, i) => (
                <li key={i} className="text-dark-700/80 flex items-start gap-2">
                  <span className="text-gojo-500 font-bold mt-1">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* IT / Systems */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gojo-200">
            <h3 className="text-xl font-bold text-gojo-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">💻</span> IT / Systems
            </h3>
            <ul className="space-y-2">
              {profile.skills.it_systems.map((skill, i) => (
                <li key={i} className="text-dark-700/80 flex items-start gap-2">
                  <span className="text-gojo-500 font-bold mt-1">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Supporting */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gojo-200">
            <h3 className="text-xl font-bold text-gojo-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔧</span> Supporting
            </h3>
            <ul className="space-y-2">
              {profile.skills.supporting.map((skill, i) => (
                <li key={i} className="text-dark-700/80 flex items-start gap-2">
                  <span className="text-gojo-500 font-bold mt-1">•</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
