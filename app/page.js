import MaxWidthWrapper from "@/components/MaxWidthWrapper"

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-6xl"><span className="text-primary">Dress to Impress</span> - Your Gateway to Unmatched Elegance and Comfort</h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground ">Welcome to JackTree – where style meets confidence. Explore our curated collection blending the latest trends with timeless elegance.  Your fashion evolution begins here</p>
      </div>
    </MaxWidthWrapper>
  )
}
