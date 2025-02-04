import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-3xl font-bold">Movies</div>

        <header className="mb-8">
          <div className="w-full flex items-center justify-between">
            <Skeleton className="w-1/4 h-10 bg-gray-300" />

            <div className="flex items-center gap-3">
              <Skeleton className="w-20 h-10 bg-gray-300" />
              <Skeleton className="w-20 h-10 bg-gray-300" />
            </div>
          </div>
        </header>

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
      </div>
    </section>
  );
}
