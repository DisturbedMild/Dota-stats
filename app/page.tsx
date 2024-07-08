import AsideMatches from "@/components/matches/AsideMatches";
import Posts from "@/components/post/Posts";
import SearchBar from "@components/searchbar/SearchBar";

const HomePage = async () => {
  return (
    <article className="content flex gap-2">
      <section className="body w-2/3">
        <SearchBar/>
        <Posts/>
      </section>
      <AsideMatches/>
    </article>
  );
};

export default HomePage;
