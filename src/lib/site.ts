// Single source of truth for site-wide content & links.
// Edit here to change menus, addresses, etc.

export const SITE = {
  name: "Chirping Sparrows",
  tagline: "Igniting Young Minds",
  phones: ["+91 99714 00339", "+91 99583 76377"],
  email: "chirpingsparrows1@gmail.com",
  address:
    "C-019, Ground Floor, 16th Avenue, Gaur City 2, Noida Extn, Greater Noida West.",
  whatsapp: "https://wa.me/919971400339",
  facebook: "https://www.facebook.com/chirpingsparrows/",
  hours: {
    school: { weekdays: "9:00 am – 3:00 pm", weekend: "Closed Sun" },
    daycare: {
      weekdays: "8:00 am – 7:00 pm",
      saturday: "8:00 am – 4:00 pm",
      sunday: "Closed",
    },
  },
};

// Image base — when images haven't been localized yet, files load straight
// from the original site. After running `npm run fetch-images`, public/images/
// is populated and you can switch IMG_BASE to "" for fully local serving.
export const IMG_BASE =
  process.env.NEXT_PUBLIC_IMG_BASE ?? "https://www.chirpingsparrows.org";

export const img = (path: string) => `${IMG_BASE}${path}`;

export const NAV: Array<{
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
}> = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Our School", href: "/about-our-school" },
      { label: "About Our Kids Gym", href: "/about-our-kids-gym" },
    ],
  },
  { label: "Aim", href: "/aim" },
  { label: "Admission", href: "/admission" },
  {
    label: "Franchise",
    href: "/franchise-opportunity",
    children: [
      { label: "Franchise Opportunity", href: "/franchise-opportunity" },
      { label: "Why Chirping Sparrows", href: "/why-chirping-sparrows" },
      { label: "Our Requirement", href: "/our-requirement" },
      { label: "Chirping Sparrows Support", href: "/chirping-sparrows-support" },
      { label: "How to Start a Branch", href: "/how-to-start-a-chirping-sparrows-branch" },
      { label: "Master Franchise", href: "/master-franchise" },
      { label: "Application Form", href: "/franchise-application-form" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Branches", href: "/branches" },
  { label: "Contact", href: "/contact-us" },
];
