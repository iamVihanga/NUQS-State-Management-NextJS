import { integer, text, pgTable, date } from "drizzle-orm/pg-core";

export const movies = pgTable("movies", {
  id: integer("id").primaryKey(),
  title: text("text").notNull(),
  description: text("description").notNull(),
  poster: text("poster").notNull(),
  cast: text("cast").array().notNull().default([]),
  releasedAt: date("released_at", { mode: "string" }).notNull(),
});

export type MovieSelectType = typeof movies.$inferSelect;

export type MovieInsertType = typeof movies.$inferInsert;
