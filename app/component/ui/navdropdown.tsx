"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className=" bg-[#18181b] border-none hover:bg-[#323236]"
            variant="outline"
          >
            <svg
              className=" w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(161,161,170,1)"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-[#18181b] text-white border border-[#323236]">
          <a href="/hein">
            <DropdownMenuCheckboxItem className=" py-5 border-b border-b-[#323236] rounded-none">
              About
            </DropdownMenuCheckboxItem>
          </a>
          <a href="#">
            <DropdownMenuCheckboxItem className=" py-5 border-b border-b-[#323236] rounded-none">
              Projects
            </DropdownMenuCheckboxItem>
          </a>
          <a href="">
            <DropdownMenuCheckboxItem className=" py-5 border-b border-b-[#323236] rounded-none">
              Contributions
            </DropdownMenuCheckboxItem>
          </a>
          <a href="">
            <DropdownMenuCheckboxItem className=" py-5 border-b border-b-[#323236] rounded-none">
              Blogs
            </DropdownMenuCheckboxItem>
          </a>
          <a href="">
            <DropdownMenuCheckboxItem className=" py-5 border-b border-b-[#323236] rounded-none">
              Events
            </DropdownMenuCheckboxItem>
          </a>
          <a href="">
            <DropdownMenuCheckboxItem className=" py-5 border-b border-b-[#323236] rounded-none">
              Download CV
            </DropdownMenuCheckboxItem>
          </a>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
