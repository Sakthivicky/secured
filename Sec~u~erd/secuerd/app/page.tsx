import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Values from "@/components//values";
import Mission from "@/components/mission";
import WhoCanJoin from "@/components/whocanjoin";
import WhySecUErd from "@/components/whysecured";
import Activities from "@/components/activites";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Values />
      <WhoCanJoin/>
      <Mission />
      <WhySecUErd />
      <Activities />
    </>
  );
}