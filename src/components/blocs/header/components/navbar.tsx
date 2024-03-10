"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { AvatarDropdown, ModeToggle, NavItems } from ".";

export const Navbar = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-primary">The Dentist</h1>
      <NavigationMenu>
        <NavigationMenuList className="w-full gap-2">
          <NavigationMenuItem>{/* <MovieCategory /> */}</NavigationMenuItem>
          <NavigationMenuItem>{/* <SerieCategory /> */}</NavigationMenuItem>
          <NavigationMenuItem>
            <NavItems />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList className="w-full gap-2">
          {/* <SearchDrawer /> */}
          <ModeToggle />
          <AvatarDropdown />
          {/* <SideBar /> */}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
