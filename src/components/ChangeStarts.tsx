"use client";

import { useState } from "react";
import { Droplets, Recycle, User, Users, Send, CheckCircle2 } from "lucide-react";

const bullets = [
  { icon: Recycle, text: "One bottle can be reused." },
  { icon: Droplets, text: "One refill can replace another bottle." },
  { icon: User, text: "One person can influence another." },
  { icon: Users, text: "One community can inspire another." },
];

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-sky-100 bg-sky-50/50 px-4 py-3 text-sm text-text-dark placeholder:text-text-muted/60 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

export default function ChangeStarts() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-sky-light to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-text-dark uppercase">
              Change Starts
              <br />
              With One Choice.
            </h2>

            <div className="space-y-3 inline-block lg:block text-left">
              {bullets.map((bullet) => {
                const Icon = bullet.icon;
                return (
                  <div key={bullet.text} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-sky-100 shadow-sm">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <p className="text-text-body text-sm md:text-base">
                      {bullet.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-text-muted leading-relaxed text-base max-w-md mx-auto lg:mx-0">
              Let&apos;s build a future where clean water is accessible,
              reusable choices are natural and sustainability becomes everyday
              behaviour.
            </p>
          </div>

          {/* Right - Contact Form */}
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-sky-100 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
              <Droplets className="w-4 h-4" />
              Refill · Reuse · Reduce
            </div>
            <h3 className="mt-3 text-2xl font-extrabold text-text-dark">
              Connect with JalSeva
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              Share your idea, question or message and we&apos;ll get back to
              you.
            </p>

            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-xl bg-sky-50 border border-sky-100 px-6 py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <p className="text-lg font-bold text-text-dark">
                  Thank you for reaching out!
                </p>
                <p className="text-sm text-text-muted">
                  We&apos;ve received your message and will connect with you
                  soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-semibold text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold text-text-dark"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold text-text-dark"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-xs font-semibold text-text-dark"
                  >
                    Phone <span className="font-normal text-text-muted">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-semibold text-text-dark"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="How would you like to connect with JalSeva?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}