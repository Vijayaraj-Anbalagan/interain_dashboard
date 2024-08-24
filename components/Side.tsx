"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TickPlacementBars from "./Graph/TickPlacementBars";
import GridDemo from "./Graph/GridDemo";
import { PieChart } from '@mui/x-charts/PieChart';
import { Avatar } from "@mui/material";
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-500 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-right dark:bg-neutral-800 w-screen flex-1 mx-auto border border-neutral-200 dark:border-neutral-700",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "College Name",
                href: "#",
                icon: (
                  <Image
                    src=""
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black whitespace-pre"
      >
        Interain
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

const Dashboard = () => {
  let top4 = ["Active Sessions", "Engagement Level", "Progression Level"];
  let student = {
    img: "",
    name: "Ayush Kaul",
    dept: "CSE",
    year: "2025"
  }
  return (
    <div className="flex flex-1 text-black box-border flex-col">
      <div className="p-4 border bg-gray-200 flex flex-col gap-3 flex-1 w-full h-full">
        <div className="w-full rounded-full bg-right p-1 flex items-center gap-5 shadow-md">
          <Avatar alt={student.name} src={student.img} className="mr-8" />
          <div>{student.name}</div>
          <div>{student.dept}</div>
          <div>{student.year}</div>
        </div>
        <div className="flex gap-3">
          {top4.map((heading, i) => (
            <div key={"first-array" + i} className="h-32 w-full rounded-lg bg-right p-3 shadow-md">
              <h3>{heading}</h3>
            </div>
          ))}
        </div>
        {/* Content of Graphs goes here */}
        <div className="flex gap-3 flex-1">
          {/* 2 Pie Charts*/}
          <div className="flex gap-3 h-full w-1/5 flex-col">
            <div className="flex-1 rounded-lg bg-right p-3 h-full shadow-md">
              Time Allocation Breakdown
              <div className="h-48">
                <PieChart
                  colors={['#5356FF', '#378CE7', '#67C6E3', '#98ABEE']}
                  series={[
                    {
                      data: [
                        { id: 0, value: 10 },
                        { id: 1, value: 15 },
                        { id: 2, value: 20 },
                        { id: 3, value: 20 },
                      ],
                      innerRadius: 30,
                      outerRadius: 60,
                      paddingAngle: 4,
                      cornerRadius: 5,
                      startAngle: 0,
                      endAngle: 360,
                      cx: 120
                    }
                  ]}
                />
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-right p-3 shadow-md">
              Pie Chart 2
              <div className="h-48">
                <PieChart
                  colors={['#5356FF', '#378CE7', '#67C6E3', '#98ABEE ']}
                  series={[
                    {
                      data: [
                        { id: 0, value: 10 },
                        { id: 1, value: 15 },
                        { id: 2, value: 20 },
                      ],
                      innerRadius: 30,
                      outerRadius: 60,
                      paddingAngle: 4,
                      cornerRadius: 5,
                      startAngle: 0,
                      endAngle: 360,
                      cx: 120
                    }
                  ]}
                />
              </div>
            </div>
          </div>
          {/* 4 bar Graph */}
          <div className="flex gap-3 h-full w-4/5 flex-[4] flex-wrap">
            <div className="w-[49.3%] rounded-lg bg-right p-3 shadow-md">
              Interaction Frequency with Interbot
              <TickPlacementBars />
            </div>
            <div className="w-[49.3%] rounded-lg bg-right p-3 shadow-md">
              Interaction Frequency with Commbot
              <TickPlacementBars />
            </div>
            <div className="w-[49.3%] rounded-lg bg-right p-3 shadow-md">
              General graph
              <GridDemo />
            </div>
            <div className="w-[49.3%] rounded-lg bg-right p-3 shadow-md">
              <div className="flex gap-4 mb-4">
                Summarization
                <AutoAwesomeSharpIcon />
              </div>
              <div className="text-gray-700 text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iste corporis natus quos odio. Fugiat adipisci omnis id architecto! Possimus, provident quasi. Ex suscipit maiores exercitationem, delectus nulla voluptatibus quasi veniam ut cum eum numquam similique facere voluptate porro nam eveniet dolores nesciunt dolor totam consequuntur modi tenetur debitis possimus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio qui vel voluptates officia, quia ad cum nihil</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
