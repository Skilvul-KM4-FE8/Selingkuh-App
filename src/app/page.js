import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">  */}
      <main className="flex flex-col justify-center px-4   min-h-screen bg-gradient-to-b from-[#DB4E66] from-10% via-[#A24688] via-30% to-[#4E3ABA] to-80%"> 
        <div className="w-2/3">
          <p className="text-slate-100 text-4xl">selingkuh.app</p>
          <div className="py-3">
            <p className="text-slate-100 leading-relaxed font-extralight">Sebuah Web App penunjang para pemuda untuk komunikasi antar selingkuhanya</p>
          </div>
          <Link href={""}><Button>Selingkuh Yuk!</Button></Link>
        </div>
      </main>
    </>
  );
}
