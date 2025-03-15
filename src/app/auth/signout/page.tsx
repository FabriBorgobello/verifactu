import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { LogOut } from "lucide-react";

export default function SignOutPage() {
  return (
    <div className="flex h-full items-center justify-center p-4 lg:p-6">
      <div className="border-muted flex w-full max-w-md flex-col items-center justify-center gap-2 rounded-lg border p-6 shadow-md lg:p-12">
        <TypographyH3>Sign Out</TypographyH3>
        <TypographyMuted>Are you sure you want to sign out?</TypographyMuted>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/auth/signin" });
          }}
          className="mt-6 w-full gap-4"
        >
          <Button
            type="submit"
            variant="destructive"
            className="flex w-full items-center justify-center gap-2"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Button>
        </form>
      </div>
    </div>
  );
}
