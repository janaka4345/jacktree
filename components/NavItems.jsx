"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// NavItem;
import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";
export function NavItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {PRODUCT_CATEGORIES.map((category) => {
          return (
            <NavigationMenuItem key={category.value}>
              <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-row gap-3 p-4 md:w-[400px] lg:w-screen lg:max-w-screen-xl ">
                  <NavItem featured={category.featured} />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
