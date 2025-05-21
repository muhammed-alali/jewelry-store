import TitleHead from "@/components/titleHead";
import İtem from "./item";

export default function TabsBodyCom() {
  return (
    <>
      <div className="mb-[32px] text-center">
        <TitleHead title="Featured Properties " />
        <h1 className="font-extrabold xs:text-[25px] text-[36px] text-Title ">
          Recommended For You
        </h1>
      </div>
      <İtem />
    </>
  );
}
