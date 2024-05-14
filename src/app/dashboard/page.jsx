"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Avatar } from "@/components/ui/avatar";

function Page() {
  return (
    <div className="bg-selingkuh min-h-screen">
      <Navbar className="" />
      <div className="container mx-auto px-4 from-primary to-accent ">
        <div className="text-2xl font-bold mt-4 text-white">
          <p>Contact</p>
        </div>
        <Card className=" flex bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <Avatar />
          <div className="text-xl font-bold">
            <p>Name</p>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
