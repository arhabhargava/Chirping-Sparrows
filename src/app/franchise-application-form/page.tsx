import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/site";

export const metadata = { title: "Franchise Application Form" };

export default function ApplyForm() {
  return (
    <>
      <PageHeader
        eyebrow="Franchise"
        title="Application Form"
        subtitle="Fill in your details and we'll reach out within a working day."
      />
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <form
            action={`mailto:${SITE.email}`}
            method="post"
            encType="text/plain"
            className="bg-white p-8 rounded-5xl shadow-soft space-y-4"
          >
            <input required name="name" placeholder="Full name *" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
            <input required name="email" type="email" placeholder="Email *" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
            <input required name="phone" type="tel" placeholder="Mobile *" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
            <input required name="city" placeholder="City *" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
            <fieldset className="space-y-2">
              <legend className="font-display font-semibold text-ink-900">Budget for unit franchise</legend>
              {["8–9 Lacs", "17–19 Lacs", "25 Lacs", "Master Franchise"].map((b) => (
                <label key={b} className="flex items-center gap-2">
                  <input type="radio" name="budget" value={b} className="accent-blush-500" />
                  <span>{b}</span>
                </label>
              ))}
            </fieldset>
            <textarea name="message" rows={4} placeholder="Anything we should know?" className="w-full rounded-2xl border border-ink-700/15 px-4 py-3 focus:border-blush-400" />
            <button type="submit" className="w-full px-6 py-3 rounded-full bg-blush-500 text-white font-semibold hover:bg-blush-400 transition shadow-pop">
              Submit application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
