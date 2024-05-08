import SearchBar from "@/components/searchbar/searchBar";
import { Post } from "@/components/post/post";

export type TPost = {
  gid: string;
  title: string;
  url: string;
  author: string;
  contents: string;
  date: number;
};

const postsUrl =
  "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=570&count=5";

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
          <div className="mt-2 px-2 py-2 w-full h-screen bg-neutral-500/20 text-white">
            Content
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
