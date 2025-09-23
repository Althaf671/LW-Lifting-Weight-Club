// home.tsx

import Navbar from "@/global/components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="home">

        {/* Navbar */}
        <div className="navbar__container">
          <Navbar />
        </div>

        {/* Components */}
        <div className="home-component__container">
          <Hero />
        </div>

    </main>
  );
};
