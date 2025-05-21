import React from "react";
import { İletişimİtem } from "./item";
import Map from "./map/page";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import Form from "./form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

export default function İletişim() {
  return (
    <div className="xs:py-[50px] py-[80px] ">
      <div className="grid grid-cols-12 md:gap-12 xs:mx-4 md:container mx-auto bg-white shadow-ContactShadow !p-14 mb-8">
        <div className="col-span-12 md:col-span-12 lg:col-span-6">
          <div>
            <h1 className="mb-5 text-[25px] font-medium text-Title">
              أرسل سؤالك
            </h1>
            <p className="xs:w-full text-[16px] text-Desc w-[600px]">
              مرحبًا بك في صفحة التواصل! نسعد بالإجابة عن أسئلتك واستفساراتك، أو
              تلقّي مقترحاتك القيّمة حول خدماتنا.
            </p>
          </div>
          <div className="mb-12">
            <Form />
          </div>
        </div>
        <div className="xs:mb-12 col-span-12 md:col-span-12 lg:col-span-5 md:mx-auto md:w-[70%] xs:w-fit lg:w-fit    xs:pl-[15px] xs:pr-[10px] pl-[40px] pr-[20px]">
          <h2 className="mb-5 text-[25px] font-medium text-Title">
            تواصل معنا
          </h2>
          <div className="pb-[30px]">
            {İletişimİtem.map((item) => {
              return (
                <>
                  <div className="flex gap-4 mt-[30px]">
                    <div>
                      {" "}
                      <div className=" content-center   w-14 h-14  rounded-[50%] ">
                        <span className="text-[27px] flex justify-center text-SiteColor my-auto">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                    <div className="my-auto">
                      <h6 className="text-[16px] font-medium pt-[6px] mb-[6px] text-Title ">
                        {item.title}
                      </h6>
                      <p className="text-[14px] font-normal  text-[rgb(62_62_62/95%)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-between pt-[31px] border-t border-gray-400">
            <h1 className="font-medium xs:text-[15px] xs:my-auto text-[17px]">
              تواصل معنا :
            </h1>
            <div className="flex gap-2">
              {" "}
              <div className="w-[34px] rounded-full h-[34px] bg-SiteColor hover:bg-Title duration-300">
                <FaInstagram className=" text-[16px] m-auto h-[34px] text-white " />{" "}
              </div>
              <div className="w-[34px] rounded-full h-[34px] bg-SiteColor hover:bg-Title duration-300">
                <FaLinkedinIn className="  text-[16px] m-auto h-[34px]  text-white " />{" "}
              </div>
              <div className="w-[34px] rounded-full h-[34px] bg-SiteColor hover:bg-Title duration-300">
                <FaFacebookF className="  text-[16px] m-auto h-[34px] text-white  p-[2px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </div>
  );
}

{
  /* <div>
            <span className="border border-SiteColor text-SiteColor mt-4  text-[11px] leading-4 bg-[#b2cedb]  rounded-xl font-bold py-[4px] px-[10px] ">
              İLETIŞIM
            </span>
            <h1 className="font-bold xs:text-[27px] md:!text-[36px] text-Title mb-5">
              Bizler ile İletişime Geçin
            </h1>
            <p className="text-[16px] font-normal mb-5 text-Desc">
              Hizmetlerimiz ve Eğitimlerimiz ile ilgili daha detaylı bilgi alın
            </p>
          </div> */
}
