CREATE TABLE "movies" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"description" text NOT NULL,
	"poster" text NOT NULL,
	"cast" text[] DEFAULT '{}' NOT NULL,
	"released_at" date NOT NULL
);
