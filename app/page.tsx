import SearchBar from "@components/searchbar/searchBar";
import { Post } from "@components/post/post";
import Link from "next/link";

export type TPost = {
  gid: string;
  title: string;
  url: string;
  author: string;
  contents: string;
  date: number;
  feedlabel: string;
};

const postsUrl =
  "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=570&count=10";

async function getData() {
  const res = await fetch(postsUrl);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomePage = async () => {
  const data = await getData();
  const posts = data.appnews.newsitems;
  return (
    <>
      <article className="content flex gap-2">
        <section className="body w-2/3">
          <SearchBar />
          <div className="flex flex-col gap-6 mt-2 px-2 py-2 w-full bg-neutral-500/20 text-white">
            <div className="flex justify-between">
              <h1 className="text-2xl">Recent Posts:</h1>
              <Link href="/posts">All posts --- </Link>
            </div>
            {posts.map((item: TPost) => (
              <Post key={item.gid} item={item} />
            ))}
          </div>
        </section>
        <aside className="bg-neutral-500/20 w-1/3">
          <h2 className="text-center text-white">Aside</h2>
        </aside>
      </article>
    </>
  );
};

export default HomePage;
