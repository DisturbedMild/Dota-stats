// interface Props {}

import SearchBar from "../Components/SearchBar/SearchBar";

const HomePage = () => {
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
