"use client";
import { trpc } from "@/trpc/client";
import React, { useEffect } from "react";

export default function page() {
  const data = trpc.authRouter.createUser.useMutation();
  // useEffect(() => {
  //   data.mutate();
  // }, []);

  // data.mutate();
  return (
    <div>
      <button onClick={() => data.mutate()}>click</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {console.log({ d: "fdsf", hj: "dgfgf" })}
    </div>
  );
}
