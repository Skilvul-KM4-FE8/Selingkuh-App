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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen ">
        <Card className="w-[350px]">
          <div className="flex justify-center items-center mt-7">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <CardHeader className="flex justify-center items-center ">
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
          {/* // <AlertDialog> */}
          <AlertDialog>
            <Button>
              <AlertDialogTrigger>Hapus Akun</AlertDialogTrigger>
            </Button>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Apakah anda yakin akan menghapus akun anda?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {/* ======================= */}
        </Card>
      </div>
      <Footer />
    </>
  );
}
export default Page;
