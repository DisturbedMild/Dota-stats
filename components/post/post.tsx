"use client";

import type { TPost } from "@/app/page";

const formatpostsContent = (post: TPost) => {
  const formatedPost = post.contents;
  console.log(formatedPost);
};

export const Post = ({ item }: { item: TPost }) => {
  formatpostsContent(item);
  return (
    <li key={item.gid}>
      <h2>{item.title}</h2>

      <p></p>
      <p>
        {item.author}&nbsp;|&nbsp;
        <a href={item.url} target="_blank" className="text-blue-400">
          Read More
        </a>
      </p>
    </li>
  );
};
