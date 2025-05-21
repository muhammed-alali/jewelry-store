import Image from "next/image";
import ServicesCategoriesDetay from "./categoris-detay";
import Shear from "@/components/shear";

export default function ServicesDetay({ slug }: { slug: number }) {
  return (
    <>
      <section className="md:container xs:mx-4 mx-auto xs:py-[50px]  py-[100px]">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 bg-[rgb(249,249,249)] p-5">
            <div className="w-full xs:h-[300px] h-[500px] relative ">
              <Image
                loading="lazy"
                src={"/photo/hero2.jpg"}
                alt="img"
                fill
                className="rounded-xl"
              />
            </div>
            <div className="my-5">deta categor</div>
            <div>
              <h1 className="text-Title xs:text-[25px] text-[42px] font-bold leading-10 mb-3">
                Home buying 101 Essential best Tips.
              </h1>
              <p className="mb-4 text-Desc leading-7 text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales. Quisque
                sagittis orci ut diam condimentum, vel euismod erat placerat. In
                iaculis arcu eros
              </p>
              <p className="text-Desc leading-7 text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam hendrerit urna. Pellentesque sit amet sapien
                fringilla, mattis ligula consectetur, ultrices Maecenas
              </p>
            </div>
            <Shear
              title={"Home buying 101 Essential best Tips."}
              subdirectory="services"
              slug={slug}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="xs:w-full md:w-[70%] lg:w-full xl:w-[80%] xs:px-6 border border-BorderColor rounded-[12px] p-8  mx-auto lg:mx-0 xl:mx-auto">
              <div className="w-full max-w-md  ">
                <ServicesCategoriesDetay />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
