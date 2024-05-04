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
import { useEffect } from "react";
import { response } from "express";

function Page() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("api/register")
      .then((response) => response.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 from-primary to-accent">
        <Card className="mt-10 bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Welcome to Selingkuh-app Dashboard</CardTitle>
            <CardDescription>
              Explore the seamless interface and robust features of our
              platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground mb-4">
              Get started by navigating through the dashboard or contact our
              support for assistance.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <p>Contact</p>
        {name.map((name) => (
          <div key={name.id}>
            <p>{name.name}</p>
          </div>
        ))}
        {/* <div className="container mx-auto px-4 from-primary to-accent">
          <Card className="mt-10 bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Avatar>Avatar</Avatar>
            <p>Name</p>
            <p>las chat...</p>
          </Card>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Page;
