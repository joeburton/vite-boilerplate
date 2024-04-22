import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function Root() {
  return (
    <>
      <Navigation />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
