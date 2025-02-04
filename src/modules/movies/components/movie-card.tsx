"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MovieSelectType } from "@/db/schema";
import Image from "next/image";
import React from "react";

type Props = {
  movie: MovieSelectType;
};

export default function MovieCard({ movie }: Props) {
  return (
    <Card className="p-0 overflow-hidden">
      <Image
        src={movie.poster}
        alt={movie.title}
        width={300}
        height={500}
        className="object-cover w-full"
      />
      <CardContent className="p-4">
        <div className="text-xl font-bold">{movie.title}</div>
      </CardContent>
    </Card>
  );
}
