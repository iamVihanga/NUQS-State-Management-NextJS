"use server";

import { db } from "@/db/drizzle";
import { movies } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getMovie(id: number) {
  return await db.select().from(movies).where(eq(movies.id, id)).execute();
}
