import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatThisProjectIs from "@/components/WhatThisProjectIs";
import WhyItMatters from "@/components/WhyItMatters";
import CurrentStatus from "@/components/CurrentStatus";
import Updates from "@/components/Updates";
import Outputs from "@/components/Outputs";
import References from "@/components/References";
import BenchmarkCTA from "@/components/BenchmarkCTA";
import Footer from "@/components/Footer";
import ForceHeroOnLoad from "@/components/ForceHeroOnLoad";

export default function Home() {
  return (
    <>
      <ForceHeroOnLoad />
      <Nav />
      <main id="main-content">
        <Hero />
        <WhatThisProjectIs />
        <WhyItMatters />
        <CurrentStatus />
        <Updates />
        <Outputs />
        <References />
        <BenchmarkCTA />
      </main>
      <Footer />
    </>
  );
}
