"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const suggestions = [
  "wallet men",
  "wallet card",
  "wallet women",
  "wallet insert",
  "wallet chain",
  "wallet phone case",
  "wallet personalized",
  "wallet lanyard",
  "wallet pattern",
  "wallet keychain",
  "wallet for dad",
];

export default function SearchDropdown() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xl mx-auto mt-10">
      <Input
        type="text"
        placeholder="wallet"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // delay to allow item click
        className="pr-10"
      />
      {showDropdown && query.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
          <ScrollArea className="max-h-64">
            <ul className="divide-y divide-gray-100">
              {filtered.map((item, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
                  )}
                  onClick={() => {
                    setQuery(item);
                    setShowDropdown(false);
                  }}
                >
                  {item}
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-4 py-2 text-sm text-gray-500">No results found.</li>
              )}
            </ul>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
