import PageHeader from "@/components/PageHeader";
import Events from "@/components/Events";
import NewsItems from "@/components/NewsItems";

export const metadata = {
  title: "News & Events — Chirping Sparrows",
  description: "What's happening at Chirping Sparrows — annual days, events and announcements.",
};

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="What's happening at school"
        subtitle="A running thread of our annual days, performances, and the moments we cherish."
      />
      <NewsItems />
      <Events />
    </>
  );
}
