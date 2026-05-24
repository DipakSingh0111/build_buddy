import CTABanner from "../components/home/CTABanner";
import Hero from "../components/home/Hero";
import PopularServices from "../components/home/PopularServices";
import TopWorkers from "../components/home/TopWorkers";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <PopularServices />
      <WhyChooseUs />
      <TopWorkers />
      <CTABanner />
      {/* OTHER SECTIONS */}
      {/* <Services /> */}
      {/* <HowItWorks /> */}
      {/* <Stats /> */}
    </Layout>
  );
};

export default Home;
