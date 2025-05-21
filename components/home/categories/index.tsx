"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { kategorisData } from "./data";
import Link from "next/link";

export default function HomeCategories() {
  return (
    <>
      <section id="kategorisİd" className="my-[56px] container mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full"
          //   autoplay={{
          //     delay: 5000,
          //   }}
        >
          {kategorisData.map((item) => {
            return (
              <>
                <SwiperSlide className="group" key={item.id}>
                  <div className="w-fit mx-auto ">
                    <Link href={""}>
                      <div className="w-[144px] h-[173px] bg-[#f5f5f5] group-hover:bg-white duration-300 content-center rounded-sm categoryEfect">
                        <div className="relative w-[45%] h-[45%] mx-auto">
                          <Image
                            className="   "
                            src={item.imgName}
                            alt={item.title}
                            fill
                          />
                        </div>
                      </div>
                    </Link>
                    <Link href={""}>
                      <h1 className="font-medium text-[17px] text-center mt-2 group-hover:text-SiteColor duration-300">
                        {item.title}
                      </h1>
                    </Link>
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
