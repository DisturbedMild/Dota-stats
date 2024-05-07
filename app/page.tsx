"use client";

import { useEffect } from "react";
import SearchBar from "./components/searchbar/SearchBar";

const newsUrl =
  "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/key=?appid=570&count=10";

const HomePage = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(newsUrl);

  //     console.log(response);

  //     if (!response.ok) {
  //       throw new Error("Can't fetch data");
  //     }

  //     const data = await response.json();

  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <article className="content flex gap-2">
        <section className="body w-2/3">
          <SearchBar />
          <div className="mt-2 px-2 py-2 w-full h-screen bg-neutral-500/20 text-white">
            Content
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
