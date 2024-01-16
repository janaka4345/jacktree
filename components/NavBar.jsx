import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { NavItems } from "./NavItems";

export default function NavBar() {
  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 bg-background">
      <header className="relative bg-background">
        <MaxWidthWrapper>
          <div className="border-b border-border ">
            <div className="flex h-16 items-center ">
              {/* TODO mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                {/*TODO logo */}
                <Link href="./">{<Icons.logo />}</Link>
              </div>
              <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
