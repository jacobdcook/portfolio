import profile from "../../content/profile.json";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-2">
          About <span className="gradient-text">me</span>
        </h2>
        <div className="w-16 h-1 bg-gojo-500 rounded-full mb-8" />

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-ice-100">
          <p className="text-lg text-dark-700/80 leading-relaxed mb-6">
            {profile.bio}
          </p>

          <p className="text-base text-gojo-700 font-medium mb-8 p-4 bg-gojo-50 rounded-xl border border-gojo-200">
            {profile.targetRoles}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {profile.education.map((edu, i) => (
              <div
                key={i}
                className="bg-ice-50 rounded-xl p-4 text-center border border-gojo-100"
              >
                <div className="text-2xl mb-2">
                  {edu.icon === "shield"
                    ? "🛡️"
                    : edu.icon === "code"
                    ? "💻"
                    : "📜"}
                </div>
                <p className="font-semibold text-dark-800 text-sm">
                  {edu.degree}
                </p>
                <p className="text-xs text-dark-700/60 mt-1">{edu.school}</p>
                <p className="text-xs text-gojo-600 font-medium mt-1">
                  {edu.period}
                </p>
                {edu.detail && (
                  <p className="text-xs text-dark-700/50 mt-1">{edu.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
