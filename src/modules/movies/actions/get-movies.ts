"use server";

import { db } from "@/db/drizzle";
import { movies } from "@/db/schema";
import { desc, ilike } from "drizzle-orm";

import { QuerySchema } from "../types/get-movies-query";

export async function getMovies({ limit = 10, page = 1, query }: QuerySchema) {
  try {
    const data = await db
      .select()
      .from(movies)
      .where(query ? ilike(movies.title, `%${query}%`) : undefined)
      .orderBy(desc(movies.id))
      .limit(limit)
      .offset((page - 1) * limit);

    return { data };
  } catch (err) {
    return { error: (err as any)?.message || "Something went wrong !" };
  }
}
