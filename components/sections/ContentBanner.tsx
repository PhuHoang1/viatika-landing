// components/sections/ContentBanner.tsx
import React from "react";
import Image from "next/image";
import { SplitHeading } from "@/components/sections/GsapAnimations";

const ContentBanner = () => {
  return (
    <div
      className="
        md:pl-[130px] 
        md:pt-[50px]
        wrap-logo-inner
      "
    >
        <Image
            src="/logo.svg"
            alt="Viatika logo"
            width={200}
            height={60}
            className="hidden lg:block anim-fade-up logo-large"
            />
        <div className="wrapInner-banner flex relative flex-col-reverse md:flex-row">
            <div className="inner-left md:w-[708px] relative pt-[80] pr-[28] pl-[36] pb-[30] md:pt-[0] md:pr-[0] md:pl-[0] md:pb-[30]">
            <Image
              src="/mb-banner-line.svg"        
              alt="Hero image"
              width={46}                 
              height={487} 
              className="block md:hidden absolute top-[0] left-[0] h-full anim-fade-up"
              />
                <SplitHeading className="mt-[0] mb-[16] md:mt-[70] md:mb-[26] h1-banner">
                  Unlock the Power of the x402 Web. Without the Chaos.
                </SplitHeading>

              <p className="mb-[32] leading-[1.6] md:mb-[57] md:max-w-[657px] md:leading-[1.41] anim-fade-up-02">
                Viatika is the enterprise accounting layer for the next generation of
                the internet. Think of us as Brex for blockchain-enabled services. We
                provide seamless access to x402-powered tools while giving your
                finance team the control they need.
              </p>

              <a href="https://forms.gle/joJ25oAeeER18KPZ9" target="_blank" className="btn-secondary flex items-center justify-center button w-fit anim-fade-up-04">
                   <span>Request a demo</span>
              </a>
            </div>
           <div className="block">
        <Image
          src="/hero-banner-image.png"        
          alt="Hero image"
          width={815}                 
          height={570}
          className="hero-image-banner relative right-[-130px] top-[20px] w-full h-auto md:object-contain object-cover scale-[1.2] md:absolute md:top-[20px] md:right-[-100px] 
          md:w-[760px] md:h-[570px] md:scale-110 anim-fade-right-02"
        />
      
        </div>
        
      </div>
      
    </div>
  );
};

export default ContentBanner;
