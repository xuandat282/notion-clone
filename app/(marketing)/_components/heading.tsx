"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plan. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion is an all-in-one workspace where you can write, plan, collaborate
        and get organized - it allows you to take notes, add tasks, manage
        projects & more.
      </h3>
      <Button>
        Enter Notion <ArrowRight />
      </Button>
    </div>
  );
};
