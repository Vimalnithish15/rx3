
import AboutHero from '@/components/about/AboutHero';
import CompanyTimeline from '@/components/about/CompanyTimeline';
import TeamSection from '@/components/about/TeamSection';
import CompanyValues from '@/components/about/CompanyValues';
import StatsSection from '@/components/about/StatsSection';
import ProcessSection from '@/components/about/ProcessSection';
import CertificationsSection from '@/components/about/CertificationsSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <StatsSection />
      <CompanyTimeline />
      <CompanyValues />
      <ProcessSection />
      <TeamSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
};

export default About;
