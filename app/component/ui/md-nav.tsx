import Link from "next/link";
import { DropdownMenuCheckboxes } from "./navdropdown";

export function MdSmNavbar() {
  return (
    <div className=" flex items-center justify-between mx-5 lg:hidden">
      <div className="">
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
      </div>
      <div className="">
        <DropdownMenuCheckboxes />
      </div>
    </div>
  );
}
