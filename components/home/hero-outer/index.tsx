import Image from "next/image";

export default function HeroOuter() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-6 py-[100px]">
        <div className=" relative mx-auto ">
          <Image src={"/photo/banner1.jpg"} alt="" width={700} height={650} />
          <div className="absolute z-10 top-[30%] left-[4%] w-[251px]">
            <h1 className="text-[20px] font-semibold">مجموعة جديدة</h1>
            <p className="my-4">
              بريقٌ لا يُقاوم، يتجسّد في كل قطعة من مجموعتنا الذهبية الجديدة.
            </p>
            <button className="hover:bg-Second duration-300 bg-SiteColor w-28 h-[40px] text-white">
              تسوق الان
            </button>
          </div>
        </div>
        <div className=" relative mx-auto ">
          <Image src={"/photo/banner2.jpg"} alt="" width={700} height={650} />
          <div className="absolute z-10 top-[30%] left-[6%] ">
            <h1 className="text-[20px] font-semibold">الاكثر مبيعا</h1>
            <p className="my-4">
              القطعة الذهبية الأكثر طلبًا... الآن بين يديك.
            </p>
            <button className="hover:bg-Second duration-300 bg-SiteColor w-28 h-[40px] text-white">
              تسوق الان
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
