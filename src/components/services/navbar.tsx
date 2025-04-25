import {
    Navbar as HeroUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    NavbarItem,
  } from "@heroui/navbar";
  import NextLink from "next/link";
  import { DarkModeToggle } from "../header/ModeToggle";
  
  type NavbarProps = {
    businessName: string;
  };
  
  export const Navbar = ({ businessName }: NavbarProps) => (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="h-16 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit text-lg">{businessName}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
  
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end" />
      <NavbarItem className="hidden sm:flex gap-2">
        <DarkModeToggle />
      </NavbarItem>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
  
      <NavbarMenu>
        <NavbarMenuItem />
      </NavbarMenu>
    </HeroUINavbar>
  );
  