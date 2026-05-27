import CleaningEssentials from "../components/home/CleaningEssentials";
import CTABanner from "../components/home/CTABanner";
import Hero from "../components/home/Hero";
import PopularServices from "../components/home/PopularServices";
import TopWorkers from "../components/home/TopWorkers";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularServices />
      <WhyChooseUs />
      <TopWorkers />
      <CleaningEssentials />
      <CTABanner />
    </>
  );
};

export default Home;
