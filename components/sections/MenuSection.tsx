// components/sections/MenuSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MenuSection = () => {
  return (
    <>
      <nav className="hidden lg:block pt-[73px] text-right wrap-menu anim-fade-up">
       

        <div className="flex items-stretch justify-end">
          <div className="wrap-line-02 relative flex flex-1 items-center">
                <Image
                  src="/line00.png"
                  alt="banner-22"
                  width={284}
                  height={800}
                  className="absolute md:block hidden left-[0] logo-image--wrapper-banner"
                  />
                <p className="text-[14px] pr-[10px] flex-1"> <a href="#why">Why Viatika?</a></p>
             
          </div>
          <div className="wrap-line-04 relative w-[120px] flex items-center">
           <Image
          src="/line02.png"      
          alt="Line 02"
          width={20}
          height={150}
          className="anim-fade-up absolute  left-[0] image-line-02 image--wrapper-banner--02"
          />
              <a href="#features" className="text-[14px] pr-[20px] pl-[0] flex-1">Features</a>
          </div>
           <div className="wrap-line-16 relative justify-center w-[200px] flex">
              <Image
          src="/line04.png"      
          alt="Line 04"
          width={24.85}
          height={261.28}
          className="anim-fade-up absolute  left-[0] image-line-04 image--wrapper-banner--04"
          />
          <a href="https://forms.gle/joJ25oAeeER18KPZ9" target="_blank" className="btn-primary button mr-p[16] flex items-center justify-center "><span>Request a demo</span></a>
            <Image
          src="/line16.png"      
          alt="Line 02"
          width={90}
          height={448}
          className="anim-fade-up absolute  right-[0] image-line-16 image--wrapper-banner--16"
          />
            
           </div>
         
        </div>
      </nav>
    <div className="flex items-center  justify-between lg:hidden pl-[36px] pr-[36px] md:pl-0 md:pr-0 pt-[30px] md:pt-[0]">
    <Link href="/" aria-label="Go to home">

      <Image
          src="/logo.svg"      
          alt="Hero image"
          width={100}
          height={50}
          className="anim-fade-up"
          />
      </Link>

      <Image
          id="mobile-menu-icon"
          src="/mobile-menu.svg"      
          alt="Hero image"
          width={40}
          height={20}
          className="anim-fade-up"
          />
  
        <div className="float-menu">
            <ul className="flex flex-col text-white">
              <li><a className="close block text-right">Close</a></li>
              <li><a href="#">Why Viatika?</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="https://forms.gle/joJ25oAeeER18KPZ9" target="_blank" className="btn-primary button">Request a demo</a></li>
            </ul>
        </div>
    </div>
    </>

  );
};

export default MenuSection;
