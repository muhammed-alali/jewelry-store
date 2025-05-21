import Image from "next/image";
import React from "react";

import { FooterItem } from "./data";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-[#e0e0e0]">
      {/* <div className="border-b border-[rgba(255,255,255,0.08)] ">
        <div className="md:container md:w-auto lg:w-full md:mx-4 xs:mx-4 xs:py-[30px] lg:mx-auto xs:block  flex justify-between py-[50px]">
          <div className="xs:pb-5">
            <Image
              loading="lazy"
              src={"/photo/logo-footer@2x.png"}
              alt="logo"
              width={166}
              height={48}
            ></Image>
          </div>
          <div className=" text-white">
            <div className="flex gap-4">
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaFacebookF className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaLinkedinIn className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaInstagram className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaXTwitter className=" text-[18px] mx-auto " />
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] w-10 h-10 rounded-full content-center hover:bg-SiteColor duration-300">
                <FaYoutube className=" text-[18px] mx-auto " />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="md:container  grid grid-cols-12 gap-12 pt-[50px] pb-5">
        <div className="xs:col-span-12 col-span-3 xs:mb-4 ">
          <div>
            <div className="relative w-[100px] h-[100px] mb-4">
              <Image
                src={"/photo/footerLogo.png"}
                alt="logo"
                fill
                className="!h-auto my-auto"
              />
            </div>
            <p className="text-[16px] text-Desc  leading-6 xs:mb-2">
              من قلب الشغف بالفنّ الرفيع، نصوغ مجوهرات تجمع بين الأصالة
              والابتكار، لنقدّم لكِ قطعاً تُخلّد لحظاتك الثمينة منذ عام 2016.
            </p>
          </div>
          {/* <div className="mt-3">
            {FooterItem.map((ıtem) => {
              return (
                <>
                  <div>
                    <div className="flex gap-3 items-center mb-4">
                      <div>
                        <span className="text-Desc text-5">
                          {ıtem.icon}
                        </span>
                      </div>
                      <div>
                        <p className="text-[14px]  text-white">{ıtem.desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div> */}
        </div>
        <div className="xs:col-span-6  col-span-3  text-Title">
          <h2 className="text-[16px] font-bold mb-3">من نحن</h2>
          <ul className="text-Desc text-[15px] leading-[22px] font-normal w-fit">
            <li className=" w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              حلة مجوهراتنا عبر الزمن
            </li>
            <li className="w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              حكاية الإبداع والحجر الثمين
            </li>
            <li className="w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              وراء كل قطعة… حكاية عشق
            </li>
            <li className="w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              حيث يلتقي الفنّ بالتقنية
            </li>
          </ul>
        </div>
        <div className="xs:col-span-6  col-span-3  text-Title">
          <h2 className="text-[16px] font-bold mb-3">فئة</h2>
          <ul className="text-Desc text-[15px] w-fit leading-[22px] font-normal">
            <li className="w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              مجوهرات عصرية
            </li>
            <li className="w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              هدايا ومناسبات
            </li>
            <li className="w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              خواتم البريق الخالد
            </li>
            <li className="w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              طقم المناسبات الملكي
            </li>
          </ul>
        </div>
        <div className="xs:col-span-12 col-span-3  mt-5 lg:mt-0 text-Title">
          <h2 className="text-[16px] font-bold mb-3">اتصل بنا</h2>
          <ul className="text-Desc text-[15px] w-fit leading-[22px] font-normal">
            <li className="flex gap-2 w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              <span className="my-auto">
                <TbPhoneCall className="text-[18px] text-SiteColor" />
              </span>
              <span>6668 5555 8464</span>
            </li>
            <li className="flex gap-2 w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              <span className="my-auto">
                <MdOutlineEmail className="text-[18px] text-SiteColor" />
              </span>
              <span>info@Jewels.com</span>
            </li>
            <li className="flex gap-2 w-fit mt-[6px] relative  duration-300 hover:underline cursor-pointer hover:text-SiteColor pb-[2px] ">
              <span className="my-auto">
                <GrMapLocation className="text-[18px] text-SiteColor" />
              </span>
              <span>7031 N 35th Ave, Phoenix Arkansas United States</span>
            </li>

            <div className="flex gap-4 mt-4">
              <div className="group">
                <div className="bg-[rgba(255,255,255,0.1)] cursor-pointer border border-[#E0E0E0] w-[39px] h-[39px]  content-center group-hover:bg-SiteColor duration-300">
                  <FaFacebookF className=" text-[18px] mx-auto group-hover:text-white " />
                </div>
              </div>
              <div className="group">
                <div className="bg-[rgba(255,255,255,0.1)] cursor-pointer border border-[#E0E0E0] w-[39px] h-[39px]  content-center group-hover:bg-SiteColor duration-300">
                  <FaLinkedinIn className=" text-[18px] mx-auto group-hover:text-white" />
                </div>
              </div>
              <div className="group">
                <div className="bg-[rgba(255,255,255,0.1)] cursor-pointer border border-[#E0E0E0] w-[39px] h-[39px]  content-center group-hover:bg-SiteColor duration-300">
                  <FaInstagram className=" text-[18px] mx-auto group-hover:text-white" />
                </div>
              </div>
              <div className="group">
                <div className="bg-[rgba(255,255,255,0.1)] cursor-pointer border border-[#E0E0E0] w-[39px] h-[39px]  content-center group-hover:bg-SiteColor duration-300">
                  <FaXTwitter className=" text-[18px] mx-auto group-hover:text-white" />
                </div>
              </div>
              <div className="group">
                <div className="bg-[rgba(255,255,255,0.1)] cursor-pointer border border-[#E0E0E0] w-[39px] h-[39px]  content-center group-hover:bg-SiteColor duration-300">
                  <FaYoutube className=" text-[18px] mx-auto group-hover:text-white" />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className="xs:block xs:mx-4 flex justify-center py-[30px] md:container md:w-auto lg:w-full md:mx-4 lg:mx-auto text-Desc   border-t border-[rgba(255,255,255,0.08)]">
        <div className="xs:text-sm text-[14px] font-normal xs:pb-4">
          © 2025 Muhammed. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
