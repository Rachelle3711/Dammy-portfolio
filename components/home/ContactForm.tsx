"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.element.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
        const res = await fetch("/api/contact" , {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        form.reset();
    } catch {
        setStatus("error");
    }
  }
  if (status === "sent") {
    return (
        <p className= "font-mono text-sm text-accent">
            Message sent - thanks for reaching out. Expect a reply within a couple of days.
        </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap5 max-w-md">
        <div className="fles flex-col gap 1.5">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-muted">Name</label>
            <input id="name" name="name" type="text" required className="border- border-line bg-transparent py-2  outline-none focus:border-ink transition-colors"/>
        </div>
        <div className = "flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-muted">Email</label>
            <input id="email" name="email" type="email"required className="border-b border-line bg-transparent py-2 outline-none focus:border-ink transition-colors"/>
        </div>
        <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-muted">Message</label>
            <textarea id="message" name="message" rows={4}required className="border-b border-line bg-transparent py-2 outline-none focus:border-ink transition-colors resize-none"/>
        </div>
        <button type="submit" disabled={status === "sending"}
        className="self-start mt-2 font-mono text-xs uppercase tracking-widebg-link text-white px-5 py-3 rounded hover:bg-accent transition-color disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "error" && (
            <p className="font-mono text-xs text-accent">Something went wrong- try again, or email directly for now.</p>
        )}
    </form>
  );
}
