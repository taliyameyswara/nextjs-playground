"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function Loading() {
  const skeletonCards = Array(4).fill(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {skeletonCards.map((_, index) => (
        <Card key={index} className="overflow-hidden shadow-none">
          {/* Skeleton untuk gambar */}
          <div className="relative h-48 w-full overflow-hidden">
            <Skeleton className="h-full w-full" />
          </div>
          {/* Skeleton untuk header */}
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-5 w-1/2" />
              </div>
            </div>
          </CardHeader>
          {/* Skeleton untuk tombol */}
          <CardFooter className="p-4 pt-0">
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
