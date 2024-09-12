"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Mic,
  Search,
  ShoppingCart,
  User,
  HelpCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthDialog } from "./AuthDialog";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [authDialogType, setAuthDialogType] = useState("login");

  const openLoginDialog = () => {
    setAuthDialogType("login");
    setIsAuthDialogOpen(true);
  };

  return (
    <>
      <div className="bg-primary text-white py-2 text-center">
        Welcome to worldwide Steeze & Needle
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img
              src="/steeze-and-needle-logo.png"
              alt="Logo"
              className="h-8 md:h-10"
            />
            <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
              <div className="relative w-full max-w-md">
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-10 py-2 w-full rounded-full"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Mic
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsSearchVisible(!isSearchVisible)}
              >
                <Search size={24} />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <span className="hidden md:inline">Account</span>
                    <User className="md:hidden" size={24} />
                    <ChevronDown size={16} className="hidden md:inline" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuItem onSelect={openLoginDialog}>
                    <Button className="w-full justify-start">Login</Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>As a Seller</DropdownMenuItem>
                  <DropdownMenuItem>As a Tailor</DropdownMenuItem>
                  <DropdownMenuItem>As an Affiliate</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" className="hidden md:flex">
                Help
              </Button>
              <Button variant="ghost" className="hidden">
                <HelpCircle size={24} />
              </Button>
              <Button variant="ghost" className="relative">
                <ShoppingCart size={24} />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  3
                </span>
              </Button>
            </div>
          </div>
          {isSearchVisible && (
            <div className="mt-4 md:hidden relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-10 py-2 w-full rounded-full"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Mic
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                size={18}
              />
            </div>
          )}
        </div>
      </header>
      <AuthDialog
        isOpen={isAuthDialogOpen}
        onOpenChange={setIsAuthDialogOpen}
        initialView={authDialogType}
      />
    </>
  );
};

export default Header;
