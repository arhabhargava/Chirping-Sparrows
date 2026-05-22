import Link from "next/link";
import Image from "next/image";
import { SITE, img } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src={img("/images/footer-logo.png")}
              alt={SITE.name}
              width={64}
              height={64}
              className="h-14 w-auto bg-white/95 rounded-2xl p-1.5"
              unoptimized
            />
            <div>
              <div className="font-display font-semibold text-lg">{SITE.name}</div>
              <div className="text-xs text-white/70">{SITE.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            A flourishing pre-primary education center for children 2–5 years.
            Child-centric, fun-filled learning every day.
          </p>
          <div className="flex gap-3">
            <a
              href={SITE.facebook}
              aria-label="Facebook"
              className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-sun-500 hover:text-ink-900 transition"
            >
              f
            </a>
            <a
              href={SITE.whatsapp}
              aria-label="WhatsApp"
              className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-leaf-400 hover:text-ink-900 transition"
            >
              W
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sun-200">Useful Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/about-our-kids-gym" className="hover:text-sun-200">About our Kids Gym</Link></li>
            <li><Link href="/about-our-school" className="hover:text-sun-200">About Our School</Link></li>
            <li><Link href="/admission" className="hover:text-sun-200">Admission</Link></li>
            <li><Link href="/branches" className="hover:text-sun-200">Branches</Link></li>
            <li><Link href="/contact-us" className="hover:text-sun-200">Contact Us</Link></li>
          </ul>
        </div>

        {/* School hours */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sun-200">School Hours</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>Mon – Fri: {SITE.hours.school.weekdays}</li>
            <li>Sun: {SITE.hours.school.weekend}</li>
          </ul>
          <h4 className="font-display font-semibold mt-6 mb-4 text-sun-200">Day Care Hours</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>Mon – Fri: {SITE.hours.daycare.weekdays}</li>
            <li>Sat: {SITE.hours.daycare.saturday}</li>
            <li>Sun: {SITE.hours.daycare.sunday}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-sun-200">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>{SITE.address}</li>
            <li>
              {SITE.phones.map((p, i) => (
                <span key={p}>
                  <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-sun-200">{p}</a>
                  {i < SITE.phones.length - 1 && ", "}
                </span>
              ))}
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-sun-200">{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Made with ♡ for tiny tots.</span>
        </div>
      </div>
    </footer>
  );
}
