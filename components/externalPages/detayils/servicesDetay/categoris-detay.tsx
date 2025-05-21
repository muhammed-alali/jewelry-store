import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function ServicesCategoriesDetay() {
  const categories = [
    { id: 1, name: "Buying" },
    { id: 2, name: "Neighborhoods" },
    { id: 3, name: "Trends" },
    { id: 4, name: "Renovation" },
    { id: 5, name: "Selling" },
  ];

  return (
    <>
      <div className="rounded-lg ">
        <h2 className="text-xl font-semibold mb-4 ">Categories</h2>
        {categories.map((category, index) => (
          <Link href={`/`} key={category.id}>
            <div className="flex justify-between mb-2 bg-[rgb(245,245,245)] py-[8px] pl-[22px] pr-[12px] rounded-lg text-Title  hover:bg-SiteColor hover:text-white duration-300">
              <span className=" text-[16px] font-medium my-auto">
                {category.name}
              </span>
              <span className="bg-white w-[44px] h-[44px] rounded-md content-center">
                <FiChevronRight className=" text-Title text-[22px] m-auto" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
