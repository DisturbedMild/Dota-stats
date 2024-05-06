const MainNavigation = () => {
  return (
    <header id="header" className="flex container mx-auto mb-10 py-1">
      <nav id="header__nav">
        <ul className="flex items-center gap-4">
          <li className="">
            <a
              href="/"
              className="bg-green-500 text-white text-size-xl px-1 py-1 uppercase "
            >
              Dota2Stats
            </a>
          </li>
          <li className="">
            <a href="/cybersport">Cybersport</a>
          </li>
          <li className="">
            <a href="/heroes">Heroes</a>
          </li>
          <li className="">
            <a href="/items">Items</a>
          </li>
          <li className="">
            <a href="/players">Players</a>
          </li>
          <li className="">
            <a href="/matches">Matches</a>
          </li>
          <li className="">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
