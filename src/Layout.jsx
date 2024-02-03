/*
TODO: Outlet is a component from react-router-dom library. It serves as a placeholder in your component where the child routes will render.

In the context of your code, the Outlet component is placed between the Header and Footer components. This means that any child routes defined in your routing configuration will render at this spot, effectively "sandwiched" between your header and footer.
*/
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
