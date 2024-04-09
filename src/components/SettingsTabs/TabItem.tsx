"use client";

import { Trigger } from "@radix-ui/react-tabs";

import { motion } from "framer-motion";

type TabItems = {
  value: string;
  title: string;
  isSelected?: boolean;
};

export function TabItem({ title, value, isSelected = false }: TabItems) {
  return (
    <>
      <Trigger
        value={value}
        className=":px-1 group relative pb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400 outline-none hover:text-violet-700 dark:hover:text-violet-300 data-[state=active]:text-violet-700 dark:data-[state=active]:text-violet-300"
      >
        <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
          {title}
        </span>
        {isSelected && (
          <>
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300"
            ></motion.div>
          </>
        )}
      </Trigger>
    </>
  );
}
