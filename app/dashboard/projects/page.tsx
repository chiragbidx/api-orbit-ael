import { getAuthSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { db } from "@/lib/db/client";
import { projects, teams, teamMembers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import ProjectsClient from "./client";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find all projects for the user's active team(s)
  const memberTeams = await db
    .select({ teamId: teams.id })
    .from(teams)
    .innerJoin(teamMembers, eq(teams.id, teamMembers.teamId))
    .where(eq(teamMembers.userId, session.userId));

  const teamIds = memberTeams.map((t) => t.teamId);

  const projectList = await db
    .select()
    .from(projects)
    .where(teamIds.length ? eq(projects.teamId, teamIds[0]) : undefined);

  return (
    <ProjectsClient projects={projectList} />
  );
}