"use client";

import Image from "next/image";
// import { Tabs } from "./ui/tabs";
// import { tabs } from "@/data"; // Import the data from data/index.ts
import { Tabs } from "./ui/tabs";
import { tabs } from "@/data/index";

export function TabsDemo() {
  return (
    <div className="h-[20rem] bg-[#f4f2ef] text-xl sm:h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-10 sm:my-16 md:my-20">
      <Tabs tabs={tabs.map(tab => ({
        ...tab,
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-6 md:p-10 text-lg sm:text-xl md:text-4xl font-bold text-[#2F3636] ">
            <Image
              src={tab.image}
              alt={tab.title}
              width="1000"
              height="1000"
              className="object-cover object-left-top h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto border-gray-300 border-8 m-12"
            />
          </div>
        )
      }))} />
    </div>
  );
}
