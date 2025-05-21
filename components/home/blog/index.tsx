import TitleHead from "@/components/titleHead";
import İtem from "./item";

import { blogProps } from "@/components/types/blog";

export default function Blog() {
  const data: blogProps[] = [
    {
      id: 1,
      yearMonth: "January 28, 2024",
      imgName: "/photo/blog1.jpg",
      title: "Building gains into housing stocks and how to trade the sector",
      desc: "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
    },
    {
      id: 2,
      yearMonth: "January 28, 2024",
      imgName: "/photo/blog2.jpg",
      title: "Building gains into housing stocks and how to trade the sector",
      desc: "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
    },
    {
      id: 3,
      yearMonth: "January 28, 2024",
      imgName: "/photo/blog3.jpg",
      title: "Building gains into housing stocks and how to trade the sector",
      desc: "The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...",
    },
  ];
  return (
    <>
      <div className="xs:py-[50px]  py-[100px] bg-[rgb(243,247,253)]">
        <div className="mb-[32px] text-center">
          <TitleHead title="Blogs" />
          <h1 className="font-extrabold xs:text-[25px] text-[36px] text-Title ">
            From Our Blog
          </h1>
        </div>
        <div className="md:container xs:mx-4 mx-auto grid xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
          {data.map((item) => {
            return <İtem newData={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}
