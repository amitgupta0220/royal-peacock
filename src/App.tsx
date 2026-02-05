import { useMemo } from "react";
import { site } from "./content/site";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Areas } from "./components/Areas";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const nav = useMemo(
    () => [
      { id: "services", label: "Services" },
      { id: "process", label: "Process" },
      { id: "gallery", label: "Work" },
      { id: "reviews", label: "Reviews" },
      { id: "areas", label: "Areas" },
      { id: "contact", label: "Contact" }
    ],
    []
  );

  return (
    <>
      <Header nav={nav} />
      <main>
        <Hero />
        <TrustBar items={site.trust} />
        <Services />
        <Process />
        <Gallery />
        <Reviews />
        <Areas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
