"use client";

import Image from "next/image";
import type { TPost } from "@/app/page";

const formatpostsContent = (post: TPost) => {
  if (post.url.search("steam_community_announcements") > 0) {
    const content = post.contents;
    const getImgSrc = content
      .replaceAll("[", "<")
      .replaceAll("]", ">")
      .split("</img>")[0]
      .split("<img>")[1];

    const updatedImageUrl = getImgSrc ? getImgSrc.split("}")[1] : null;

    if (content.split("img]").length > 1) {
      const textContent = content
        .split("img]")[2]
        .replaceAll("[", "<")
        .replaceAll("]", ">");
      return { url: updatedImageUrl, contents: textContent };
    }
  }
  return post;
};

const imageLoader = ({ src, width, quality }: any) => {
  return `https://clan.akamai.steamstatic.com/images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const Post = ({ item }: { item: TPost }) => {
  const updatedContent = formatpostsContent(item);
  return (
    <li key={item.gid}>
      <h2>{item.title}</h2>
      {updatedContent?.url && (
        <Image
          loader={imageLoader}
          src={updatedContent?.url}
          width={400}
          height={300}
          alt="Post image"
        />
      )}
      <p>{updatedContent?.contents}</p>
      <p>
        {item.author}&nbsp;|&nbsp;
        <a href={item.url} target="_blank" className="text-blue-400">
          Read More
        </a>
      </p>
    </li>
  );
};
