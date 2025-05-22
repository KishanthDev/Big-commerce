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
import { DarkModeToggle } from "../header/ModeToggle";
import { categoryIconMap } from "../icons/IconMap";

type NavbarProps = {
  businessName: string;
};

export const Navbar = ({ businessName }: NavbarProps) => {
  const Icon = categoryIconMap[businessName];

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="h-16 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200 dark:border-gray-800"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="flex items-center font-bold text-inherit text-lg">
              {Icon && <Icon className="mr-2 h-5 w-5 text-blue-500" />}
              {businessName}
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        data-testid="desktop-items"
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      />

      <NavbarItem className="hidden sm:flex gap-2">
        <DarkModeToggle />
      </NavbarItem>

      <NavbarContent
        data-testid="mobile-toggle"
        className="sm:hidden basis-1 pl-4"
        justify="end"
      >
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem />
      </NavbarMenu>
    </HeroUINavbar>
  );
};
