import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font mb-10 border-b lg:sticky lg:top-0 bg-white z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row items-center max-lg:space-y-5">
        <Link
          href={"/home"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
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

        <nav className="lg:me-auto lg:ms-4">
          <NavigationMenuDemo />
        </nav>

        <div className="flex space-x-5 items-center lg:w-1/3 w-4/5">
          <form className="relative grow">
            <Input
              type="text"
              className="border p-1 px-2 rounded-md placeholder:text-light placeholder:text-sm"
              placeholder="Search"
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

          <Link href={"/favorites"}>
            <Heart size={18} />
          </Link>
          <Link href={"/cart"}>
            {" "}
            <ShoppingBag size={18} />
          </Link>

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
