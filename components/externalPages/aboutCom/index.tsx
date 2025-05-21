import Shear from "@/components/shear";
import Head from "next/head";
import Image from "next/image";

export default function AboutCom() {
  return (
    <>
      <div className=" items-center justify-center md:container mx-auto xs:py-[50px]  py-[100px] ">
        <div className=" mx-auto p-5 bg-white rounded-lg shadow-md md:mx-3">
          <Head>
            <title>Best Carpenter Workshop</title>
          </Head>
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
            <div className="xs:px-0 p-5">
              <h1 className="text-4xl xs:text-[28px] font-bold mb-4">
                Best Carpenter Workshop in Your Local Area.
              </h1>
              <p className="text-lg mb-4">
                User generated content in real-time will have multiple
                touchpoints for offshoring.
              </p>
              <p className="mb-4">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <p className="mb-4">
                Bring to the table win-win survival strategies to ensure
                proactive domination. Collaborative thinking to further the
                overall value proposition. Organically.
              </p>
              <p className="mb-4">
                inventore temporibus a maxime nam voluptatum laboriosam, nulla
                iste blanditiis, incidunt excepturi esse fugit, facere debitis
                officia voluptatem adipisci velit!
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                corporis vitae laudantium consectetur maiores distinctio eos ab
                rerum repudiandae modi.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                doloribus, pariatur tempora nesciunt, aut corrupti numquam
                veritatis quidem natus voluptatem perferendis unde saepe
                obcaecati nam expedita iure tempore sint, neque quae cumque
                deleniti eos. Hic consectetur aliquid cum quo eius.
              </p>
              <Shear title={"About"} subdirectory="about" />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                width={500}
                height={500}
                src="/photo/properties-12.jpg"
                alt="Carpenter"
                className="object-cover h-[650px] w-[600px] mx-auto  rounded-lg"
              />
              <div className=" absolute bottom-5  right-0 mt-5 bg-SiteColor text-white px-3 pt-[32px] pb-[28px] w-[210px] text-center rounded-lg">
                <div className="text-[50px] font-bold">2500+</div>
                <div className="text-[19px] font-medium">Happy Customer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
