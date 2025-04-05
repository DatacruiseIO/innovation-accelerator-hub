
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import InnovationHub from "@/components/InnovationHub";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Industries />
      <InnovationHub />
      <Approach />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
