"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type KanbanCard = {
  id: string;
  title: string;
  description?: string;
  assignee?: string;
};

type KanbanColumn = {
  id: string;
  title: string;
  cards: KanbanCard[];
};

const demoColumns: KanbanColumn[] = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      {
        id: "1",
        title: "Design homepage mockup",
        description: "Create initial Hero and Features sections.",
        assignee: "Alice",
      },
      {
        id: "2",
        title: "Setup authentication",
        description: "Implement email & password login.",
        assignee: "Bob",
      },
    ],
  },
  {
    id: "inprogress",
    title: "In Progress",
    cards: [
      {
        id: "3",
        title: "Create Kanban board component",
        description: "Build UI and wire up demo data.",
        assignee: "Charlie",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      {
        id: "4",
        title: "Project kickoff",
        description: "Defined project vision and roadmap.",
        assignee: "Adan",
      },
    ],
  },
];

export default function KanbanBoard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">Kanban Board</h1>
        <Button size="sm">New Issue</Button>
      </div>
      <div className="flex gap-6 overflow-auto pb-4">
        {demoColumns.map((column) => (
          <div
            key={column.id}
            className="flex-1 min-w-[280px] max-w-[320px] flex-shrink-0"
          >
            <Card className="mb-3 px-4 py-3 bg-muted/40 border-2 border-card relative">
              <div className="font-semibold mb-2 flex items-center justify-between">
                {column.title}
                <span className="text-xs bg-background/40 px-2 py-0.5 rounded font-normal border">{column.cards.length}</span>
              </div>
              <div className="space-y-3">
                {column.cards.map((card) => (
                  <div
                    key={card.id}
                    className="bg-background border rounded p-3 shadow-sm hover:bg-muted transition-all"
                  >
                    <div className="font-medium text-base">{card.title}</div>
                    {card.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {card.description}
                      </div>
                    )}
                    {card.assignee && (
                      <div className="text-xs text-primary mt-2">Assigned: {card.assignee}</div>
                    )}
                  </div>
                ))}
                {column.cards.length === 0 && (
                  <div className="text-sm text-muted-foreground py-10 text-center">
                    No cards yet.
                  </div>
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}