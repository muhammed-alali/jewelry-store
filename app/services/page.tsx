import ServicesCom from "@/components/externalPages/servicesCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "",
};

export default function Services() {
  return (
    <>
      <ServicesCom />
    </>
  );
}
