import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { FcGoogle } from "react-icons/fc";

const PROVIDERS = [{ name: "Google", icon: FcGoogle, id: "google" }];

export default function LoginPage() {
  return (
    <div className="~p-4/6 flex h-full items-center justify-center">
      <div className="border-muted ~p-6/12 flex w-full max-w-md flex-col items-center justify-center gap-2 rounded-lg border shadow-md">
        <TypographyH3>Welcome Back</TypographyH3>
        <TypographyMuted>Sign in or create an account</TypographyMuted>
        <div className="mt-6 flex w-full flex-col gap-4">
          {PROVIDERS.map((provider) => (
            <form
              key={provider.id}
              className="w-full"
              action={async () => {
                "use server";
                await signIn(provider.id, { redirectTo: "/" });
              }}
            >
              <Button
                type="submit"
                className="flex w-full items-center justify-center gap-2"
              >
                <provider.icon className="h-5 w-5" />
                Continue with {provider.name}
              </Button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}
