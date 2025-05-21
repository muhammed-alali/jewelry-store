import Link from "next/link";
import { FaBath } from "react-icons/fa6";
import { IoBed, IoLocationOutline } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";

export default function PropertiesCom() {
  const data = [
    {
      id: 1,
      imgName: "photo/house-1.jpg",
      title: "Casa Lomas de Machalí Machas",
      locationHome: "145 Brooklyn Ave, Califonia, New York",
      beds: "3",
      baths: "2",
      sqft: "110",
      agentName: "Muhammed",
      price: "7250,00",
    },
    {
      id: 2,
      imgName: "photo/house-2.jpg",
      title: "Modern Apartment in LA",
      locationHome: "123 Main St, Los Angeles, CA",
      beds: "2",
      baths: "1",
      sqft: "90",
      agentName: "Aisha",
      price: 5500.0,
    },

    {
      id: 3,
      imgName: "photo/house-2.jpg",
      title: "Modern Apartment in LA",
      locationHome: "123 Main St, Los Angeles, CA",
      beds: "2",
      baths: "1",
      sqft: "90",
      agentName: "Aisha",
      price: 5500.0,
    },
    {
      id: 4,
      imgName: "photo/house-3.jpg",
      title: "Luxury Villa in Miami",
      locationHome: "200 Ocean Drive, Miami, FL",
      beds: "5",
      baths: "4",
      sqft: "300",
      agentName: "Ali",
      price: 25000.0,
    },
    {
      id: 5,
      imgName: "photo/house-1.jpg",
      title: "Luxury Villa in Miami",
      locationHome: "200 Ocean Drive, Miami, FL",
      beds: "5",
      baths: "4",
      sqft: "300",
      agentName: "Ali",
      price: 25000.0,
    },

    {
      id: 6,
      imgName: "photo/house-4.jpg",
      title: "Casa Lomas de Machalí Machas",
      locationHome: "145 Brooklyn Ave, Califonia, New York",
      beds: "4",
      baths: "2",
      sqft: "110",
      agentName: "ayşe",
      price: "4250,00",
    },

    {
      id: 7,
      imgName: "photo/house-5.jpg",
      title: "Casa Lomas de Machalí Machas",
      locationHome: "145 Brooklyn Ave, Califonia, New York",
      beds: "6",
      baths: "5",
      sqft: "600",
      agentName: "Muhammed",
      price: "950,00",
    },

    {
      id: 8,
      imgName: "photo/house-1.jpg",
      title: "Casa Lomas de Machalí Machas",
      locationHome: "145 Brooklyn Ave, Califonia, New York",
      beds: "3",
      baths: "2",
      sqft: "1150",
      agentName: "sara",
      price: "7250,00",
    },
    {
      id: 9,
      imgName: "photo/house-6.jpg",
      title: "Casa Lomas de Machalí Machas",
      locationHome: "145 Brooklyn Ave, Califonia, New York",
      beds: "3",
      baths: "2",
      sqft: "1150",
      agentName: "sara",
      price: "7250,00",
    },
  ];
  return (
    <>
      <div className="xs:py-[50px]  py-[100px]">
        <div className="grid xs:grid-cols-1 xs:mx-4 md:grid-cols-2 lg:grid-cols-3 md:container mx-auto gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md group rounded-2xl relative overflow-hidden w-fit mb-4"
            >
              <div className="relative overflow-hidden">
                <div className="relative after:absolute  after:inset-0 after:bg-gradient-to-b after:from-[rgba(0,0,0,0)69.05%] after:to-black/70 ">
                  <img
                    src={item.imgName}
                    alt={item.title}
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transform duration-500 w-[408px] h-[269px] "
                  />
                </div>
                {/* <div className="absolute  inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)69.05%] to-black/70 " /> */}

                <div className="absolute top-2 left-2">
                  <span className="bg-SiteColor text-white text-[12px] font-semibold px-3 py-2 rounded-full tracking-[0.8px]">
                    Featured
                  </span>
                  <span className="bg-[rgba(0,0,0,0.3)] hover:bg-SiteColor duration-300 text-white text-[12px] font-semibold px-3 py-2 ml-2 rounded-full tracking-[0.8px]">
                    For Sale
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-white xs:top-[220px]  xs:w-[260px] text-sm flex items-center gap-2 absolute top-[240px]">
                  <IoLocationOutline className="text-[20px]" />{" "}
                  {item.locationHome}
                </p>
                <div className="mb-6 pb-6 border-b border-[#e4e4e4]">
                  <Link href={"/properties/" + item.id}>
                    <h3 className="font-bold text-[18px] leading-[25.2px] text-Title hover:text-SiteColor duration-300 cursor-pointer">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="flex justify-between my-2 text-sm text-gray-600 md:pr-[30%]">
                    <span className="flex gap-1">
                      <IoBed className="text-[16px] text-[rgb(163,171,176)]" />{" "}
                      {item.beds} Beds
                    </span>
                    <span className="flex gap-1">
                      <FaBath className="text-[16px] text-[rgb(163,171,176)]" />
                      {item.baths} Baths
                    </span>
                    <span className="flex gap-1">
                      <TfiRulerAlt2 className="text-[16px] text-[rgb(163,171,176)]" />{" "}
                      {item.sqft} sqft
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-500">Agent: {item.agentName}</p>
                  <p className="font-bold text-xl text-gray-800">
                    $ {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
