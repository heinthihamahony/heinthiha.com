import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Apptab from "./component/ui/tapcomponent";
import App from "./component/ui/tapcomponent";
import Tapcomponent from "./component/ui/tapcomponent";
import { CardHoverEffectDemo } from "./component/ui/card-effect";
import { CardHoverEffectDemo2 } from "./component/ui/open-source-main";
import { SocialMediaIcon } from "./component/ui/socialmedia-icon";
import Link from "next/link";
import { Navbar } from "./component/ui/navbar";

export default function Home() {
  return (
    <div className="">
      <div className="mx-60 py-10">
        <Navbar />
        <div className=" mt-32">
          <h1 className=" text-5xl font-semibold">
            I'm a software engineer that <br /> rarely{" "}
            <span className=" text-[#06b6d4]">writes code.</span>
          </h1>
          <p className=" text-[#a1a1aa]  my-10">
            Meet Manu Arora, the self-proclaimed code wizard who can turn
            caffeine into beautiful <br /> websites. His passion for building
            clean and functional designs is only rivaled by his <br /> passion
            for finding the perfect GIF to express his excitement.
          </p>
          <p className=" text-[#a1a1aa]">
            Building{" "}
            <a href="#" className=" text-white font-semibold">
              Algochurn
            </a>{" "}
            and{" "}
            <a href="#" className=" text-white font-semibold">
              Aceternity
            </a>{" "}
            when I'm not working on my day job.
          </p>
        </div>
        <div className=" mt-32 mb-10">
          <h1 className="text-3xl font-semibold">Work Experience</h1>
          <p className="text-[#a1a1aa] mt-5 ">
            I switch a lot of companies. It's mostly about the culture.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto border-l border-l-[#27272a] pl-8">
        <Tapcomponent />
      </div>
      <div className="mx-60 mt-36">
        <p className="text-3xl font-semibold">
          I've been building a lot of things
        </p>
        <CardHoverEffectDemo />
      </div>
      <div className="mx-60 mt-36">
        <p className="text-3xl font-semibold">
          Latest contributions to open source
        </p>
        <CardHoverEffectDemo2 />
      </div>
      <div className="mx-56 flex gap-6 mt-20">
        <div className="">
          <div className="  hover:bg-[#27272a] p-10 rounded-2xl">
            <a href="#" className=" ">
              <p className="text-[#a1a1aa] text-xs border-l border-l-[#3f3f46] py-1 px-4">
                November 28, 2022
              </p>
              <p className="font-bold my-5">What is a website template</p>
              <p className=" text-sm">
                A website template is a pre-designed website that can be
                customized to suit your needs. In this post, we’ll take a look
                at what a website template is and why it can be a great creative
                outlet for writers
              </p>
              <p className="text-[#06b6d4] text-sm pt-5">Read More</p>
            </a>
          </div>
          <div className=" hover:bg-[#27272a] p-10 rounded-2xl">
            <a href="#" className=" ">
              <p className="text-[#a1a1aa] text-xs border-l border-l-[#3f3f46] py-1 px-4">
                November 28, 2022
              </p>
              <p className="font-bold my-5">What is a website template</p>
              <p className=" text-sm">
                A website template is a pre-designed website that can be
                customized to suit your needs. In this post, we’ll take a look
                at what a website template is and why it can be a great creative
                outlet for writers
              </p>
              <p className="text-[#06b6d4] text-sm pt-5">Read More</p>
            </a>
          </div>
        </div>
        <div className="">
          <div className="">
            <p className="font-bold">Uses</p>
            <p className="font-bold mt-5 mb-2">16 Inch M2 MacBook Pro</p>
            <p className="text-sm text-[#a1a1aa]">
              My main machine for development that I've been using for over 6
              months now. Such a beast of a machine. I love it.
            </p>
          </div>
          <div className="">
            <p className="font-bold mt-8 mb-2">iPad Pro 12.9</p>
            <p className="text-sm text-[#a1a1aa]">
              Overrated in my opinion. I use it for reading books and watching
              movies. I don't use it for development.
            </p>
          </div>
          <div className="">
            <p className="font-bold mt-8 mb-2">Keychron K2</p>
            <p className="text-sm text-[#a1a1aa]">
              My main keyboard for development. I love the clicky keys and the
              compact size. I use it with a Logitech MX Master 3 mouse.
            </p>
          </div>
          <div className="">
            <p className="font-bold mt-8 mb-2">Logitech MX Master 3</p>
            <p className="text-sm text-[#a1a1aa]">
              My main mouse for development. I love the scroll wheel and the
              thumb buttons. I use it with a Keychron K2 keyboard.
            </p>
          </div>
        </div>
      </div>
      <footer className=" pb-24">
        <a href="#" className="">
          <div className=" flex items-center justify-center gap-3">
            <img
              className="rounded-full w-8"
              src="https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-1/438205394_1168651504317448_1342600203547611987_n.jpg?stp=dst-jpg_p148x148&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8ydvZhtTHAiO3EQ1kezWiTH91wYvcvytMf3XBi9y_K-dprcgeMxyqgplh2MKrb9TBsb9ok3nvpZu2tbu6GPNN&_nc_ohc=j8e3zFkC0JMQ7kNvgHVlABR&_nc_ht=scontent.fbkk22-7.fna&oh=00_AYC2507Qyk1qUUtExPsYJffDF5Z5IbkhjfSNGaI-yfQw9Q&oe=6645456B"
              alt=""
            />

            <h1 className=" text-lg font-bold">Hein Thiha</h1>
          </div>{" "}
        </a>
        <div className=" flex gap-5 text-sm justify-center my-6">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contributions</a>
          <a href="#">Blogs</a>
          <a href="#">Events</a>
        </div>
        <p className="text-sm border-t border-t-[#27272a] max-w-96 mx-auto text-center py-4">
          © 2024 Devpro Portfolio Template. All rights reserved.
        </p>
        <SocialMediaIcon />
      </footer>
    </div>
  );
}
