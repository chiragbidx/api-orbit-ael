"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { createIssueAction } from "./actions";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function ProjectBoardClient({ project, columns, board }) {
  const [newIssueCol, setNewIssueCol] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">{project.name}</h1>
          <div className="text-muted-foreground max-w-lg mt-2">{project.description}</div>
        </div>
        <Button variant="outline" asChild>
          <a href="/dashboard/projects">Back to Projects</a>
        </Button>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-cols-fr">
        {columns.map((col) => (
          <div key={col.id} className="flex flex-col bg-muted/40 rounded-xl p-3 border min-h-[400px]">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">{col.name}</span>
              <Button variant="ghost" size="sm" onClick={() => setNewIssueCol(col.id)}>
                <PlusCircle className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              {(board[col.id] ?? []).map((issue) => (
                <Card key={issue.id} className="p-3">
                  <div className="font-medium">{issue.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{issue.description}</div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      {newIssueCol && (
        <NewIssueDialog
          columnId={newIssueCol}
          onClose={() => setNewIssueCol(null)}
          projectId={project.id}
        />
      )}
    </div>
  );
}

import { useRef } from "react";

function NewIssueDialog({ columnId, onClose, projectId }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data: any) {
    setSubmitting(true);
    setError(null);
    try {
      await createIssueAction({
        ...data,
        projectId,
        columnId,
      });
      setSubmitting(false);
      onClose();
      // Use router refresh instead of full reload if possible, else fallback:
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    } catch (e: any) {
      setError(e?.message || "Failed to create issue. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Issue</DialogTitle>
        </DialogHeader>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <Input placeholder="Title" {...register("title", { required: true })} />
          {errors.title && <div className="text-destructive text-xs">Issue title is required</div>}
          <Input placeholder="Description" {...register("description")} />
          {error && <div className="text-destructive text-xs">{error}</div>}
          <DialogFooter>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Issue"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}