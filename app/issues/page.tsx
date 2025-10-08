import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Issues_Page = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default Issues_Page;
