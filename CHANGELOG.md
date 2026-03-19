# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2026-03-19
- Hardened `scripts/dev-supervisor.js` for Railway/container runtime:
  - `GIT_BOOTSTRAP` now defaults to `true` when `REPO_URL` is provided (can be disabled via `GIT_BOOTSTRAP=false`).
  - `GIT_POLL` default is `true` (can be disabled via `GIT_POLL=false`).
  - Removed destructive runtime git cleanup behavior (`git clean -fd`).
  - Added `pnpm exec next` fallback when `.bin/next` is not found.
  - Added explanatory inline comments for future maintainers/agents.
- Updated Next config to set explicit Turbopack root to project root (`turbopack.root`).
- Updated Docker app image install step to force clean dependency install:
  - `RUN rm -rf node_modules && pnpm install --prefer-offline --no-frozen-lockfile`
- Updated README supervisor/runtime notes to match current defaults and env-file behavior.

## 2026-03-22
- Added Jira-like projects and task board feature.
- Created Drizzle schema and migration for: projects, issue_columns, issues, issue_comments, activity_log (all team/tenant scoped).
- Implemented `/dashboard/projects`: list/create projects; modal dialog for new project.
- Implemented `/dashboard/projects/[projectId]`: board view—columns, issues, create issue in column.
- CRUD actions for projects and issues, role checked; UI built with shadcn/ui design.
- Updated sidebar navigation for easy access to Projects and Board.
 - Respond with confirm, no changed needed.

## 2026-03-23
- Removed ALL mock/demo Kanban data on board pages; only real issues & columns from DB rendered.
- Fixed New Issue button: new issues are saved to DB and error feedback shown; no more silent closing.
- Added UI feedback for creation failure in New Issue modal.
- Verified code and UI reads only DB state (not demo or fallback data).
- Files changed: `app/dashboard/projects/[projectId]/client.tsx`, `app/dashboard/projects/[projectId]/page.tsx`, `CHANGELOG.md`.
 - Respond with confirm, no changed needed.

## 2026-03-24
- Fixed bug in `/dashboard/projects` query: replaced invalid string-based `.innerJoin("team_members", ...)` with correct join referencing imported `teamMembers`.
- Now uses `.innerJoin(teamMembers, eq(teams.id, teamMembers.teamId)).where(eq(teamMembers.userId, session.userId))`.
- Error no longer occurs; projects page loads for all authenticated users.
- Files changed: `app/dashboard/projects/page.tsx`, `CHANGELOG.md`.