import Navbar from "@/components/shared/navbar";
import Hero from "@/components/shared/landingPage/hero";
import FeatureSection from "@/components/shared/landingPage/featureSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="container mx-auto">
        <Navbar />
        <Hero />

        {/* <FeatureSection
          title="Connection — made simple"
          description="One simple way to message teachers, families, and staff—anytime, anywhere. Clear communication, instant updates, and automatic translation in more than 35 languages 🌎"
          bgColor="bg-[#FFF9E5]" // Pale Yellow
        /> */}

        {/* <FeatureSection
          title="Offer a window into their world"
          description="With Stories, teachers can securely share photos, videos and updates on a private feed so parents can see the classroom magic for themselves ✨"
          bgColor="bg-[#E5F6FF]" // Pale Blue
          reverse
        /> */}
      </div>
    </main>
  );
}
