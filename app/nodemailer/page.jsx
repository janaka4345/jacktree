// "use client";

// import { useRef } from "react";
import { revalidatePath } from "next/cache";
import ButtonTest from "./ButtonTest";
import Form from "./Form";
const todos = ["clean up store"];
// import nodemailer from "nodemailer";
export default function page() {
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.resend.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: "resend",
  //     pass: process.env.RESEND_API,
  //   },
  //   tls: {
  //     // must provide server name, otherwise TLS certificate check will fail
  //     servername: "example.com",
  //   },
  // });
  // async function handleClick() {
  //   "use server";
  //   console.log("log from server");
  // }
  async function handleSubmit(todo) {
    "use server";
    // e.preventDefault();
    console.log("hi from serve");
    todos.push(todo);
    revalidatePath("/");
  }
  return (
    <div>
      <h1>nodemailer server page</h1>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <Form submit={handleSubmit} />
    </div>
  );
}
