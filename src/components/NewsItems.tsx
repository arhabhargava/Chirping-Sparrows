import Image from "next/image";
import { img } from "@/lib/site";

const newsItems = [
  {
    title: "Best Play School Award",
    description:
      "Proud to have received the award of 'Best Play School' by Mr. Mukesh Khanna ji (Shaktimaan) and Aacharya Chakrapani ji (President of Hindu Maha Sabha) and Padma Shri Jitendra Singh Shunty ji.",
    image: "/images/chirpingsparrow.images.png",
  },
  {
    title: "Inter-School Folk Dance Competition",
    description:
      "Our little Sparrowites Amaira Verma, Aradhya Tomar, Divya, Manvika, Ruchika, Vanshika and Yasha participated in Inter School Folk Dance Competition held at Indirapuram Public School, Crossings Republik and bagged Third Prize.",
    image: "/images/kiya.jpeg",
  },
  {
    title: "New Branch at Aarcity Regency Park, Gaur City 2",
    description:
      "Proud to announce the opening of our new branch at B-0001, Aarcity Regency Park, Gaur City 2.",
    image: "/new-branch-gaur-city2.png",
  },
  {
    title: "New Branch at 7th Avenue, Gaur City",
    description:
      "Proud to announce the opening of our new Branch at J-83P, 7th Avenue, Gaur City, Noida Extn.",
    image: "/branchJ-83P.png",
  },
  {
    title: "New Branch at Amrapali Centurion",
    description:
      "Proud to announce the opening of our new Branch at Amrapali Centurion, Noida Extn.",
    image: "/new-branch.png",
  },
  {
    title: "Inter-School Solo Dance Competition",
    description:
      "Our little Sparrowite Shraddha Tiwari participated in Inter School Solo Dance Competition at STEP UP School and won First Prize.",
    image: "/images/news1.jpg",
  },
  {
    title: "Inter-School Hindi Rhyme Recitation Competition",
    description:
      "Our kids participated in Inter School Hindi Rhyme Recitation Competition. Koohoo Saxena won First prize. Aanya Srivastava, Parineeta Chaudhary and Anvi Srivastava received Appreciation Award.",
    image: "/images/news2.jpg",
  },
];

export default function NewsItems() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden border border-sun-100 hover:shadow-soft transition"
            >
              <div className="relative h-52 w-full bg-cream">
                <Image
                  src={img(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-ink-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
