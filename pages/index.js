import Image from "next/image";
import Heads from "../components/head";
import Navbar from "../components/navbar";
import LandingPage from "../components/lp";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Heads />
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <LandingPage />
      <footer className="fixed bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
