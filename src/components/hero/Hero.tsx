import AnimateBg from "./AnimateBg";
import FloatingParticles from "./FloatingParticles";
import ProfileSection from "./ProfileSection";
import Status from "./Status";
import Name from "./Name";
import Title from "./Title";
import Description from "./Description";
import Cards from "./Cards";
import Contact from "../button/Contact";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-10 relative overflow-hidden">
      {/* Advanced animated background */}
      <AnimateBg />

      {/* Floating particles */}
      <FloatingParticles />

      <div className="text-center max-w-6xl mx-auto z-10 relative">
        {/* Enhanced profile section */}
        <ProfileSection />

        {/* Professional status with enhanced styling */}
        <Status />

        {/* Enhanced name with smaller typography */}
        <Name />

        {/* Enhanced title section with smaller font */}
        <Title />

        {/* Enhanced description with smaller font */}
        <Description />

        {/* Call to action buttons */}
        <Contact />

        {/* Enhanced contact cards */}
        <Cards />
      </div>

    </section>
  );
};

export default Hero;
