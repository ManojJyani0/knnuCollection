"use client";
import React from "react";
import { Menu, Search, Heart, ShoppingCart } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
type Props = {};
const linkList: string =
  "राजस्थानी-पोशाक कस्टम-डिजाइन पंजाबी-सूट बागड़ी-पोशाक ओढ़ना";
function MainNavbar({}: Props) {
  const router = useRouter();
  function handleNavigation(route: string) {
    router.push(route);
  }
  const path = usePathname()
  const isAuthRoute = path==="/login"||path==="/regester" 
  async function handleLogOut() {
    const response = await fetch("/api/auth/logout");
    const data = await response.json();
    console.log(data)
  }
  return (
    <>
      <nav className="justify-center items-center mx-2 mt-1 border-b-2">
        <div className="navbar-brand flex my-5 justify-between items-center space-x-2">
          {/* { pathName==="/" ? */}

          {/* :<h1>{pathName.split("/").join(" ")}</h1>  
        } */}
          <section className="" onClick={() => console.log("clicked")}>
            <Sheet>
              <SheetTrigger asChild>
                <Menu size={20} />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <div className="flex ">
                    <div className="px-2">
                      <SheetTitle className="text-pink-600 font-Rubik font-bold">
                        Knnu Collection
                      </SheetTitle>
                      <SheetDescription>
                        An Online Store For राजस्थानी पोशाक कस्टम डिजाइन पंजाबी
                        सूट बागड़ी पोशाक & ओढ़ना
                      </SheetDescription>
                    </div>
                  </div>
                </SheetHeader>
                <div className="flex flex-col py-4 justify-start items-start">
                  <h1>Category</h1>

                  {linkList.split(" ").map((str) => (
                    <SheetClose key={str} asChild>
                      <Button
                        type="button"
                        key={str}
                        variant={"link"}
                        onClick={() => router.push(`/category/${str}`)}
                      >
                        {str}
                      </Button>
                    </SheetClose>
                  ))}
                </div>
              <SheetFooter>
                <Button onClick={handleLogOut}>Log Out</Button>
              </SheetFooter>
              </SheetContent>
            </Sheet>
          </section>
          <section className="w-full px-2">
            <h1 className="text-pink-600 text-2xl font-Rubiks font-extrabold  ">
              Knnu Collactions
            </h1>
          </section>
          <section>
            <Heart size={30} className="text-pink-600" onClick={()=>router.push("/favorite")} />
          </section>
          <section>
            <ShoppingCart
              size={30}
              className="text-pink-600"
              onClick={() => router.push("/cart")}
            />
          </section>
        </div>
        {!isAuthRoute && 
        <section className="relative w-full inline-flex justify-center items-center">
          <textarea
            placeholder="search..."
            className="outline-none resize-none w-full px-5 pt-2 text-md placeholder:font-normal bg-muted h-10 items-center rounded-xl placeholder:text-xl"
          />
          <Search className="h-4 w-4 absolute top-3 right-4" />
        </section>}
      </nav>
    </>
  );
}

export default MainNavbar;
