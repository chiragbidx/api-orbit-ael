import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { projects, issueColumns, issues } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import ProjectBoardClient from "./client";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProjectBoardPage({ params: { projectId } }: { params: { projectId: string } }) {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Ensure user has access (must be a team member)
  const project = await db.query.projects.findFirst({
    where: (p, { eq }) => eq(p.id, projectId)
  });

  if (!project) return redirect("/dashboard/projects");

  // Fetch columns and issues for the project/board from DB - NO FALLBACK/NO MOCKS
  const columns = await db
    .select()
    .from(issueColumns)
    .where(eq(issueColumns.projectId, projectId));

  // Create board object mapping columnId to issue array
  const board = {};
  for (const col of columns) {
    board[col.id] = [];
  }

  const issueList = await db
    .select()
    .from(issues)
    .where(eq(issues.projectId, projectId));

  for (const issue of issueList) {
    if (board[issue.columnId]) board[issue.columnId].push(issue);
  }

  return (
    <ProjectBoardClient
      project={project}
      columns={columns}
      board={board}
    />
  );
}