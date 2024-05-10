"use client";

import defaultPostImage from "./default-post.png";
import "./styles.css";

import Image from "next/image";
import type { TPost } from "@/app/page";

const formatpostsContent = (post: TPost) => {
  if (post.url.includes("steam_community_announcements")) {
    const content = post.contents;
    const getImgSrc = content.split("[/img]")[0].split("[img]")[1];

    const updatedImageUrl = getImgSrc ? getImgSrc.split("}")[1] : null;

    if (content.split("img]").length > 1) {
      const textContent = content
        .split("img]")[2]
        .replaceAll("[", "<")
        .replaceAll("]", ">");
      console.log(textContent);
      return { url: updatedImageUrl, contents: textContent };
    }
  }
};

const imageLoader = ({ src, width, quality }: any) => {
  return `https://clan.akamai.steamstatic.com/images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const Post = ({ item }: { item: TPost }) => {
  const updatedContent = formatpostsContent(item);
  return (
    <li key={item.gid} className="flex gap-4">
      <div className=" w-5/12">
        {updatedContent?.url ? (
          <Image
            loader={imageLoader}
            src={updatedContent?.url}
            width={400}
            height={200}
            alt="Post image"
          />
        ) : (
          <Image
            src={defaultPostImage}
            width={400}
            height={200}
            alt="Post image"
          />
        )}
      </div>

      <div className="flex flex-col justify-between w-7/12">
        <h2 className=" mt-2 text-xl">{item.title}</h2>

        <p>
          {item.author}&nbsp;|&nbsp;
          <a href={item.url} target="_blank" className="text-blue-400">
            Read More
          </a>
        </p>
      </div>
    </li>
  );
};
