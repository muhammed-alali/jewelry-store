import Image from "next/image";
import Link from "next/link";

import HeroBtn from "@/components/btn";
import Button from "@/components/btn";
import ButtonCom from "@/components/btn";
import TitleHead from "@/components/titleHead";
import { FaHandshake, FaMedal } from "react-icons/fa";
import { AboutItem } from "./data";
export default function About() {
  return (
    <section className="md:container xs:mx-4  mx-auto xs:py-[50px]  py-[100px] md:px-4   ">
      {AboutItem.map((item) => {
        return (
          <>
            <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 lg:!grid-cols-2">
              <div className="mx-auto rounded-2xl relative">
                <Image
                  src={item.imgName}
                  alt={item.title}
                  width={523}
                  height={649}
                ></Image>
                <div className="animationTopBottom xs:right-[-10px] xs:h-[190px] xs:w-[190px] xs:px-[25px]  bg-white pt-[20px] px-[40px] pb-[25px] w-[206px] xl:w-[206px] xl:px-[40px] xl:right-[-50px] absolute h-[197px] rounded-lg top-[40%] lg:right-[-8px] lg:w-[190px] lg:px-[30px] right-[-50px] shadow-aboutShadow ">
                  <div className="text-SiteColor leading-[72px] font-bold text-[72px]">
                    30+
                  </div>
                  <div className="text-Title opacity-[0.70] text-[16px] mt-[15px]">
                    Years of Expereence
                  </div>
                </div>
              </div>
              <div className="xs:p-0 p-4 pt-6 w-full xs:mt-8">
                <TitleHead title="About" />
                <h1 className="xs:text-[26px] text-Title text-[36px] leading-[44px] font-extrabold py-4">
                  {item.title}
                </h1>
                <p className="text-[16px] text-Desc pb-14 md:w-[71.666667%] lg:w-full leading-[30px]">
                  {item.desc}
                </p>
                <div>
                  <div className="xs:w-full w-[80%]">
                    <div className="xs:block flex gap-7 mb-11">
                      <div className="xs:w-fit xs:mb-4 xs:mx-auto md:m-auto bg-[rgb(21,99,223,36%)] rounded-full p-5 relative  after:border-[2px] after:border-dashed  after:border-blue-500/65  after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute after:rounded-full rotateBorder hover:bg-SiteColor hover:after:!border-none hover:rotate-x-180 duration-300 ">
                        <FaMedal className="w-[40px] h-[40px] text-[40px] text-white " />
                      </div>
                      <div className="xs:text-center">
                        <h1 className=" mb-3 text-[20px] text-Title font-bold leading-[26px]">
                          Proven Expertise
                        </h1>
                        <p className="text-[16px] text-Desc leading-[30px]">
                          We pride ourselves on crafting personalized strategies
                          to match your unique goals, ensuring a seamless real
                          estate journey.
                        </p>
                      </div>
                    </div>
                    <div className="xs:block  flex gap-7 mb-11">
                      <div className="xs:mx-auto xs:w-fit xs:mb-4 md:m-auto bg-[rgb(21,99,223,36%)] rounded-full p-5 relative  after:border-[2px] after:border-dashed  after:border-blue-500/65  after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute after:rounded-full rotateBorder hover:bg-SiteColor hover:after:!border-none hover:rotate-x-180 duration-300 ">
                        <FaHandshake className="w-[40px] h-[40px] text-[40px] text-white " />
                      </div>
                      <div className="xs:text-center">
                        <h1 className="mb-3 text-[20px] text-Title font-bold leading-[26px]">
                          Transparent Partnerships
                        </h1>
                        <p className="text-[16px] text-Desc leading-[30px]">
                          Transparency is key in our client relationships. We
                          prioritize clear communication and ethical practices,
                          fostering trust and reliability throughout.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xs:left-[50%] xs:transform xs:translate-x-[-50%] xs:w-fit xs:relative">
                  <ButtonCom
                    href="about"
                    hight="3.5rem"
                    paddingX="2.75rem"
                    title={"More"}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}
