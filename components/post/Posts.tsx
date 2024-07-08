import Link from "next/link";
import {Suspense} from "react";
import {IPost} from "@/services/api/endpoints/types";
import {Post} from '@components/post/Post';
import {Skeleton} from "@components/ui/loaders/Skeleton";

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
  const data = await getHeroes();
  const posts = data.appnews.newsitems;

  return (
    <div className="flex flex-col gap-6 mt-2 px-2 py-2 w-full bg-secondary/30 text-white">
      <div className="flex justify-between">
        <h1 className="text-2xl">Recent News:</h1>
        <Link href="/posts">All posts --- </Link>
      </div>
      {posts.map((item: IPost) => (
        <Suspense key={item.gid} fallback={<Skeleton/>}>
          <Post item={item}/>
        </Suspense>
      ))}
    </div>
  );
}

export default Posts;
