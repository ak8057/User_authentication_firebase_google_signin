import Intro from "./Intro";
import Bar from "../Pages/Bar.jsx";
import Features from "./Features";
import Findout from "./Findout";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Features />
        <Findout />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
