import About from "./About";
import Banner from "./Banner";
import Services from "./services/Services";

const Home = () => {
  return (
    <div className="space-y-5">
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
