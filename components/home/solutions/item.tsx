import { propsData } from "@/components/types";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function İtem({ nweData }: { nweData: propsData }) {
  return (
    <>
      <div
        key={nweData.id}
        className="xs:mb-4 bg-white border border-[#e4e4e4] hover:border-none rounded-2xl py-[50px] px-[30px] group hover:shadow-solutionsShadow duration-300"
      >
        <div>
          <Image
            loading="lazy"
            className="mx-auto group-hover:[transform:rotateY(-360deg)] duration-700"
            src={nweData.imgName}
            alt={nweData.title}
            width={220}
            height={182}
          />
        </div>
        <div className="text-center">
          <h1 className=" text-Title text-[24px] font-semibold my-5">
            {nweData.title}
          </h1>
          <p className="text-[16px] mb-[30px] text-Desc leading-[1.6em]">
            {nweData.desc}
          </p>
          <Link href={"/services/" + nweData.id} className="">
            {" "}
            <button className="mx-auto text-[16px] text-Title flex gap-2  border border-SiteColor group-hover:bg-SiteColor py-[15px] px-[47px]  group-hover:xs:px-[55px] group-hover:md:px-[67px] group-hover:text-white rounded-full duration-300">
              Learn More
              <HiArrowRight className="text-[20px] text-Title my-auto group-hover:text-white" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
