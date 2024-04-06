"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navbarItemLink } from "./menu";

export default function NavbarComponent() {
  const pathname = usePathname();
  if(pathname === "/login" || pathname === "/signup"){
    return null
  }
    return (
      <Navbar className="bg-purple-200">
        <NavbarBrand className="">
          <Image width={100} className="mr-4 rounded-full mt-2" height={100} src={"/assets/image.png"} alt={""} />
          <p className="font-extrabold text-inherit ml-[-70px] text-orange-600 ">-commerce</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navbarItemLink.map((item,index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href={item.path}
              className={`${
                pathname === item.path && "font-bold text-orange-600"
              }`}>{item.title}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/dashboard">Dashboard</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className="text-white bg-orange-500" href="/Login" variant="flat">
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}
