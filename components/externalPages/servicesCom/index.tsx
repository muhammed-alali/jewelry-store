import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export default function ServicesCom() {
  const data = [
    {
      id: 1,
      imgName: "/photo/home-1.png",
      title: "Buy A New Home",
      desc: "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    },
    {
      id: 2,
      imgName: "/photo/home-2.png",
      title: "Sell a home",
      desc: "Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.",
    },
    {
      id: 3,
      imgName: "/photo/home-3.png",
      title: "Rent a home",
      desc: "Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.",
    },
  ];
  return (
    <>
      <div className="grid xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xs:mx-4 md:container  mx-auto gap-8 xs:py-[50px]  py-[100px]">
        {data.map((nweData) => (
          <div
            key={nweData.id}
            className="bg-white border border-[#e4e4e4] hover:border-none rounded-2xl py-[50px] px-[30px] group hover:shadow-solutionsShadow duration-300"
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
        ))}
      </div>
    </>
  );
}
