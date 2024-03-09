import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>test</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link href="/">Link</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer> */}
    </>
  );
};
