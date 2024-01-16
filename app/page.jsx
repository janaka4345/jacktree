import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant  Delivery",
    icon: ArrowDownToLine,
    description: "Get your clothes delivered to you same day.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "All clothing items are made of high quality materials.",
  },
  {
    name: "For the planet",
    icon: Leaf,
    description: "we've pledge zero emission CO2 for the better of humanity ",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        {/* hero section */}
        <div className=" mx-auto flex max-w-3xl flex-col py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-6xl">
            <span className="text-primary">Dress to Impress</span> - Your
            Gateway to Unmatched Elegance and Comfort
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground ">
            Welcome to JackTree – where style meets confidence. Explore our
            curated collection blending the latest trends with timeless
            elegance. Your fashion evolution begins here
          </p>
        </div>
        {/* cta section */}
        <div className=" mb-6 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="./products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our Promise &rarr;</Button>
          {/* TODO - list products */}
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-border bg-background">
        {/* service perks */}
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="flex justify-center  md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground text-primary">
                    {<perk.icon className="h-1/3  w-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 ">
                  <h3 className="text-base font-medium text-foreground">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
