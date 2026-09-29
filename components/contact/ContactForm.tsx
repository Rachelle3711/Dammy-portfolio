"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 text-center">
        <p className="text-white text-lg font-medium mb-2">Message sent.</p>
        <p className="text-neutral-400 text-sm mb-6">
          Thanks for reaching out — I&rsquo;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-orange-500 underline underline-offset-4 hover:text-orange-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-xs font-mono tracking-wide text-neutral-500 mb-2">
          NAME
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono tracking-wide text-neutral-500 mb-2">
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono tracking-wide text-neutral-500 mb-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          required
          rows={6}
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
          placeholder="What's on your mind?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-orange-500 hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-black text-sm font-medium px-6 py-3"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}