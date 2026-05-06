import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PlatformCapabilities from "@/components/PlatformCapabilities";
import MobileExperience from "@/components/MobileExperience";
import WhyChoose from "@/components/WhyChoose";
import UseCases from "@/components/UseCases";
import TreasuryCrossBorder from "@/components/TreasuryCrossBorder";
import DeveloperFirst from "@/components/DeveloperFirst";
import PayoutMethods from "@/components/PayoutMethods";
import SecurityCompliance from "@/components/SecurityCompliance";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformCapabilities />
      <MobileExperience />
      <WhyChoose />
      <UseCases />
      <StatsSection />
      <TreasuryCrossBorder />
      <DeveloperFirst />
      <PayoutMethods />
      <SecurityCompliance />
      <ContactForm />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
