"use client";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { BestSeller } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BestSellerCom() {
  return (
    <>
      <div id="bestseller" className="container mx-auto py-[100px] ">
        <div className="flex">
          <div className="w-[22%] my-auto ">
            <h1 className="text-[45px] font-medium mb-12">
              الأكثر مبيعا من جواهر
            </h1>
            <button className="hover:bg-Second hover:text-white  duration-300 border border-[currentcolor] w-40 h-12 ">
              تسوق الان
            </button>
          </div>
          <div className="w-[78%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper w-full"
              //   autoplay={{
              //     delay: 5000,
              //   }}
            >
              {BestSeller.map((item) => {
                return (
                  <>
                    <SwiperSlide className="group" key={item.id}>
                      <div className="group">
                        <div
                          key={item.id}
                          className="border border-[e0e0e0] productEfect group relative overflow-hidden w-fit "
                        >
                          <div className="relative overflow-hidden">
                            <div className=" relative  w-[250px] h-[250px] p-2">
                              <img
                                src={item.imgName}
                                alt={item.title}
                                loading="lazy"
                                className="object-cover   "
                              />
                            </div>
                            {/* <div className="absolute  inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)69.05%] to-black/70 " /> */}
                          </div>
                          <div className="relative py-4 z-10">
                            <div className="h-[50px]">
                              {" "}
                              <h3 className=" w-[250px] text-center mx-auto  font-normal text-[15px] uppercase leading-[20px] text-Title hover:text-SiteColor duration-300 cursor-pointer">
                                {item.title}
                              </h3>
                            </div>
                            <div className="font-medium text-[16px] text-SiteColor my-4 mx-auto w-fit">
                              $ {item.price}
                            </div>
                            <div className="w-fit mx-auto">
                              <button className="flex gap-[7px] text-Title hover:text-SiteColor duration-300 text-[13px] font-medium">
                                <span>أضف إلى السلة</span>
                                <span className="my-auto ">
                                  <FaArrowLeftLong />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
            <div className="w-[165px] absolute  left-0 top-[-49px]">
              <div className="swiper-button-prev absolute left-0 top-1/2 z-10  !text-Second flex items-center justify-center cursor-pointer" />
              <div className="swiper-button-next absolute right-0 top-1/2 z-10  !text-Second flex items-center justify-center cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
