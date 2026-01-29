import Image from "next/image";
import profile from "../../content/profile.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gojo-500 font-semibold text-lg mb-2 animate-fade-in-up">
            Hello!
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-800 mb-4 animate-fade-in-up-delay-1">
            {profile.heroGreeting}
          </h1>
          <p className="text-lg sm:text-xl text-dark-700/70 mb-6 max-w-xl animate-fade-in-up-delay-2">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-up-delay-3">
            <a
              href="#contact"
              className="px-6 py-3 bg-gojo-600 text-white font-semibold rounded-full hover:bg-gojo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-dark-800 font-semibold rounded-full border-2 border-dark-800/10 hover:border-gojo-500 hover:text-gojo-500 transition-colors"
            >
              View projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-dark-800 text-white font-semibold rounded-full hover:bg-dark-700 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Headshot */}
        <div className="flex-shrink-0 animate-float">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden ring-4 ring-gojo-300 ring-offset-4 ring-offset-frost shadow-xl">
            <Image
              src={profile.headshotPath}
              alt={`${profile.name} headshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
