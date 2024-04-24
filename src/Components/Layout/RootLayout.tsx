import { Outlet } from "react-router-dom";
import MainNavigation from "../navigation/MainNavigation";
import Footer from "../footer/Footer";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
