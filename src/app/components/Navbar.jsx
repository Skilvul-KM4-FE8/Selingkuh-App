import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-transparant text-primary-foreground flex justify-between items-center p-4">
      <div className="text-lg font-bold">Selingkuh-app</div>
      <div>
        <Link href="/login">
          <Button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md mr-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
            Login
          </Button>
        </Link>
        <Link href="register">
          <Button className="">Register</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
