import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function ProductReel(props) {
  const { title, subtitle, href } = props;
  return (
    <section className="bg-slate-400 py-12">
      <div className="mb-4  md:flex  md:items-center md:justify-between">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className="sm:text-3 text-2xl font-bold text-gray-900">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          ) : null}
          {href ? (
            <Link href={href} className={buttonVariants({ variant: "link" })}>
              Shop More
            </Link>
          ) : null}
        </div>
      </div>
      <div className="relative">
        <div className="mt-6 flex w-full items-center">
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-52 w-52 bg-green-500 "></div>
            ))}
            {/* {map.map((product, i) => (
              <ProductListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}
