"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { MansetItem } from "./data";
import ButtonCom from "@/components/btn";

export default async function Hero() {
  return (
    <>
      <section id="heroİd">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full"
          autoplay={{
            delay: 5000,
          }}
        >
          {MansetItem.map((item) => {
            return (
              <>
                <SwiperSlide className="" key={item.id}>
                  <div className="">
                    <div className=" top-[34%]  absolute text-white  w-full  ">
                      <div className="xs:mt-[-28px] mt-[-35px] text-center">
                        <h1 className=" xs:text-[23px] xs:leading-[58px] md:!text-[50px] lg:!text-[80px] leading-[88px] font-extrabold">
                          {item.title}
                        </h1>
                        <p className="xs:leading-[1.5] md:leading-[2] xs:w-[80%] w-[55%] mx-auto lg:leading-[1.8em] xs:mb-8 xs:text-sm line-clamp-3 text-[17px]  font-normal ">
                          {item.desc}
                        </p>
                        <div className=" md:mt-6 ">
                          <ButtonCom
                            href="contact"
                            hight="3.5rem"
                            paddingX="2.75rem"
                            title="تواصل معنا"
                          />
                        </div>
                      </div>
                    </div>

                    <Image
                      className=" xs:h-[400px] lg:!h-[670px] h-full object-cover "
                      src={item.url}
                      alt={item.title}
                      width={2000}
                      height={100}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
