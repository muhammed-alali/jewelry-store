import PropertiesCom from "@/components/externalPages/propertiesCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  description: "",
};

export default function Properties() {
  return <PropertiesCom />;
}
