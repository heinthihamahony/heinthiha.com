import Link from "next/link";
import { DropdownMenuCheckboxes } from "./navdropdown";
import { SocialMediaIcon } from "./socialmedia-icon";

export function Abouthero2() {
  return (
    <div className="gap-7 md:hidden">
      <div className="">
        <img
          className=" rounded-2xl mb-3"
          src="https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-1/438205394_1168651504317448_1342600203547611987_n.jpg?stp=dst-jpg_p148x148&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8ydvZhtTHAiO3EQ1kezWiTH91wYvcvytMf3XBi9y_K-dprcgeMxyqgplh2MKrb9TBsb9ok3nvpZu2tbu6GPNN&_nc_ohc=j8e3zFkC0JMQ7kNvgHVlABR&_nc_ht=scontent.fbkk22-7.fna&oh=00_AYC2507Qyk1qUUtExPsYJffDF5Z5IbkhjfSNGaI-yfQw9Q&oe=6645456B"
          alt=""
        />
        <SocialMediaIcon />
      </div>
      <div className=" mt-10">
        <h1 className=" md:text-5xl text-3xl font-semibold">
          Hey! I'm <span className="text-[#06b6d4]">Hein Thiha</span> and I'm a
          full stack soap engineer.
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
