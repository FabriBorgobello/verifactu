import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { LogOut } from "lucide-react";

export default function SignOutPage() {
  return (
    <div className="~p-4/6 flex h-full items-center justify-center">
      <div className="border-muted ~p-6/12 flex w-full max-w-md flex-col items-center justify-center gap-2 rounded-lg border shadow-md">
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
