import Link from "next/link";
import React from "react";
import { BsFillBugFill } from "react-icons/bs";

const Navbar = () => {
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex gap-x-9 border-1 h-15 items-center mb-5 px-10">
      <Link href="/" className="flex gap-3 items-center">
        <BsFillBugFill /> IssueTracker
      </Link>
      <ul className="flex gap-x-4">
        {links.map((lnk) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800"
            key="lnk"
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
