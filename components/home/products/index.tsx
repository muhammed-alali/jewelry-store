"use client";
import TitleHead from "@/components/titleHead";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong, FaBath } from "react-icons/fa6";
import { IoBed, IoLocationOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { data } from "./data";

export default function HomeProducts() {
  return (
    <>
      <div className="py-[100px]">
        <div className="mx-auto w-fit mb-12">
          <TitleHead title=" منتجاتنا" />
        </div>
        <Tabs value="rings" className="md:container mx-auto">
          <TabsHeader
            className="bg-white  gap-[2rem]  mx-auto xs:w-full  xs:gap-3 xs:flex-wrap w-[40%] pb-12 "
            indicatorProps={{
              className: "border border-SiteColor bg-white  rounded-sm ",
            }}
          >
            {data.map(({ category, slug }) => (
              <Tab
                key={slug}
                value={slug}
                activeClassName="!text-SiteColor"
                className="tab-button  hover:bg-[#f0f0f0] text-gray-900 hover:text-gray-900 border xs:w-fit xs:px-[1.2rem]  py-2 px-4 bg-[#f0f0f0]  rounded-sm transition-all duration-300"
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
                  <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {array.map((item) => (
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
                            {!item.new ? (
                              ""
                            ) : (
                              <div className="absolute top-2 left-2">
                                <span className="  bg-[rgba(0,0,0,0.3)] text-white text-[12px] font-semibold px-[10px] py-[5px] ml-2 rounded-[2px] tracking-[0.8px]">
                                  {item.new}
                                </span>
                              </div>
                            )}
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
                    ))}
                  </div>
                </TabPanel>
              ))}
            </div>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}
