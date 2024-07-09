"use client";

import Image from "next/image";

import {Post} from "@/types/index";

import defaultPostImage from "./default-post.png";
const formatPostsContent = (post: Post) => {
  if ((post.feedlabel = "Community Announcements")) {
    const content = post.contents;
    const getImgSrc = content.split("[/img]")[0].split("[img]")[1];

    const updatedImageUrl = getImgSrc ? getImgSrc.split("}")[1] : null;

    if (content.split("img]").length > 1) {
      const textContent = content
        .split("img]")[2]
        .replaceAll("[", "<")
        .replaceAll("]", ">");

      return { url: updatedImageUrl, contents: textContent };
    }
  }
};

const imageLoader = ({ src, width, quality }: any) => {
  return `https://clan.akamai.steamstatic.com/images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const PostItem = ({ item }: { item: Post }) => {
  const updatedContent = formatPostsContent(item);
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
        <div>
          <h2 className="mb-2 text-xl line-clamp-1">{item.title}</h2>
          <p className="line-clamp-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            dignissimos, atque autem earum sed nulla perferendis, nemo commodi
            in corporis repellendus quisquam est accusantium architecto ratione
            unde. Delectus atque voluptate quaerat deserunt laboriosam est alias
            accusamus, modi soluta nisi assumenda!
          </p>
        </div>
        <p>
          {item.author}&nbsp;|&nbsp;
          <a href={item.url} target="_blank" className="transition-all hover:text-teal">
            Read More
          </a>
        </p>
      </div>
    </li>
  );
};
