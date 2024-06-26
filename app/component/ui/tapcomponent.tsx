"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Switch } from "@nextui-org/react";
import { AppleIcon } from "./appleicon";
import { GoogleIcon } from "./googleicon";
import { MicrosoftIcon } from "./microsofticon";
import { NetflixIcon } from "./netflixIcon";

export default function Tapcomponent() {
  const [isVertical, setIsVertical] = React.useState(true);
  return (
    <div className="hidden lg:flex md:flex">
      <div className="">
        <Tabs
          className=""
          aria-label="Options"
          isVertical={isVertical}
          classNames={{
            tabList: "bg-[#18181b]",
            cursor: "w-full !bg-[#323236]",
            tab: "max-w-fit px-0 h-12 hover:bg-[#27272a]",
            tabContent: "group-data-[selected=true]:text-[]",
          }}
        >
          <Tab
            key="apple"
            className=""
            title={
              <div className="flex items-center justify-start space-x-2 text-left px-6">
                <AppleIcon />
                <span className=" text-[#a1a1aa] ">Apple</span>
              </div>
            }
          >
            <div className=" text-[#a1a1aa] space-y-2">
              <h1 className="text-2xl font-semibold text-white">
                Senior Software Engineer{" "}
                <span className="text-[#06b6d4]">@ Apple</span>
              </h1>
              <div className="text-sm space-y-2 ">
                <p className=" py-2">Jan 2021 - Jun 2021</p>
                <p>Cupertino, CA</p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Worked on the Apple Music team
                </p>
                <p className=" flex items-center gap-2 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Increased the revenue of the company from $80 billion to $1
                  Trillion
                </p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Built a new feature that allowed users to listen to music
                  while they were sleeping
                </p>
              </div>
            </div>
          </Tab>
          <Tab
            key="google"
            className=""
            title={
              <div className="flex items-center justify-center space-x-2 px-5">
                <GoogleIcon />
                <span className=" text-[#a1a1aa]">Google</span>
              </div>
            }
          >
            <div className=" text-[#a1a1aa] space-y-2">
              <h1 className="text-2xl font-semibold text-white">
                Senior Software Engineer{" "}
                <span className="text-[#06b6d4]">@ Google</span>
              </h1>
              <div className="text-sm space-y-2">
                <p className="py-2">Jan 2021 - Jun 2021</p>
                <p>Mountain View, CA</p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Worked on the Google Maps team
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Helped people get lost from point A to point B in shortest
                  time
                </p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Worked directly with Dijkstra to build the shortest path
                  algorithm - but better.
                </p>
              </div>
            </div>
          </Tab>
          <Tab
            key="microsoft"
            className=""
            title={
              <div className="flex items-center justify-center space-x-2 px-3">
                <MicrosoftIcon />
                <span className=" text-[#a1a1aa]">Microsoft</span>
              </div>
            }
          >
            <div className=" text-[#a1a1aa] space-y-2">
              <h1 className="text-2xl font-semibold text-white">
                Senior Software Engineer{" "}
                <span className="text-[#06b6d4]">@ Google</span>
              </h1>
              <div className="text-sm space-y-2">
                <p className="py-2">Jan 2021 - Jun 2021</p>
                <p>Redmond, WA</p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Worked on the Microsoft Teams team
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Carefully crafted the tune that plays when you are on a call
                  with your boss
                </p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Built a new feature that allowed users to mute their mic with
                  a single click
                </p>
              </div>
            </div>
          </Tab>
          <Tab
            key="netflix"
            className=""
            title={
              <div className="flex items-center justify-center space-x-2 px-6">
                <NetflixIcon />
                <span className=" text-[#a1a1aa]">Netflix</span>
              </div>
            }
          >
            <div className=" text-[#a1a1aa] space-y-2">
              <h1 className="text-2xl font-semibold text-white">
                Software Engineer Intern
                <span className="text-[#06b6d4]"> @ Netflix</span>
              </h1>
              <div className="text-sm space-y-2">
                <p className="py-2">Jan 2021 - Jun 2021</p>
                <p>Los Gatos, CA</p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Worked on the Netflix team
                </p>
                <p className=" flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Broke the prod on the first day itself
                </p>
                <p className=" flex items-center gap-2 py-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    className="text-cyan-500 mt-[3px] flex-shrink-0"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                  Coined the term Netflix and Chill - which is now used by
                  millions of people
                </p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
