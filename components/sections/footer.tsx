import Image from "next/image";
const Footer = () => {
    return (
      <footer className="">
        <div className="wrap-footer w-full relative pl-[36] pr-[36] md:pl-[270] md:pr-[0] md:pt-[100] pt-[72] flex flex-col md:flex-row items-start justify-between mb-[85]">
            <div className="wrap-logo">
                <Image
                    src="/logo-footer.svg"      
                    alt="Hero image"
                    width={2530}
                    height={1389}
                    className="mb-[14] anim-fade-up max-w-[188] max-h-[57]"
                    />
            
                <p className="text-[12] text-white mb-[98] md:mb-[0] anim-fade-up">The bridge to the agentic economy.</p>
            </div>
            <div className="wrap-info flex flex-col md:flex-row  gap-[140]">
                <div className="list flex flex-col md:flex-row gap-[34] text-white md:text-[16px] text-[19px] anim-fade-up">
                    <a href=""> Contact Us </a>
                    <a href=""> Privacy Policy </a>
                    <a href=""> Terms of Service </a>
                </div>
                <div className="list-socials flex flex-row  gap-[50] md:gap-[16]">
                    <Image
                    src="/twitter.svg"      
                    alt="Hero image"
                    width={23}
                    height={23}
                    className="w-[55px] h-[55px] md:w-[23px] md:h-[23px] anim-fade-up"
                    />
                    <Image
                    src="/LinkedIn.svg"      
                    alt="Hero image"
                    width={23}
                    height={23}
                    className="w-[55px] h-[55px] md:w-[23px] md:h-[23px] anim-fade-up"
                    />
                    <Image
                    src="/Discord.svg"      
                    alt="Hero image"
                    width={23}
                    height={23}
                    className="w-[55px] h-[55px] md:w-[23px] md:h-[23px] anim-fade-up"
                    />
                
                </div>
            </div>
        </div>
        <div className="wrap-copyright w-full relative md:text-right text-center mb-[47]">
            <p className="text-[#FFFDF1] text-[12px] anim-fade-up">© 2025 Skapa OÜ dba Viatika All rights reserved.</p> 
        </div>
        <Image
            src="/copyright-line.svg"      
            alt="Hero image"
            width={23}
            height={48}
            className="w-full mb-[40] hidden md:block"
            />
        <Image
            src="/mb-footer-line.svg"      
            alt="Hero image"
            width={551}
            height={48}
            className="w-full mb-[40] block md:hidden"
            />
      </footer>
    );
  };
  
  export default Footer;