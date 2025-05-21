"use client";

import React from "react";
import { MenuItem, Typography } from "@material-tailwind/react";
import Link from "next/link";

const navListMenuItems = [
  { title: "Products", description: "Find the perfect" },
  { title: "About Us", description: "Meet and learn about" },
  { title: "Blog", description: "Find the perfect" },
];

export default function MenuListComponent({
  isMenuOpen,
}: {
  isMenuOpen?: any;
}) {
  return (
    <div className={`hidden lg:block ${isMenuOpen ? "" : "hidden"}`}>
      <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
        {navListMenuItems.map(({ title, description }, key) => (
          <Link href="/" key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="flex items-center text-sm font-bold "
                >
                  {title}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-xs !font-medium text-blue-gray-500"
                >
                  {description}
                </Typography>
              </div>
            </MenuItem>
          </Link>
        ))}
      </ul>
    </div>
  );
}
