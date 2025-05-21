import TitleHead from "@/components/titleHead";
import İtem from "./item";
import { propsData } from "@/components/types";

export default function Solutions() {
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
      <div className="xs:py-[50px]  py-[100px]">
        <div className="mb-[32px] text-center">
          <TitleHead title="Services" />
          <h1 className="font-extrabold xs:text-[25px] text-[36px] text-Title ">
            What We Do?
          </h1>
        </div>
        <div className="md:container md:mx-4 md:w-auto xs:mx-4 lg:mx-auto grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-[20px] xl:gap-[30px]">
          {data.map((item: propsData) => {
            return <İtem nweData={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}
