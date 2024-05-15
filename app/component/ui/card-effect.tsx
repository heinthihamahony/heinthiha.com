"use client";
import { HoverEffect } from "./card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image:
      "https://devpro-aceternity.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Falgochurn.png&w=3840&q=75",
    title: "Algochurn",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "https://stripe.com",
  },
  {
    image:
      "https://devpro-aceternity.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Faceternity.png&w=3840&q=75",
    title: "Aceternity",
    description:
      "A web design and development agency that gets the job done. Somehow.",
    link: "https://netflix.com",
  },
  {
    image:
      "https://devpro-aceternity.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Ftailwindmasterkit.png&w=3840&q=75",
    title: "Tailwind Master Kit",
    description:
      "Buy premium tailwind components and templates for your next project.",
    link: "https://google.com",
  },
  {
    image:
      "https://devpro-aceternity.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fboxshadows.png&w=3840&q=75",
    title: "Box Shadows",
    description:
      "Copy and paste beautiful box shadows that stand out for your next project.",
    link: "https://meta.com",
  },
  {
    image:
      "https://devpro-aceternity.vercel.app/_next/image?url=%2Fimages%2Fprojects%2Fplaceholdertech.png&w=3840&q=75",
    title: "PlaceholderTech",
    description:
      "Your one-stop shop for web app needs tailored to your requirements.",
    link: "https://amazon.com",
  },
];
