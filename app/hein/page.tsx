import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import Apptab from "../component/ui/tapcomponent";
import App from "../component/ui/tapcomponent";
import Tapcomponent from "../component/ui/tapcomponent";
import { CardHoverEffectDemo } from "../component/ui/card-effect";
import { CardHoverEffectDemo2 } from "../component/ui/open-source-main";
import { SocialMediaIcon } from "../component/ui/socialmedia-icon";
import { ClickBoxIcon } from "../component/ui/clickbox";
import { TimeLine } from "../component/ui/time-line-ui";
import { Navbar } from "../component/ui/navbar";
import { MdSmNavbar } from "../component/ui/md-nav";
import { Abouthero2 } from "../component/ui/about-hero-2";
import { Abouthero } from "../component/ui/about-hero";
import { SocialMediaIcon2 } from "../component/ui/socialmedia-icon-2";

export default function About() {
  return (
    <div className="bg-[#18181b] text-white ">
      <div className="lg:mx-60 md:mx-10 py-10">
        <MdSmNavbar />
        <Navbar />

        <div className=" mt-32 mx-5">
          <Abouthero />
          <Abouthero2 />

          <p className=" text-[#a1a1aa] mb-10 ">
            When I'm not busy slaying bugs and writing code, I'm usually busy
            indulging in my two favorite hobbies: hot sauce and dad jokes. I
            firmly believe that a good laugh and a dash of hot sauce can fix
            just about anything, including bugs in my code (okay, maybe not that
            last part).
          </p>
          <p className=" text-[#a1a1aa] mb-6">
            Here's a timeline of what I've been upto
          </p>
        </div>
        <div className=" mx-3">
          <TimeLine />
        </div>
      </div>
      <footer className=" py-24">
        <a href="/" className="">
          <div className=" flex items-center justify-center gap-3">
            <img
              className="rounded-full w-8"
              src="https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-1/438205394_1168651504317448_1342600203547611987_n.jpg?stp=dst-jpg_p148x148&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8ydvZhtTHAiO3EQ1kezWiTH91wYvcvytMf3XBi9y_K-dprcgeMxyqgplh2MKrb9TBsb9ok3nvpZu2tbu6GPNN&_nc_ohc=j8e3zFkC0JMQ7kNvgHVlABR&_nc_ht=scontent.fbkk22-7.fna&oh=00_AYC2507Qyk1qUUtExPsYJffDF5Z5IbkhjfSNGaI-yfQw9Q&oe=6645456B"
              alt=""
            />

            <h1 className=" text-lg font-bold">Hein Thiha</h1>
          </div>{" "}
        </a>
        <div className=" flex gap-5 text-sm justify-center my-6 text-[#a1a1aa]">
          <a href="/hein">About</a>
          <a href="#">Projects</a>
          <a href="#">Contributions</a>
          <a href="#">Blogs</a>
          <a href="#">Events</a>
        </div>
        <p className="text-sm border-t border-t-[#27272a] max-w-96 mx-auto text-center py-4 text-[#a1a1aa]">
          © 2024 Devpro Portfolio Template. All rights reserved.
        </p>
        <SocialMediaIcon2 />
      </footer>
    </div>
  );
}
