export default function TitleHead({ title }: { title: string }) {
  return (
    <>
      <h1 className="  text-[#111] tracking-[.06rem]  leading-[24px] text-[24px] uppercase   font-semibold ">
        {title}
        <div className="mx-auto  border-b border-SiteColor w-[40%] pt-[10px]"></div>
      </h1>
    </>
  );
}
