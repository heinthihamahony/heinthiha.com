"use client";
import { HoverEffect } from "../ui/card-hover-effect";
import { OpenSource } from "./open-source";

export function CardHoverEffectDemo2() {
  return (
    <div className="max-w-5xl mx-auto">
      <OpenSource items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "react-code-editor",
    description:
      "💻 Build your own code editor that compiles and runs 40+ programming languages.",
    link: "https://stripe.com",
  },
  {
    title: "simple-developer-portfolio-website",
    description:
      "✈️ A simple portfolio for developers to showcase their skills and projects. Blog and tutorial at fre...",
    link: "https://netflix.com",
  },
  {
    title: "devmedium",
    description:
      "🚀 A Dev.to & Medium like blogging platform with custom usernames in Next.js",
    link: "https://google.com",
  },
  {
    title: "manuarora.in",
    description: "🙌🏻 Personal website built using Next.js & TailwindCSS.",
    link: "https://meta.com",
  },
  {
    title: "sendgrid-contact-form",
    description:
      "✉️ A working contact form integrated with SendGrid for your Nextjs project. Blog live on freeCodeCam...",
    link: "https://amazon.com",
  },
  {
    title: "integrate-payments",
    description:
      "🤑 Integrate payments with Next.js, TailwindCSS, and Razorpay. Blog live on freeCodeCamp 🔥.",
    link: "https://amazon.com",
  },
];
