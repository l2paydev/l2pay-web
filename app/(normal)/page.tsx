import { AboutSection } from '@/views/Homepage/AboutSection';
import { AdvantagesSection } from '@/views/Homepage/AdvantagesSection';
import { HeroSection } from '@/views/Homepage/HeroSection';
import { IntegrationSection } from '@/views/Homepage/IntegrationSection';
import { RoadmapSection } from '@/views/Homepage/RoadmapSection';
import { SuitSection } from '@/views/Homepage/SuitSection';
import { SystemSection } from '@/views/Homepage/SystemSection';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="bg-dark-0s min-h-screen  w-full bg-line  bg-cover bg-no-repeat ">
        <SystemSection />
        <AdvantagesSection />
        <IntegrationSection />
        <SuitSection />
        <RoadmapSection />
      </div>
    </>
  );
};

export default Homepage;
