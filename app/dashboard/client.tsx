"use client";

import { Button } from "@/components/ui/button";

type ClientProps = {
  greeting?: string;
  firstName?: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Welcome to TaskPilot</h1>
        <p className="text-muted-foreground text-md mb-4">
          Get started by creating your first project board or tracking issues.
        </p>
        <div className="flex gap-2 flex-wrap">
          <Button asChild>
            <a href="/dashboard/boards">New Board</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/dashboard/issues">New Issue</a>
          </Button>
        </div>
      </section>
      <section className="rounded-xl border bg-background/80 p-8 mt-12 flex flex-col items-center">
        <p className="text-lg text-muted-foreground text-center">
          Invite teammates to collaborate on TaskPilot.
        </p>
        <Button asChild className="mt-4">
          <a href="/dashboard/team">Invite Team</a>
        </Button>
      </section>
    </div>
  );
}