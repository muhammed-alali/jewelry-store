import Link from "next/link";

export default function BlogCategoriesDetay() {
  const categories = [
    { id: 1, name: "Buying", count: 3 },
    { id: 2, name: "Neighborhoods", count: 4 },
    { id: 3, name: "Trends", count: 2 },
    { id: 4, name: "Renovation", count: 5 },
    { id: 5, name: "Selling", count: 2 },
  ];

  return (
    <>
      <div className="mb-8 rounded-lg bg-white border-b border-BorderColor pb-6">
        <h2 className="text-xl font-semibold mb-4 ">Categories</h2>
        {categories.map((category, index) => (
          <Link href={`/`} key={category.id}>
            <div
              key={index}
              className="flex justify-between mb-2 bg-[rgb(245,245,245)] py-[17px] px-[22px] rounded-lg text-Title  hover:bg-SiteColor hover:text-white duration-300"
            >
              <span className=" text-[16px] font-medium">{category.name}</span>
              <span>({category.count})</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
