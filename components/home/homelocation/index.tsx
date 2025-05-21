import TitleHead from "@/components/titleHead";
import İtem from "./item";

export default function HomeLocations() {
  return (
    <>
      <div className="xs:py-[50px]  py-[100px]">
        <div className="mb-[32px] text-center">
          <TitleHead title="Explore Cities" />
          <h1 className="font-extrabold xs:text-[25px]  text-[36px] text-Title ">
            Our Location For You
          </h1>
        </div>
        <İtem />
      </div>
    </>
  );
}
