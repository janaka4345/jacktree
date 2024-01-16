"use client";

import * as React from "react";
import Link from "next/link";

import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// NavItem;
import { PRODUCT_CATEGORIES } from "@/config";
import NavItem from "./NavItem";
import Image from "next/image";
export function NavItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Latest Arrivals</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-row gap-3 p-4 md:w-[400px] lg:w-[1024px] ">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                      src="/nav/ui-kits/blue.jpg"
                      width={500}
                      height={400}
                    />
                    <h1>Editors pick</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Velit sit beatae assumenda
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                      src="/nav/ui-kits/purple.jpg"
                      width={500}
                      height={400}
                    />
                    <h1>Editors pick</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Velit sit beatae assumenda
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                      src="/nav/ui-kits/mixed.jpg"
                      width={500}
                      height={400}
                    />
                    <h1>Editors pick</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Velit sit beatae assumenda
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="absolute left-0 flex flex-row gap-3 p-4 md:w-[400px] lg:w-[1024px] ">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                      src="/nav/ui-kits/blue.jpg"
                      width={500}
                      height={400}
                    />
                    <h1>Editors pick</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Velit sit beatae assumenda
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                      src="/nav/ui-kits/purple.jpg"
                      width={500}
                      height={400}
                    />
                    <h1>Editors pick</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Velit sit beatae assumenda
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <Image
                      src="/nav/ui-kits/mixed.jpg"
                      width={500}
                      height={400}
                    />
                    <h1>Editors pick</h1>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Velit sit beatae assumenda
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
