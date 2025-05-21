import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaBath } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";

const properties = [
  {
    id: 1,
    name: "Lakeview Haven, Lake Tahoe",
    beds: 3,
    baths: 2,
    sqft: 1150,
    price: "$12,55.00",
    image: "/photo/house-1.jpg",
  },
  {
    id: 2,
    name: "Casa Lomas De Machalí Machas",
    beds: 3,
    baths: 2,
    sqft: 960,
    price: "$7,250.00",
    image: "/photo/house-2.jpg",
  },
  {
    id: 3,
    name: "simply dummy text of the printing and typesetting",
    beds: 3,
    baths: 2,
    sqft: 2000,
    price: "$3,600.00",
    image: "/photo/house-3.jpg",
  },
];

export default function PropertiesCategoriesDetay() {
  return (
    <>
      <div className="md:px-6 pb-6">
        <h1 className="text-2xl font-semibold mb-4 md:px-4">
          Latest Properties
        </h1>
        <div className="space-y-4 ">
          {properties.map((property) => (
            <div key={property.id} className=" md:px-4 lg:pr-0 xl:pr-4">
              {" "}
              <div
                key={property.id}
                className="grid grid-cols-12 gap-4 py-4 group border-b border-BorderColor"
              >
                <div className="relative overflow-hidden rounded w-[90px] md:w-[120px] lg:w-[100px] xl:w-[120px] h-[88px] col-span-4">
                  <Image
                    src={property.image}
                    alt={property.name}
                    className=" object-cover rounded group-hover:scale-[1.1] duration-300"
                    fill
                  />
                </div>
                <div className="col-span-8">
                  <Link href={"/"}>
                    <h2 className="font-semibold hover:text-SiteColor duration-300 line-clamp-2 ">
                      {property.name}
                    </h2>
                  </Link>
                  {/* <p className="text-sm">
                    <span className="font-medium  text-Desc">Beds:</span>{" "}
                    <span>{property.beds}</span> |
                    <span className="font-medium  text-Desc"> Baths:</span>
                    <span> {property.baths}</span> |
                    <span className="font-medium text-Desc"> Sqft:</span>{" "}
                    <span>{property.sqft}</span>
                  </p> */}
                  <div className="flex gap-3 md:gap-4 lg:gap-3 flex-wrap lg:flex-nowrap xl:justify-between my-2 text-sm text-gray-600 ">
                    <div className="flex  xs:gap-1 gap-1 text-[rgb(163,171,176)]">
                      <IoBed className="text-[16px] " /> <span>Beds:</span>{" "}
                      <span className="text-Title">{property.beds}</span>
                    </div>
                    <div className="flex gap-1 text-[rgb(163,171,176)]">
                      <FaBath className="text-[16px] " />
                      <span>Baths:</span>{" "}
                      <span className="text-Title"> {property.baths}</span>
                    </div>
                    <div className="flex gap-1 text-[rgb(163,171,176)]">
                      <TfiRulerAlt2 className="text-[16px] " />{" "}
                      <span>sqft:</span>{" "}
                      <span className="text-Title">{property.sqft}</span>
                    </div>
                  </div>
                  <p className="text-lg font-bold">
                    {" "}
                    <span>{property.price}</span>{" "}
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
