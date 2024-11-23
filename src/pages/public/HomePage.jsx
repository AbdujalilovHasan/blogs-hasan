import { Fragment } from "react";
import Hero from "../../components/home/Hero";
import PopularBlogs from "../../components/home/PopularBlogs";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <div className="container">
        <PopularBlogs />
      </div>
    </Fragment>
  );
}

export default HomePage;