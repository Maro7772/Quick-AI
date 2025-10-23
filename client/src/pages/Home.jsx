import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AiTools from "../components/AiTools";
import Testimonials from "../components/Testimonials";
import CompanyLogos from "../components/CompanyLogos";
import Plan from "../components/Plan";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogos />
      <AiTools />
      <Testimonials />
      <Plan />
      <Footer />
    </>
  );
};

export default Home;
