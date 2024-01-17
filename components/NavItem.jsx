"use client";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
const NavItem = ({ className, featured, ...props }) => {
  return featured.map((item) => (
    <li key={item.name}>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}>
          <Image src={item.imageSrc} width={500} height={400} alt={item.name} />
          <h1 className="text-sm font-medium leading-none">{item.name}</h1>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  ));
};
export default NavItem;
