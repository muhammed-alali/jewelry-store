import BlogCom from "@/components/externalPages/blogsCom/inde";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "",
};

export default function Blog() {
  return (
    <>
      <BlogCom />
    </>
  );
}
