import { Suspense } from "react";
import Link from "next/link";

import { PostItem } from "@/components/post/PostItem";
import { Skeleton } from "@/components/ui/loaders/Skeleton";
import { Post } from "@/types/index";

const postsUrl =
  "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=570&count=10";

const getHeroes = async () => {
  const res = await fetch(postsUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

async function Posts() {
  const { appnews } = await getHeroes();
  const posts: Post[] = appnews.newsitems;

  return (
    <div className="flex flex-col gap-6 mt-2 px-2 py-2 w-full text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl">Recent News:</h1>
        <Link href="posts">All posts --- </Link>
      </div>
      {posts.map((item: Post) => (
        <Suspense key={item.gid} fallback={<Skeleton />}>
          <PostItem item={item} />
        </Suspense>
      ))}
    </div>
  );
}

export default Posts;
