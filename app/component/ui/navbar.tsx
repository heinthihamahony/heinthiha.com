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
              src="https://avatars.githubusercontent.com/u/145444401?v=4"
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
