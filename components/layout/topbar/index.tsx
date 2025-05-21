import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Topbar() {
  return (
    <>
      <div className="">
        <div className="flex justify-between  container mx-auto">
          <div className="relative w-[110px] h-[110px] ">
            <Image
              src={"/photo/logo2.png"}
              alt="logo"
              fill
              className="!h-auto my-auto"
            />
          </div>
          <div className="flex h-[50px] my-auto border border-[#EAEBED] rounded-[4px]">
            <input
              type="text"
              placeholder="بحث"
              className="p-2 w-[400px] focus-visible:outline-none  focus-visible:ring-0"
            />
            <span className="h-[40px] w-[50px] m-auto border-r border-[#EAEBED] content-center px-1 cursor-pointer">
              <IoSearchOutline className="text-[20px] m-auto" />
            </span>
          </div>
          <div className="flex gap-4 my-auto ">
            <div className="relative">
              <div className="absolute text-[11px] top-[-3px] right-[-3px] bg-SiteColor text-white w-4 h-4 rounded-full text-center">
                0
              </div>
              <CiHeart className="text-[27px]" />
            </div>
            <div className="relative">
              <div className="absolute text-[11px] top-[-3px] right-[-3px] bg-SiteColor text-white w-4 h-4 rounded-full text-center">
                1
              </div>
              <LiaShoppingBagSolid className="text-[27px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
