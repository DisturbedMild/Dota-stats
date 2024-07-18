import AsideMatches from "@/components/matches/AsideMatches";
import Posts from "@/components/post/Posts";
import SearchBar from "@/components/searchbar/SearchBar";

const HomePage = async () => {
  return (
    <section className="content flex gap-2">
      <div className="body w-2/3 bg-secondary/30">
        <SearchBar/>
        <Posts/>
      </div>
      <AsideMatches/>
    </section>
  );
};

export default HomePage;
