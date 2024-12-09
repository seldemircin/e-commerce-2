"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const route = useRouter();

  // Scroll davranışını yönetme
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        // En üste geldiyse her zaman göster
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scroll aşağı -> gizle
        setIsVisible(false);
      } else {
        // Scroll yukarı -> göster
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`text-gray-600 body-font border-b sticky top-0 bg-white z-10 max-lg:p-5 transition-transform duration-700 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-wrap lg:p-5 flex-col lg:flex-row items-center max-lg:space-y-5">
        <div className="justify-between max-lg:w-full flex items-center">
          <Link
            href={"/home"}
            className="flex title-font font-medium items-center text-gray-900 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </Link>

          <Sheet>
            <SheetTrigger>
              {" "}
              <Menu className="hidden max-lg:block" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription className="flex flex-col space-y-4">
                  <div className="border-b flex flex-col space-y-4 pb-4">
                    <Link href={"/docs"}>Docs</Link>
                    <Link href={"/contact"}>Contact</Link>
                  </div>
                  <span className="font-semibold">Categories</span>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="lg:me-auto lg:ms-4 hidden lg:block">
          <NavigationMenuDemo />
        </nav>

        <div className="flex space-x-5 items-center lg:w-1/3 w-full">
          <form
            className="relative grow"
            onSubmit={(e) => {
              if (query.trim()) {
                e.preventDefault();
                route.push(`/products?query=${query}`);
                setQuery("");
              }
            }}
          >
            <Input
              type="text"
              className="border p-1 px-2 rounded-md placeholder:text-light placeholder:text-sm"
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
            />
            <Button
              variant={"link"}
              type="submit"
              className="absolute right-3 top-0 p-0 m-0"
            >
              {" "}
              <Search />
            </Button>
          </form>
          <Link href={"/fav"}>
            <Heart size={18} />
          </Link>{" "}
          <Sheet>
            <SheetTrigger>
              {" "}
              <ShoppingBag size={18} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Card</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/login"}>Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/register"}>Sign Up</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
