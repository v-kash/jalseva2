import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactNumbers from "@/components/ImpactNumbers";
import ThreePillars from "@/components/ThreePillars";
import OurWork from "@/components/OurWork";
import SchoolWater from "@/components/SchoolWater";
import HowItWorks from "@/components/HowItWorks";
import BeyondPeople from "@/components/BeyondPeople";
import Ambassadors from "@/components/Ambassadors";
import FoundedBy from "@/components/FoundedBy";
import Partners from "@/components/Partners";
import GetInvolved from "@/components/GetInvolved";
import ChangeStarts from "@/components/ChangeStarts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactNumbers />
        <ThreePillars />
        <OurWork />
        <SchoolWater />
        <HowItWorks />
        <BeyondPeople />
        <Ambassadors />
        <FoundedBy />
        <Partners />
        <GetInvolved />
        <ChangeStarts />
      </main>
      <Footer />
    </>
  );
}
