import Navbar from "@/components/shared/navbar";
import Hero from "@/components/shared/landingPage/hero";
import FeatureSection from "@/components/shared/landingPage/featureSection";
import Footer from "@/components/shared/footer";
import { LandingPageFeatureTilesProps } from "@/types";
import { landingPageFeatureTiles } from "@/lib";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="container mx-auto">
        <Navbar />
        <Hero />

        <section className="flex flex-col gap-6 mb-12">
          {landingPageFeatureTiles.map((tile: LandingPageFeatureTilesProps) => (
            <FeatureSection key={tile.id} {...tile} />
          ))}

          <div className="bg-[#006BEE] p-8 w-full md:w-[50%] mx-auto grid place-items-center mt-6 gap-4 rounded-[64px]">
            <Image
              src={"/lumatribe-island.png"}
              alt="luma island"
              width={250}
              height={40}
              priority
            />
            <h4 className="font-bold text-white -mt-6 text-[42px]">
              Walk the Journey with Us
            </h4>
            <p className="text-white text-[14px] text-center max-w-lg leading-snug">
              LUMA Tribe is a partnership. Parents and teachers play unique,
              powerful roles in shaping a child’s faith journey. We give you the
              tools and guidance to disciple confidently
            </p>
            <div className="flex items-center gap-2 text-black">
              <button className="bg-[#E8FEFE] font-semibold rounded-[50px] h-[56px] w-[226px]">
                Parent Overview
              </button>
              <button className="bg-[#FFDF17] font-semibold rounded-[50px] h-[56px] w-[226px] ">
                Teacher Resources
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
