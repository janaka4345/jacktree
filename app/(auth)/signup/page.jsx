"use client";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthCredValidator } from "@/lib/validators/accCredValidators";
import { toast } from "sonner";
import { trpc } from "@/trpc/client";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(AuthCredValidator) });

  const onSubmit = ({ email, password }) => {
    //send data to server
    // console.log(e);
    // toast("Successfully Signed Up");
  };

  const data = trpc.authRouter.userList.useQuery();

  return (
    <MaxWidthWrapper>
      <div className="container relative flex flex-col items-center justify-center pt-20 lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>

            <div className="flex flex-row items-center">
              <h1 className="">Already have an account?</h1>
              <Link
                className={buttonVariants({
                  variant: "link",
                })}
                href="/sign-in">
                Sign-in
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn("focus-visible:ring-blue-500", {
                      "focus-visible:ring-error": errors.email,
                    })}
                    placeholder="you@example.com"
                  />
                  {/* {errors.email && toast(`Error:${errors.email.message}`)} */}
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    className={cn("focus-visible:ring-blue-500", {
                      "focus-visible:ring-error": errors.password,
                    })}
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <Button>Sign up</Button>
              </div>
            </form>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
