"use client";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import Link from "next/link";
export default function Cart() {

  const items =['short','shirt','frock']
  const itemCount = 5
  const cartTotal = 100

  const fee = 1
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button className=" group relative" variant="cart">
            <ShoppingCart
              aria-hidden="true"
              className=" h-6 w-6 flex-shrink-0 text-primary"
            />
            <span className="sr-only">Shopping Cart</span>
            <Badge
              className=" absolute -end-1 -top-1 z-50 rounded-full"
              variant="custom">
              {itemCount}
            </Badge>
          </Button>
        </SheetTrigger>
        <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              <ScrollArea>
                {items.map(({ product }) => (
                  product
                  // <CartItem
                  //   product={product}
                  //   key={product.id}
                  // />
                ))}
              </ScrollArea>
            </div>
            <div className='space-y-4 pr-6'>
              <Separator />
              <div className='space-y-1.5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>
                    Transaction Fee
                  </span>
                  {/* <span>{formatPrice(fee)}</span> */}
                  <span>{fee}</span>
                </div>
                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>
                    {cartTotal + fee}
                    {/* {formatPrice(cartTotal + fee)} */}
                  </span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href='/cart'
                    className={buttonVariants({
                      className: 'w-full',
                    })}>
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image
                src='/hippo-empty-cart.png'
                fill
                alt='empty shopping cart'
              />
            </div>
            <div className='text-xl font-semibold'>
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                href='/products'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className:
                    'text-sm text-muted-foreground',
                })}>
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
      </Sheet>
    );
}

