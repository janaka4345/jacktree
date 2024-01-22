"use client";
import { trpc } from "@/trpc/client";
import React from "react";

export default function page() {
  const data = trpc.authRouter.createUser.useMutation();
  data.mutate();
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
