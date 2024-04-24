import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header id="header" className="flex container mx-auto mb-10 py-1">
      <nav id="header__nav">
        <ul className="flex items-center gap-4">
          <li className="">
            <NavLink
              to="/"
              className="bg-green-500 text-white text-size-xl px-1 py-1 uppercase "
            >
              DotabuffClone
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="cybersport"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 px-1 py-1 bg-neutral-600/40"
                  : "text-white px-1 py-1"
              }
            >
              Cybersport
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="heroes"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 px-1 py-1 bg-neutral-600/40"
                  : "text-white px-1 py-1"
              }
            >
              Heroes
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="items"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 px-1 py-1 bg-neutral-600/40"
                  : "text-white px-1 py-1"
              }
            >
              Items
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="players"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 px-1 py-1 bg-neutral-600/40"
                  : "text-white px-1 py-1"
              }
            >
              Players
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="matches"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 px-1 py-1 bg-neutral-600/40"
                  : "text-white px-1 py-1"
              }
            >
              Matches
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 px-1 py-1 bg-neutral-600/40"
                  : "text-white px-1 py-1"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
