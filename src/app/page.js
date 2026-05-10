import Header from '@/components/Header';
import Background from '@/components/Background';
import AvatarSide from '@/components/AvatarSide';
import HomeSection from '@/components/HomeSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import PhotoSwipe from '@/components/PhotoSwipe';
import ClientScripts from '@/components/ClientScripts';

export default function Home() {
  return (
    <>
      <ClientScripts />
      
      {/* Loader Start */}
      <div id="loader" className="loader">
        <div id="loaderContent" className="loader__content">
          <div className="loader__shadow"></div>
          <div className="loader__box"></div>
        </div>
      </div>
      {/* Loader End */}

      <Header />
      <Background />
      <AvatarSide />

      <div id="content" className="content">
        <div className="content__wrapper">
          <HomeSection />
          <PortfolioSection />
          <AboutSection />
          <ResumeSection />
          <ContactSection />
        </div>
      </div>

      <PhotoSwipe />
    </>
  );
}
