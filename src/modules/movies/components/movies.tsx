"use client";

import React, { useTransition } from "react";

import { MovieSelectType } from "@/db/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  movies?: MovieSelectType[];
};

export function Movies({ movies }: Props) {
  // const [isLoading, startTransition] = useTransition();
  let isLoading = true;

  return (
    <main className="w-full">
      <header className="mb-8">
        <div className="w-full flex items-center justify-between">
          <Input
            type="text"
            placeholder="Search movies..."
            // value={search}
            // onChange={handleSearchChange}
            className="w-1/4"
          />

          <div className="flex items-center gap-3">
            <Button
            // onClick={handlePreviousPage}
            // disabled={page === 1 || isLoading}
            >
              Previous
            </Button>
            <Button
              // onClick={handleNextPage}
              disabled={isLoading}
            >
              Next
            </Button>
          </div>
        </div>
      </header>

      {isLoading ? (
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <li key={index} className="relative">
              <Skeleton className="aspect-square w-full rounded-lg bg-gray-300" />
              <Skeleton className="mt-2 h-4 w-3/4 rounded bg-gray-300" />
              <Skeleton className="mt-1 h-4 w-1/2 rounded bg-gray-300" />
              <Skeleton className="mt-1 h-4 w-1/4 rounded bg-gray-300" />
            </li>
          ))}
        </ul>
      ) : (
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8"
        >
          some text
        </ul>
      )}
    </main>
  );
}
