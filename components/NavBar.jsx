import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { NavItems } from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

export default function NavBar() {
  const user=null
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
              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {user ? null : (
                    <>
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Sign in
                    </Link>
                    <span
                      className='h-6 w-px bg-border'
                      aria-hidden='true'
                    />
                    </>

                    
                  )}
                  {user ? (
                    // <UserAccountNav user={user} />
                    null
                  ) : (
                    <>
                    <Link
                      href='/sign-up'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Create account
                    </Link>
                    <span
                      className='h-6 w-px bg-border'
                      aria-hidden='true'
                    />
                    </>
                  )}
                 
                  <div className='ml-4 flow-root lg:ml-6'>
                    <Cart /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
