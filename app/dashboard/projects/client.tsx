"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { createProjectAction } from "./actions";

export default function ProjectsClient({ projects }: { projects: any[] }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto py-14 space-y-8">
      <div>
        <h1 className="font-bold text-2xl sm:text-3xl">Projects</h1>
        <p className="text-muted-foreground mt-2">All your team’s projects in one place.</p>
      </div>
      <div>
        <Button className="mb-6" variant="outline" onClick={() => setDialogOpen(true)}>
          <PlusCircle className="w-4 h-4 mr-2" /> New Project
        </Button>
      </div>
      <div className="space-y-4">
        {projects.length === 0 ? (
          <div className="rounded-lg border bg-muted/30 px-8 py-12 text-center space-y-2">
            <p className="text-lg text-muted-foreground">No projects yet. Create your first project to get started.</p>
          </div>
        ) : (
          projects.map((p) => (
            <Link
              key={p.id}
              href={`/dashboard/projects/${p.id}`}
              className="block bg-card hover:bg-accent rounded-lg border p-5 transition-colors shadow-sm"
            >
              <div className="font-semibold text-lg">{p.name}</div>
              <div className="text-muted-foreground text-sm mt-1 line-clamp-2">{p.description}</div>
            </Link>
          ))
        )}
      </div>
      {dialogOpen && <NewProjectDialog onClose={() => setDialogOpen(false)} />}
    </div>
  );
}

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

function NewProjectDialog({ onClose }: { onClose: () => void }) {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data: any) {
    setSubmitting(true);
    await createProjectAction(data);
    setSubmitting(false);
    onClose();
    window.location.reload();
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <Input placeholder="Name" {...register("name", { required: true })} />
          {errors.name && (
            <div className="text-destructive text-xs">Project name is required</div>
          )}
          <Input placeholder="Description" {...register("description")} />
          <DialogFooter>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Project"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}