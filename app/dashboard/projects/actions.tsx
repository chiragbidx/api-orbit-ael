"use server";

import { db } from "@/lib/db/client";
import { projects } from "@/lib/db/schema";
import { z } from "zod";
import { getAuthSession } from "@/lib/auth/session";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

// Create Project
const CreateProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().optional(),
});

export async function createProjectAction(data: any) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const userId = session.userId;

  // Assume user's first team for now (multi-team to be expanded)
  const teamIdObj = await db.query.teamMembers.findFirst({
    where: (tm, { eq }) => eq(tm.userId, userId),
    columns: { teamId: true },
  });

  if (!teamIdObj) throw new Error("User is not in a team.");

  const teamId = teamIdObj.teamId;

  const parsed = CreateProjectSchema.safeParse(data);
  if (!parsed.success) throw new Error(parsed.error.message);
  const { name, description } = parsed.data;

  const created = await db
    .insert(projects)
    .values({
      name,
      description: description || "",
      teamId,
      createdBy: userId,
    })
    .returning();

  return created[0];
}