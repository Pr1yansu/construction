"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const NavigationMenus = [
    {
      link: "/",
      label: "Home",
      active: pathname === "/" ? true : false,
    },
    {
      link: "/about",
      label: "About Us",
      active: pathname === "/about" ? true : false,
    },
    {
      link: "/services",
      label: "Services",
      active: pathname === "/services" ? true : false,
    },
    {
      link: "/work",
      label: "Work",
      active: pathname === "/work" ? true : false,
    },
    {
      link: "/contact",
      label: "Contact Us",
      active: pathname === "/contact" ? true : false,
    },
  ];
  return (
    <>
      <div className="max-md:hidden">
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            {NavigationMenus.map((menu, i) => {
              return (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink
                    href={menu.link}
                    className={cn(
                      "text-sm hover:text-zinc-900 transition-colors",
                      menu.active ? "text-zinc-900" : "text-zinc-500"
                    )}
                  >
                    {menu.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="w-60">
          <SheetHeader>
            <NavigationMenu>
              <NavigationMenuList className="block space-x-0 space-y-1">
                {NavigationMenus.map((menu, i) => {
                  return (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuLink
                        href={menu.link}
                        className={cn(
                          "text-base hover:text-zinc-900 transition-colors",
                          menu.active ? "text-zinc-900" : "text-zinc-500"
                        )}
                      >
                        {menu.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
