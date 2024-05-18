import Link from "next/link";
import { DropdownMenuCheckboxes } from "./navdropdown";

export function Navbar() {
  return (
    <div className="">
      <div className="hidden lg:flex items-center gap-5 justify-between px-5 bg-[#27272a] py-2 rounded-xl border border-[#36363b]">
        <Link href="/">
          <div className=" flex items-center gap-3">
            <img
              className="rounded-full w-14 border-4 border-[#62626b]"
              src="https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-1/438205394_1168651504317448_1342600203547611987_n.jpg?stp=dst-jpg_p148x148&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8ydvZhtTHAiO3EQ1kezWiTH91wYvcvytMf3XBi9y_K-dprcgeMxyqgplh2MKrb9TBsb9ok3nvpZu2tbu6GPNN&_nc_ohc=j8e3zFkC0JMQ7kNvgHVlABR&_nc_ht=scontent.fbkk22-7.fna&oh=00_AYC2507Qyk1qUUtExPsYJffDF5Z5IbkhjfSNGaI-yfQw9Q&oe=6645456B"
              alt=""
            />

            <h1 className=" text-lg font-bold">Hein Thiha</h1>
          </div>{" "}
        </Link>
        <div className=" flex gap-10 text-sm font-normal">
          <Link href="/hein" className="hover:font-semibold">
            About
          </Link>
          <Link href="" className="hover:font-semibold">
            Projects
          </Link>
          <Link href="#" className="hover:font-semibold">
            Contributions
          </Link>
          <Link href="#" className="hover:font-semibold">
            Blogs
          </Link>
          <Link href="#" className="hover:font-semibold">
            Events
          </Link>
        </div>
        <div className="">
          <button className=" hover:bg-[#373e48] bg-[#30353b] px-5 py-2 rounded-lg font-semibold border border-[#3d434b]">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
