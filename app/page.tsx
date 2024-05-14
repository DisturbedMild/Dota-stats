import AsideMatches from "@/components/matches/asideMatches";
import Posts from "@/components/post/posts";
import SearchBar from "@components/searchbar/searchBar";

const HomePage = async () => {
  return (
    <>
      <article className="content flex gap-2">
        <section className="body w-2/3">
          <SearchBar />
          <Posts />
        </section>
        <AsideMatches />
      </article>
    </>
  );
};

export default HomePage;
