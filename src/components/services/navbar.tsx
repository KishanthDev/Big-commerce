import {
    Navbar as HeroUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@heroui/navbar";
import NextLink from "next/link";

type NavbarProps = {
    businessName: string;
  };
  
  export const Navbar = ({ businessName }: NavbarProps) => (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">{businessName}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
  
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end" />
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
  
      <NavbarMenu>
        <NavbarMenuItem />
      </NavbarMenu>
    </HeroUINavbar>
  );
  