import { sql } from "drizzle-orm";
import {
  pgEnum,
  pgTableCreator,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `t3-clerk-drizzle_${name}`);

export const statusEnum = pgEnum("status", ["in-progress", "resolved", "new"]);

export const tickets = createTable("ticket", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 64 }),
  email: varchar("email", { length: 256 }),
  description: varchar("description", { length: 256 }),
  userId: varchar("user_id", { length: 256 }).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
  status: statusEnum("status").default("new"),
});
