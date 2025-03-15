import Link from "next/link";
import { Button } from "@/components/ui/button";

import { TypographyH1 } from "@/components/ui/typography";

export default function NotFound() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="mx-auto flex max-w-md flex-col gap-2 text-center">
        <TypographyH1>404</TypographyH1>
        <p className="text-muted-foreground text-xl">
          Oops! The page you&apos;re looking for cannot be found.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
