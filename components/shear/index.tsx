"use client";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

export default function Shear({
  title,
  subdirectory,
  slug,
}: {
  title: string;
  subdirectory: string;
  slug?: number;
}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <>
      <div className="mt-4 flex gap-1">
        <FacebookShareButton
          title={title}
          url={`${apiUrl}/${subdirectory}${slug ? `/${slug}` : ""}`}
          blankTarget={true}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          title={title}
          url={`${apiUrl}/${subdirectory}${slug ? `/${slug}` : ""}`}
          blankTarget={true}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton
          title={title}
          url={`${apiUrl}/${subdirectory}${slug ? `/${slug}` : ""}`}
          blankTarget={true}
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </>
  );
}
