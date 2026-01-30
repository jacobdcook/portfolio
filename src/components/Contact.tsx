"use client";

import { useState, FormEvent } from "react";
import { useInView } from "@/hooks/useInView";
import profile from "../../content/profile.json";

export default function Contact() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const hasSupabase = Boolean(supabaseUrl && supabaseKey);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const { ref, isInView } = useInView();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!hasSupabase) return;

    setStatus("sending");
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey!,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto reveal ${isInView ? "in-view" : ""}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-dark-800 mb-2">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gojo-500 rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <p className="text-dark-700/70 leading-relaxed">
              I&apos;m always open to new opportunities, collaborations, or just
              a friendly conversation about cybersecurity and security operations.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-dark-700/80 hover:text-gojo-600 transition-colors group"
              >
                <span className="w-10 h-10 bg-gojo-50 rounded-xl flex items-center justify-center text-lg group-hover:bg-gojo-100 transition-colors">
                  <svg className="w-5 h-5 text-gojo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </span>
                <span className="text-sm">{profile.email}</span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 text-dark-700/80 hover:text-gojo-600 transition-colors group"
              >
                <span className="w-10 h-10 bg-gojo-50 rounded-xl flex items-center justify-center text-lg group-hover:bg-gojo-100 transition-colors">
                  <svg className="w-5 h-5 text-gojo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </span>
                <span className="text-sm">{profile.phone}</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-700/80 hover:text-gojo-600 transition-colors group"
              >
                <span className="w-10 h-10 bg-gojo-50 rounded-xl flex items-center justify-center group-hover:bg-gojo-100 transition-colors">
                  <svg className="w-5 h-5 text-gojo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-700/80 hover:text-gojo-600 transition-colors group"
              >
                <span className="w-10 h-10 bg-gojo-50 rounded-xl flex items-center justify-center group-hover:bg-gojo-100 transition-colors">
                  <svg className="w-5 h-5 text-gojo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <span className="text-sm">GitHub</span>
              </a>

              <div className="flex items-center gap-3 text-dark-700/80">
                <span className="w-10 h-10 bg-gojo-50 rounded-xl flex items-center justify-center text-lg">
                  <svg className="w-5 h-5 text-gojo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                </span>
                <span className="text-sm">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Contact form or fallback */}
          {hasSupabase ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 shadow-sm border border-ice-100 space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark-800 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-ice-200 focus:border-gojo-400 focus:ring-2 focus:ring-gojo-100 outline-none transition-all text-sm bg-frost"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark-800 mb-1"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-ice-200 focus:border-gojo-400 focus:ring-2 focus:ring-gojo-100 outline-none transition-all text-sm bg-frost"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-ice-200 focus:border-gojo-400 focus:ring-2 focus:ring-gojo-100 outline-none transition-all text-sm resize-none bg-frost"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-gojo-600 text-white font-semibold rounded-xl hover:bg-gojo-700 transition-all disabled:opacity-60 shadow-md shadow-gojo-600/20 hover:shadow-lg"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent!"
                  : "Send message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try email instead.
                </p>
              )}
            </form>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-ice-100 flex flex-col items-center justify-center text-center">
              <svg className="w-12 h-12 text-gojo-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
              <p className="text-dark-700/70 mb-4">
                Want to connect? Reach out through any of the channels listed
                here, or send me an email directly.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="px-6 py-3 bg-gojo-600 text-white font-semibold rounded-full hover:bg-gojo-700 transition-all shadow-md shadow-gojo-600/20"
              >
                Send an email
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
