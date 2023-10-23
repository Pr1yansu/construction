"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";

const SearchPanel = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Search
        className="text-zinc-500 text-base cursor-pointer"
        size={18}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute top-full left-0 right-0 overflow-hidden translate-y-8 duration-300 `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Command>
              <CommandInput placeholder="Search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Calendar</CommandItem>
                  <CommandItem>Search Emoji</CommandItem>
                  <CommandItem>Calculator</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Billing</CommandItem>
                  <CommandItem>Settings</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchPanel;
