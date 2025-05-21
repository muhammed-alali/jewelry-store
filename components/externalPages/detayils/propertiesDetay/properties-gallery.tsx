"use client";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const gallery = [
  { id: 1, url: "/photo/house-4.jpg" },
  { id: 2, url: "/photo/house-5.jpg" },
  { id: 3, url: "/photo/house-6.jpg" },
  { id: 1, url: "/photo/house-4.jpg" },
  { id: 2, url: "/photo/house-5.jpg" },
  { id: 3, url: "/photo/house-6.jpg" },
];

export default function PropertiesGallery() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full"
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {gallery.map((item: any) => {
          return (
            <>
              <SwiperSlide className="" key={item.id}>
                <div className="">
                  <Image
                    className="rounded xs:!w-full xs:!h-[270px]"
                    src={item.url}
                    alt="img"
                    width={300}
                    height={280}
                  />
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
