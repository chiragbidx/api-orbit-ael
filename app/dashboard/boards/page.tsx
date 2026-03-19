import { Button } from "@/components/ui/button";

export default function BoardsPage() {
  return (
    <div className="max-w-2xl mx-auto py-14 space-y-8">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl">Boards</h1>
        <p className="text-muted-foreground mt-2">Visualize and organize work with boards.</p>
      </div>
      <div className="rounded-lg border bg-muted/30 px-8 py-12 text-center space-y-2">
        <p className="text-lg text-muted-foreground">No boards yet. Create a board to begin organizing tasks.</p>
        <Button className="mt-4">New Board</Button>
      </div>
    </div>
  );
}