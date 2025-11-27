import DefaultLayout from "@/components/sections/DefaultLayout";
import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout>      
       <div className="the-problem container-fluid mx-auto w-full pl-[36] pr-[36] mt-[112] mb-[165] md:pl-[210] md:mt-[160] md:mb-[60] md:pr-[40px]">
        <div className="wrap-inner-problem">
          <h4 className="the-problem-title anim-fade-up">The Problem</h4>
                    <h2 className="anim-fade-up">The Promise of x402 Hits a Critical Roadblock</h2>
                    <p className="color-gray mt-[30] mb-[52] md:mb-[70] text-lagre max-w-[800] anim-fade-up">The promise of x402 is immense, but the entry process is complex. High friction, confusing wallet setups, and security risks lead to over 70% user drop-off. </p>
                    <div className="inner-wrap flex justify-between max-w-[1080] flex-col gap-[54] md:gap-[0] md:flex-row">
                        <div className="box flex flex-col gap-[23] md:flex-row md:gap-[28] max-w-[495px] items-start">
                            <Image
                              src="/box1.svg"      
                              alt="Hero image"
                              width={55}
                              height={70}
                              className="anim-fade-up"
                            />
                            <div className="content">
                              <h4 className="mb-[15] anim-fade-right">The Wallet Problem</h4>
                              <p className="anim-fade-up">How do you manage payments? Equipping every employee with a crypto wallet is a security, training, and operational nightmare.</p>
                            </div>
                        </div>
                        <div className="box flex flex-col gap-[23] md:flex-row md:gap-[28] max-w-[495px] items-start">
                            <Image
                              src="/box2.svg"      
                              alt="Hero image"
                              width={55}
                              height={70}
                              className="anim-fade-up"
                            />
                            <div className="content">
                              <h4 className="mb-[15] anim-fade-right">The Finance Problem</h4>
                              <p className="anim-fade-up">Your finance team is buried under thousands of tiny blockchain microtransactions that are impossible to reconcile with traditional systems like QuickBooks or SAP.</p>
                            </div>
                        </div>
                    </div>
        </div>
         
           <Image
              src="/bottom-problem.svg"      
              alt="bottom-problem"
              width={150}
              height={70}
              className="hidden md:block mt-[25] mb-[114] ml-auto anim-fade-right"
            />
       </div>
       <h2 className="md:max-w-[700] max-w-[350] m-auto text-center wrap-companies mb-[190] anim-fade-up">Companies want the power of x402, <br/> but cannot handle the crypto complexity or the reconciliation chaos.</h2>
      <div className="bottom-companies w-full relative">
      <Image
        src="/image-companies.png"
        alt="Hero image"
        width={830}
        height={470}
        className="hidden md:block absolute right-[-40px] top-[-235px] object-cover z-[10] anim-fade-right"
      />
      <Image
        src="/mb-Illustration.svg"
        alt="Hero image"
        width={500}
        height={286}
        className=" block md:hidden absolute right-[-10px] top-[-144px] z-[10] h-[286px] anim-fade-right"
      />
          <div className="wrap-solution w-full mb-[100]">
              <div className="container-fluid mx-auto w-full pl-[36] pr-[36] md:pl-[210] md:pr-[0]">
                <h4 className="md:pt-[230] pt-[147] text-white anim-fade-up anim-fade-up">The solution</h4>
                <h2 className="mb-[28] md:mb-[44] text-white anim-fade-up anim-fade-up">Viatika – Complete Crypto Abstraction</h2>
                <p className="text-white text-lagre md:pb-[130] pb-[90] max-w-[822] anim-fade-up">Viatika solves these problems by abstracting 100% of the crypto complexity away from your company. We provide a simple, powerful layer that lets your team operate efficiently and your finance department stay in complete control.</p>
            
              </div>
           </div>
      </div>
      <div className="how-it-work container-fluid mx-auto w-full pl-[36px] pr-[36px] md:pr-[40px] md:pl-[40px]">
          <h3 className="mb-[26] anim-fade-up">How It Works</h3>
          <p className="mb-[20] text-lagre anim-fade-up">Getting started with Viatika is simple. We handle the complexity so you don't have to.</p>
          <div className="inner-box flex flex-col md:flex-row gap-[40px] md:gap-[28] mt-[60]">
              <div className="box flex flex-col md:flex-row items-start md:gap-[13] gap-[40px]">
                <div className="content md:max-w-[276]">
                    <h5 className="md:mb-[30] mb-[10] md:max-w-[150] anim-fade-up">Fund Your Account</h5>
                    <p className="anim-fade-up">Your enterprise buys credits from Viatika.</p>
                </div>
                 <Image
                  src="/right-arrow.svg"      
                  alt="Hero image"
                  width={17}
                  height={9}
                  className="rotate-90 md:rotate-0 left-[10px] relative md:left-[0] anim-fade-right how-arrow"
                />
              </div>
              <div className="box flex flex-col md:flex-row items-start md:gap-[13] gap-[40px]">
                <div className="content md:max-w-[276]">
                    <h5 className="md:mb-[30] mb-[10] md:max-w-[150] anim-fade-up">Provision Employees</h5>
                    <p className="anim-fade-up">We set up internal accounts for your employees with spending policies that you control. Your team gets a simple credit balance, not a complicated crypto wallet.</p>
                </div>
                 <Image
                  src="/right-arrow2.svg"      
                  alt="Hero image"
                  width={17}
                  height={9}
                  className="rotate-90 md:rotate-0 left-[10px] relative md:left-[0] anim-fade-right how-arrow"
                />
              </div>
              <div className="box flex flex-col md:flex-row items-start md:gap-[13] gap-[40px]">
                <div className="content md:max-w-[276]">
                   <h5 className="md:mb-[30] mb-[10] anim-fade-up">Enjoy Seamless Integration</h5>
                    <p className="anim-fade-up">When an employee uses an x402-enabled service, our SDK intercepts the "Payment Required" request.</p>
                </div>
                 <Image
                  src="/right-arrow3.svg"      
                  alt="Hero image"
                  width={17}
                  height={9}
                  className="rotate-90 md:rotate-0 left-[10px] relative md:left-[0] anim-fade-right how-arrow"
                />
              </div>
              <div className="box flex flex-col md:flex-row items-start md:gap-[13] gap-[40px]">
                <div className="content md:max-w-[276]">
                    <h5 className="md:mb-[30] mb-[10] md:max-w-[150] anim-fade-up">We Handle the Rest</h5>
                    <p className="anim-fade-up">Viatika checks the employee's balance and spending rules. If approved, we sign and settle the transaction using our own centralized, HSM-backed wallet. Your company never touches the blockchain.</p>
                </div>
                
              </div>
          </div>
           
      </div>
     <div className="on-value-wrap anim-fade-right relative">
      <Image
        src="/on-value.png"
        alt="On value"
        fill
        sizes="(min-width: 1921px) 40vw, 574px"
        className="on-value-img"
        priority
      />
    </div>
      <div className="container-fluid mx-auto w-full pl-[36] pr-[36] md:pl-[210] md:pr-[0] value-prop">
        <h3 className="mb-[60] anim-fade-up">The Viatika Value Proposition</h3>
        <div className="wrapper-value flex flex-col md:flex-row gap-[70] md:gap-[132]">
        <div className="inner-content  max-w-[422]">
              <p className="uppercase text-lagre mb-[33] font-bold font-albert color-gray tracking-[0.4px] anim-fade-up">For Your Employees</p>
              <p className="md:text-[30px] text-[23px] mb-[16] dark-blue font-albert font-bold anim-fade-up">Easy Access</p>
              <p className="mb-[40px] anim-fade-up">Employees get uninterrupted access to the powerful tools they need to do their jobs, with no learning curve.</p>
              <p className="md:text-[30px] text-[23px] mb-[16] dark-blue font-albert font-bold anim-fade-up">No Crypto Complexity</p>
              <p className="anim-fade-up">Your team never has to see or manage a crypto wallet.</p>
          </div>
          <div className="inner-content max-w-[422]">
              <p className="uppercase text-lagre mb-[33] font-bold font-albert color-gray tracking-[0.4px] anim-fade-up"> For Your Finance Team</p>
              <p className="md:text-[30px] text-[23px] mb-[16] dark-blue font-albert font-bold anim-fade-up">Full Control</p>
              <p className="mb-[40px] anim-fade-up">Get real-time transaction tracking, strict policy enforcement, and complete oversight of all spending.</p>
              <p className="md:text-[30px] text-[23px] mb-[16] dark-blue font-albert font-bold anim-fade-up">Automated Reconciliation</p>
              <p className="anim-fade-up">We provide bundled, clean exports for QuickBooks, Xero, and SAP. Thousands of microtransactions are rolled into one simple report.</p>
          </div>
        </div>
      </div>
      <div className="the-flush mt-[280]">
        <div className="container-fluid mx-auto w-full pl-[210] relative image-right-top">
        <Image
            src="/Group3x.png"      
            alt="Hero image"
            width={468}
            height={420}
            className="absolute top-[-300px] md:top-[-364px] right-[0] z-11 anim-fade-left"
          />
        </div>
        <div className="content-info container-fluid mx-auto w-full flex flex-col md:flex-row align-start md:align-center  pt-[111] pb-[106] md:gap-[130] gap-[72] items-center pl-[36] pr-[36] md:pr-[40px] md:pl-[40px]">
          <h2 className="text-white max-w-[770] font-[500] tracking-[-1px] md:tracking-[0] anim-fade-up">Viatika is the bridge that lets your enterprise unlock the power of x402-enabled services today, with the security and control you already expect.</h2>
          <div className="inner-info flex flex-1 justify-center md:items-center items-start flex-col md:w-fit w-full">
            <p className="text-white  font-[500] font-albert mb-[16] text-[25px] tracking-[0.4px] anim-fade-up">Get started now</p>
            <a href="https://forms.gle/joJ25oAeeER18KPZ9" target="_blank" className="btn-thridary flex items-center justify-center w-[174px] h-[50px] anim-fade-up button"><span>Request a demo</span></a>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
