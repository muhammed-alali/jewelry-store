"use client";
import Image from "next/image";
import { title } from "process";
import { GoArrowRight } from "react-icons/go";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function İtem() {
  const locations = [
    {
      id: 1,
      title: "Naperville",
      desc: "321 Property",
      imgName: "/photo/location1.jpg",
    },
    {
      id: 2,
      title: "Pembroke Pines",
      desc: "321 Property",
      imgName: "/photo/location2.jpg",
    },
    {
      id: 3,
      title: "Toledo",
      desc: "321 Property",
      imgName: "/photo/location3.jpg",
    },
    {
      id: 4,
      title: "Orange",
      desc: "321 Property",
      imgName: "/photo/location4.jpg",
    },
    {
      id: 5,
      title: "Fairfield",
      desc: "321 Property",
      imgName: "/photo/location5.jpg",
    },
    {
      id: 6,
      title: "Naperville",
      desc: "321 Property",
      imgName: "/photo/location6.jpg",
    },
  ];

  return (
    <>
      <div className="mx-3">
        <Swiper
          spaceBetween={8}
          navigation={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full  "
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
        >
          {locations.map((item) => {
            return (
              <>
                <SwiperSlide className="" key={item.id}>
                  <div>
                    <div className="relative">
                      <div className="w-[243px] h-[302px] ">
                        {" "}
                        <Image
                          loading="lazy"
                          className="rounded-2xl"
                          src={item.imgName}
                          alt={item.title}
                          fill
                        ></Image>
                      </div>
                      <div className="bg-white p-4 group rounded-2xl absolute bottom-[12px] left-2 right-2 flex gap-[3px]  justify-between ">
                        {" "}
                        <div>
                          {" "}
                          <p className="text-Title line-clamp-1">
                            {item.desc}
                          </p>{" "}
                          <h1 className="text-Title mt-1 line-clamp-2 text-[18px] cursor-pointer font-semibold hover:text-SiteColor duration-300">
                            {item.title}
                          </h1>
                        </div>
                        <div className="">
                          {" "}
                          <div className="m-auto border cursor-pointer border-[#e4e4e4] group-hover:bg-SiteColor duration-300  w-[44px] h-[44px] rounded-full content-center ">
                            <GoArrowRight className="text-Title text-[25px] mx-auto group-hover:text-white duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
