import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Areas from "./components/Areas";
import Reviews from "./components/Reviews";
import EstimateMarquee from "./components/EstimateMarquee";
import EstimateForm from "./components/EstimateForm";
import Footer from "./components/Footer";
import SeoSchema from "./components/SeoSchema";

export default function App() {
  return (
    <>
      <SeoSchema />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Work />
        <Process />
        <Areas />
        <Reviews />
        <EstimateMarquee />
        <EstimateForm />
      </main>
      <Footer />
    </>
  );
}
