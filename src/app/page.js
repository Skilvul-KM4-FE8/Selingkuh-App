import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">  */}
      <main className="flex flex-col justify-center  bg-selingkuh">
        <Navbar />
        <div className=" pt-20 mt-20   min-h-screen ">
          <p className="pl-6 text-slate-100 text-4xl font-bold w-2/3 ">
            selingkuh.app
          </p>
          <div className="pl-6 py-3 w-2/3 ">
            <p className="text-slate-100 leading-relaxed font-extralight">
              Sebuah Web App penunjang para pemuda untuk komunikasi antar
              selingkuhanya
            </p>
          </div>
          <Link className="pl-6" href={""}>
            <Button className="">Selingkuh Yuk!</Button>
          </Link>
          <Footer />
        </div>
      </main>
    </>
  );
}
