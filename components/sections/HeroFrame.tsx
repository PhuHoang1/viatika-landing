// components/sections/HeroFrame.tsx
import MenuSection from "./MenuSection";
import ContentBanner from "./ContentBanner";
const HeroFrame = () => {
  return (
    <div className="wrapper-banner relative  mt-[0] md:mt-[35] md:mr-[40] md:ml-[40] mr-[0] ml-[0] md:pb-[120] pb-[0]">
         <MenuSection />
          <ContentBanner />
    </div>

  );
};

export default HeroFrame;
