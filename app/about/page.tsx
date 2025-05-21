import AboutCom from "@/components/externalPages/aboutCom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function About() {
  return (
    <>
      <AboutCom />
    </>
  );
}
