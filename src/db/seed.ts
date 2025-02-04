import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { mockMovies } from "./mock/movies";
import { movies } from "./schema";

const db_url =
  "postgresql://neondb_owner:kT62hEabdNMP@ep-plain-darkness-a5ly3x74-pooler.us-east-2.aws.neon.tech/nuqs-project?sslmode=require";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || db_url,
});

const db = drizzle(pool);

async function main() {
  console.log("Database Seeding Started !");

  // Delete all data in movies table
  await db.delete(movies);

  // Insert mockMovies data into movies table
  await db.insert(movies).values(mockMovies);

  console.log("Database Seeding Completed !");
  process.exit(0);
}

main()
  .then()
  .catch((error) => {
    console.error("Error while seeding database", error);
    process.exit(0);
  });
