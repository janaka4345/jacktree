import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
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

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="./products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our Promise &rarr;</Button>
        </div>
      </MaxWidthWrapper>
      <section className="border-gray-20 bg-gray-20 border-t">
        <MaxWidthWrapper className="py-20"></MaxWidthWrapper>
      </section>
    </>
  );
}
