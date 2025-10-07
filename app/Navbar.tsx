"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsFillBugFill } from "react-icons/bs";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex gap-x-9 shadow-2xs h-15 items-center mb-5 px-10">
      <Link href="/" className="flex gap-3 items-center">
        <BsFillBugFill /> IssueTracker
      </Link>
      <ul className="flex gap-x-4">
        {links.map((lnk) => (
          <Link
            className={classNames({
              "text-zinc-900": lnk.href === currentPath,
              "text-zinc-500": lnk.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            key={lnk.href}
            href={lnk.href}
          >
            {lnk.lable}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
