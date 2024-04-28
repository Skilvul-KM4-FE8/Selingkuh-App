// import * as React from "react";
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          name,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Register failed");
      }
    } catch (error) {
      console.error("Register failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Silahkan Register terlebih dahulu sebelum kamu chatan dengan selingkuhanmu yaa...</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="Email Kamu" value={email} onChange={handleEmailChange} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nama</Label>
                <Input id="name" placeholder="Nama Kamu" value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input id="name" type="password" placeholder="Password kamu" onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleRegister}>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
