-- Drizzle Migration: Add tables for Jira-like project management

CREATE TABLE projects (
  id text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  team_id text NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  created_by text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE issue_columns (
  id text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  project_id text NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  name text NOT NULL,
  "order" text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT issue_columns_project_name_idx UNIQUE (project_id, name)
);

CREATE TABLE issues (
  id text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  project_id text NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  column_id text NOT NULL REFERENCES issue_columns(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  assignee_id text REFERENCES users(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'open',
  priority text NOT NULL DEFAULT 'medium',
  created_by text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE issue_comments (
  id text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  issue_id text NOT NULL REFERENCES issues(id) ON DELETE CASCADE,
  author_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE activity_log (
  id text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  project_id text NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id text NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  action text NOT NULL,
  meta text,
  created_at timestamptz NOT NULL DEFAULT now()
);