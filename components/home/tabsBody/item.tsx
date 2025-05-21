"use client";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";
import { FaBath } from "react-icons/fa6";

import { IoBed, IoLocationOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";

export default function İtem() {
  const data = [
    {
      category: "Apartment",
      slug: "apartment",
      array: [
        {
          id: 1,
          imgName: "photo/house-1.jpg",
          title: "Casa Lomas de Machalí Machas",
          locationHome: "145 Brooklyn Ave, Califonia, New York",
          beds: "3",
          baths: "2",
          sqft: "110",
          agentName: "Muhammed",
          price: "7250,00",
        },
        {
          id: 2,
          imgName: "photo/house-2.jpg",
          title: "Modern Apartment in LA",
          locationHome: "123 Main St, Los Angeles, CA",
          beds: "2",
          baths: "1",
          sqft: "90",
          agentName: "Aisha",
          price: 5500.0,
        },
      ],
    },
    {
      category: "Villa",
      slug: "villa",
      array: [
        {
          id: 1,
          imgName: "photo/house-2.jpg",
          title: "Modern Apartment in LA",
          locationHome: "123 Main St, Los Angeles, CA",
          beds: "2",
          baths: "1",
          sqft: "90",
          agentName: "Aisha",
          price: 5500.0,
        },
        {
          id: 2,
          imgName: "photo/house-3.jpg",
          title: "Luxury Villa in Miami",
          locationHome: "200 Ocean Drive, Miami, FL",
          beds: "5",
          baths: "4",
          sqft: "300",
          agentName: "Ali",
          price: 25000.0,
        },
        {
          id: 3,
          imgName: "photo/house-1.jpg",
          title: "Luxury Villa in Miami",
          locationHome: "200 Ocean Drive, Miami, FL",
          beds: "5",
          baths: "4",
          sqft: "300",
          agentName: "Ali",
          price: 25000.0,
        },
      ],
    },
    {
      category: "Studio",
      slug: "studio",
      array: [
        {
          id: 1,
          imgName: "photo/house-4.jpg",
          title: "Casa Lomas de Machalí Machas",
          locationHome: "145 Brooklyn Ave, Califonia, New York",
          beds: "4",
          baths: "2",
          sqft: "110",
          agentName: "ayşe",
          price: "4250,00",
        },
      ],
    },
    {
      category: "House",
      slug: "house",
      array: [
        {
          id: 1,
          imgName: "photo/house-5.jpg",
          title: "Casa Lomas de Machalí Machas",
          locationHome: "145 Brooklyn Ave, Califonia, New York",
          beds: "6",
          baths: "5",
          sqft: "600",
          agentName: "Muhammed",
          price: "950,00",
        },
      ],
    },
    {
      category: "Office",
      slug: "office",
      array: [
        {
          id: 1,
          imgName: "photo/house-1.jpg",
          title: "Casa Lomas de Machalí Machas",
          locationHome: "145 Brooklyn Ave, Califonia, New York",
          beds: "3",
          baths: "2",
          sqft: "1150",
          agentName: "sara",
          price: "7250,00",
        },
        {
          id: 2,
          imgName: "photo/house-6.jpg",
          title: "Casa Lomas de Machalí Machas",
          locationHome: "145 Brooklyn Ave, Califonia, New York",
          beds: "3",
          baths: "2",
          sqft: "1150",
          agentName: "sara",
          price: "7250,00",
        },
      ],
    },
  ];

  return (
    <Tabs value="apartment" className="md:container mx-auto">
      <TabsHeader
        className="bg-white gap-[2rem] mx-auto xs:w-full xs:gap-3 xs:flex-wrap w-[65%] pb-12 text-white"
        indicatorProps={{
          className: "bg-SiteColor  rounded-full text-[#fff] ",
        }}
      >
        {data.map(({ category, slug }) => (
          <Tab
            key={slug}
            value={slug}
            activeClassName="text-white"
            className="tab-button border xs:w-fit xs:px-[1.2rem]  py-2 px-4 bg-[#f7f7f7]  rounded-full transition-all duration-300"
          >
            {category}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        <div className="">
          {data.map(({ slug, array }) => (
            <TabPanel key={slug} value={slug}>
              <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {array.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-md group rounded-2xl relative overflow-hidden w-fit "
                  >
                    <div className="relative overflow-hidden">
                      <div className="relative after:absolute  after:inset-0 after:bg-gradient-to-b after:from-[rgba(0,0,0,0)69.05%] after:to-black/70 ">
                        <img
                          src={item.imgName}
                          alt={item.title}
                          loading="lazy"
                          className="object-cover group-hover:scale-110 transform duration-500 w-[408px] h-[269px] "
                        />
                      </div>
                      {/* <div className="absolute  inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)69.05%] to-black/70 " /> */}

                      <div className="absolute top-2 left-2">
                        <span className="bg-SiteColor text-white text-[12px] font-semibold px-3 py-2 rounded-full tracking-[0.8px]">
                          Featured
                        </span>
                        <span className="bg-[rgba(0,0,0,0.3)] hover:bg-SiteColor duration-300 text-white text-[12px] font-semibold px-3 py-2 ml-2 rounded-full tracking-[0.8px]">
                          For Sale
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-white xs:top-[220px] line-clamp-2  xs:w-[260px] text-sm flex items-center gap-2 absolute top-[240px]">
                        <IoLocationOutline className="text-[20px]" />{" "}
                        {item.locationHome}
                      </p>
                      <div className="mb-6 pb-6 border-b border-[#e4e4e4]">
                        <h3 className=" line-clamp-2 font-bold text-[18px] leading-[25.2px] text-Title hover:text-SiteColor duration-300 cursor-pointer">
                          {item.title}
                        </h3>
                        <div className="flex justify-between my-2 text-sm text-gray-600 md:pr-[30%]">
                          <span className="flex gap-1">
                            <IoBed className="text-[16px] text-[rgb(163,171,176)]" />{" "}
                            {item.beds} Beds
                          </span>
                          <span className="flex gap-1">
                            <FaBath className="text-[16px] text-[rgb(163,171,176)]" />
                            {item.baths} Baths
                          </span>
                          <span className="flex gap-1">
                            <TfiRulerAlt2 className="text-[16px] text-[rgb(163,171,176)]" />{" "}
                            {item.sqft} sqft
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-500">Agent: {item.agentName}</p>
                        <p className="font-bold text-xl text-gray-800">
                          $ {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </div>
      </TabsBody>
    </Tabs>
  );
}
