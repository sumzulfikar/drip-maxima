import Image from "next/image";
import Navbar from "../app/ui/navbar/navbar";
import Footer from "./ui/footer/footer";
import Shop from "../app/ui/shop/shop"
export default function Home() {
  return (
    <div >
      <main >
        <Navbar />
        <Shop />
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
