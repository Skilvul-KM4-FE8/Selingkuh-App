import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 from-primary to-accent">
        <Card className="mt-10 bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Welcome to Shad.cn Dashboard</CardTitle>
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
      </div>
      <Footer />
    </>
  );
}

export default Page;
