"use server";

import { db } from "@/lib/db/client";
import { issues } from "@/lib/db/schema";
import { z } from "zod";
import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

// Create Issue
const CreateIssueSchema = z.object({
  title: z.string().min(1, "Issue title is required"),
  description: z.string().optional(),
  projectId: z.string().min(1),
  columnId: z.string().min(1),
});

export async function createIssueAction(data: any) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const userId = session.userId;
  const parsed = CreateIssueSchema.safeParse(data);
  if (!parsed.success) throw new Error(parsed.error.message);
  const { title, description, projectId, columnId } = parsed.data;

  const created = await db
    .insert(issues)
    .values({
      title,
      description: description || "",
      projectId,
      columnId,
      createdBy: userId,
    })
    .returning();

  return created[0];
}