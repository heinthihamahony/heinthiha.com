import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Apptab from "./component/ui/tapcomponent";
import App from "./component/ui/tapcomponent";
import Tapcomponent from "./component/ui/tapcomponent";
import { CardHoverEffectDemo } from "./component/ui/ohh-card-effect";

export default function Home() {
  return (
    <div className="">
      <div className="mx-60 py-10">
        <div className=" flex items-center gap-5 justify-between px-5 bg-[#27272a]  py-2 rounded-xl border border-[#36363b]">
          <a href="#">
            <div className=" flex items-center gap-3">
              <img
                className="rounded-full w-14 border-4 border-[#62626b]"
                src="https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-1/438205394_1168651504317448_1342600203547611987_n.jpg?stp=dst-jpg_p148x148&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8ydvZhtTHAiO3EQ1kezWiTH91wYvcvytMf3XBi9y_K-dprcgeMxyqgplh2MKrb9TBsb9ok3nvpZu2tbu6GPNN&_nc_ohc=j8e3zFkC0JMQ7kNvgHVlABR&_nc_ht=scontent.fbkk22-7.fna&oh=00_AYC2507Qyk1qUUtExPsYJffDF5Z5IbkhjfSNGaI-yfQw9Q&oe=6645456B"
                alt=""
              />

              <h1 className=" text-lg font-bold">Hein Thiha</h1>
            </div>{" "}
          </a>
          <div className=" flex gap-10 text-sm font-normal">
            <a href="#" className="hover:font-semibold">
              About
            </a>
            <a href="#" className="hover:font-semibold">
              Projects
            </a>
            <a href="#" className="hover:font-semibold">
              Contributions
            </a>
            <a href="#" className="hover:font-semibold">
              Blogs
            </a>
            <a href="#" className="hover:font-semibold">
              Events
            </a>
          </div>
          <div className="">
            <button className=" hover:bg-[#373e48] bg-[#30353b] px-5 py-2 rounded-lg font-semibold border border-[#3d434b]">
              Download CV
            </button>
          </div>
        </div>

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
      <div className=" grid grid-cols-3 mx-60 gap-14"></div>
      <CardHoverEffectDemo />
    </div>
  );
}
