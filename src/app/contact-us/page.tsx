import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact Us — Chirping Sparrows",
  description: "Get in touch with Chirping Sparrows.",
};

export default function ContactUs() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Say hello!"
        subtitle="Questions, visits, admissions — we'd love to hear from you."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="bg-sun-100 p-6 rounded-3xl">
              <h3 className="font-display text-xl font-semibold text-ink-900">📍 Address</h3>
              <p className="mt-2 text-ink-700">{SITE.address}</p>
            </div>
            <div className="bg-blush-100 p-6 rounded-3xl">
              <h3 className="font-display text-xl font-semibold text-ink-900">📞 Phone</h3>
              {SITE.phones.map((p) => (
                <p key={p} className="mt-1">
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="text-ink-700 hover:text-blush-500">
                    {p}
                  </a>
                </p>
              ))}
            </div>
            <div className="bg-sky-100 p-6 rounded-3xl">
              <h3 className="font-display text-xl font-semibold text-ink-900">✉️ Email</h3>
              <p className="mt-1">
                <a href={`mailto:${SITE.email}`} className="text-ink-700 hover:text-sky-600">
                  {SITE.email}
                </a>
              </p>
            </div>
            <div className="bg-leaf-100 p-6 rounded-3xl">
              <h3 className="font-display text-xl font-semibold text-ink-900">⏰ Hours</h3>
              <div className="mt-2 text-sm text-ink-700 space-y-1">
                <p><span className="font-semibold">School:</span> Mon–Fri {SITE.hours.school.weekdays}</p>
                <p><span className="font-semibold">Day Care:</span> Mon–Fri {SITE.hours.daycare.weekdays}, Sat {SITE.hours.daycare.saturday}</p>
              </div>
            </div>
          </div>

          <form
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
            className="bg-white p-7 rounded-5xl shadow-soft self-start"
          >
            <h3 className="font-display text-2xl font-semibold text-ink-900">Send a message</h3>
            <div className="mt-5 space-y-4">
              <input required name="name" placeholder="Your name" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
              <input required name="email" type="email" placeholder="Your email" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
              <input name="phone" type="tel" placeholder="Phone (optional)" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
              <textarea required name="message" rows={5} placeholder="How can we help?" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
              <button type="submit" className="w-full px-6 py-3 rounded-full bg-blush-500 text-white font-semibold hover:bg-blush-400 transition shadow-pop">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
