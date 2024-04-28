"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

function Page() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className="w-[350px]">
        <div className="flex justify-center items-center mt-7">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Name" />
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password" />
            <Button type="submit">Update</Button>
          </form>
        </CardContent>
        <CardFooter>
          <Link href="/register">Register</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Page;
