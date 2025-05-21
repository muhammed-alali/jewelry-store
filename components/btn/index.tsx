import Link from "next/link";

export default function ButtonCom({
  title,
  hight,
  paddingX,
  href,
}: {
  title: string;
  hight: string;
  paddingX: string;
  href?: string;
}) {
  return (
    <>
      <Link href={`/${href}`}>
        <button
          className={`group  relative h-[3rem] px-8 overflow-hidden lg:!h-[${hight}] overflow-x-hidden rounded-full bg-SiteColor lg:!px-[${paddingX}] py-[12px] text-neutral-50`}
        >
          <span className="relative z-10 text-white">{title}</span>
          <span className="absolute inset-0 overflow-hidden rounded-full ">
            <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-Title  transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
      </Link>
    </>
  );
}
