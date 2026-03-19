import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto py-14 space-y-8">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl">Projects</h1>
        <p className="text-muted-foreground mt-2">All your team’s projects in one place.</p>
      </div>
      <div className="rounded-lg border bg-muted/30 px-8 py-12 text-center space-y-2">
        <p className="text-lg text-muted-foreground">No projects yet. Create your first project to get started.</p>
        <Button className="mt-4">New Project</Button>
      </div>
    </div>
  );
}