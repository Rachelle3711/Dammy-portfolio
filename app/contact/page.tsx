import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen px-6 md:px-10 pt-8 pb-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-white font-medium mb-10">
          Let&rsquo;s talk.
        </h1>
        <ContactForm />
      </div>
    </main>
  );
}