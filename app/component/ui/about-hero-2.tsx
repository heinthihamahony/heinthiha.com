import Link from "next/link";
import { DropdownMenuCheckboxes } from "./navdropdown";
import { SocialMediaIcon } from "./socialmedia-icon";

export function Abouthero2() {
  return (
    <div className="gap-7 md:hidden">
      <div className="">
        <img
          className=" rounded-2xl mb-3"
          src="https://avatars.githubusercontent.com/u/145444401?v=4"
          alt=""
        />
        <SocialMediaIcon />
      </div>
      <div className=" mt-10">
        <h1 className=" md:text-5xl text-3xl font-semibold">
          Hey! I'm <span className="text-[#06b6d4]">Hein Thiha</span> and I'm a
          Front-end Developer.
        </h1>
        <p className=" text-[#a1a1aa]  my-10 ">
          I've been obsessed with technology ever since I was a kid. When I
          wasn't taking apart my family's computer (sorry, mom), I was teaching
          myself how to code. Fast forward a few years, and now I'm a
          full-fledged code ninja with an insatiable thirst for creating
          beautiful websites and functional applications.
        </p>
      </div>
    </div>
  );
}
