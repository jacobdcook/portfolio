"use client";

import { useState, FormEvent } from "react";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { useInView } from "@/hooks/useInView";
import SectionHeading from "@/components/SectionHeading";
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
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 lg:px-0 bg-canvas-light dark:bg-canvas-dark border-t border-border-light dark:border-border-dark"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${isInView ? "in-view" : ""}`}
      >
        <SectionHeading
          index="05"
          title="Contact"
          className="mb-14 lg:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="space-y-8 max-w-prose">
            <p className="text-base text-text-secondary dark:text-white/70 leading-relaxed">
              Open to detection engineering, threat hunting, and security
              automation roles. Reach out for roles, collaborations, or a focused
              conversation on alert quality and coverage.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 text-sm text-text-primary dark:text-white hover:text-navy-600 dark:hover:text-neon-400 transition-colors focus-ring rounded"
                >
                  <EnvelopeSimple size={22} weight="bold" className="shrink-0 text-navy-500 dark:text-neon-500" />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-3 text-sm text-text-primary dark:text-white hover:text-navy-600 dark:hover:text-neon-400 transition-colors focus-ring rounded"
                >
                  <Phone size={22} weight="bold" className="shrink-0 text-navy-500 dark:text-neon-500" />
                  <span>{profile.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-text-primary dark:text-white hover:text-navy-600 dark:hover:text-neon-400 transition-colors focus-ring rounded"
                >
                  <LinkedinLogo size={22} weight="bold" className="shrink-0 text-navy-500 dark:text-neon-500" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-text-primary dark:text-white hover:text-navy-600 dark:hover:text-neon-400 transition-colors focus-ring rounded"
                >
                  <GithubLogo size={22} weight="bold" className="shrink-0 text-navy-500 dark:text-neon-500" />
                  <span>GitHub</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-sm text-text-secondary dark:text-white/65">
                <MapPin size={22} weight="bold" className="shrink-0 text-navy-500 dark:text-neon-500" />
                <span>{profile.location}</span>
              </li>
            </ul>
          </div>

          {hasSupabase ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-lg border border-border-light dark:border-border-dark bg-white/70 dark:bg-white/[0.04] p-6 lg:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary dark:text-white mb-2"
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
                  className="w-full rounded border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark px-3 py-2 text-base text-text-primary dark:text-white placeholder:text-text-tertiary focus:border-navy-500 focus:ring-1 focus:ring-navy-500/50 outline-none transition-colors"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary dark:text-white mb-2"
                >
                  Email <span className="text-error">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark px-3 py-2 text-base text-text-primary dark:text-white placeholder:text-text-tertiary focus:border-navy-500 focus:ring-1 focus:ring-navy-500/50 outline-none transition-colors"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full rounded border border-border-light dark:border-border-dark bg-canvas-light dark:bg-canvas-dark px-3 py-2 text-base text-text-primary dark:text-white placeholder:text-text-tertiary focus:border-navy-500 focus:ring-1 focus:ring-navy-500/50 outline-none transition-colors resize-y min-h-[120px]"
                  placeholder="Brief context and how I can help"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 px-6 rounded bg-navy-500 text-white dark:bg-neon-500 dark:text-canvas-dark font-semibold text-base transition-smooth hover:bg-navy-600 dark:hover:bg-neon-400 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100 focus-ring"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Sent"
                    : "Send message"}
              </button>

              {status === "error" ? (
                <p className="text-sm text-error text-center">
                  Something went wrong. Please try email instead.
                </p>
              ) : null}
            </form>
          ) : (
            <div className="rounded-lg border border-border-light dark:border-border-dark bg-white/70 dark:bg-white/[0.04] p-8 flex flex-col justify-center gap-6 text-center lg:text-left">
              <p className="text-base text-text-secondary dark:text-white/70 leading-relaxed">
                Form unavailable in this environment. Email works anytime.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex justify-center lg:justify-start items-center px-8 py-3.5 rounded bg-navy-500 text-white dark:bg-neon-500 dark:text-canvas-dark font-semibold transition-smooth hover:bg-navy-600 dark:hover:bg-neon-400 focus-ring self-center lg:self-start"
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
