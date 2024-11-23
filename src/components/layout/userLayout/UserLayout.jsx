import { Fragment } from "react";
import { Outlet, } from "react-router-dom";

import './UserLayout.css';
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

function UserLayout() {

  return (
    <Fragment>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default UserLayout;