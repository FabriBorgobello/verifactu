import Link from "next/link";
import { auth, signOut } from "@/auth";
import { ThemeToggle } from "./theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function Navbar() {
  const session = await auth();

  return (
    <nav className="bg-background fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between p-4 shadow md:p-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-lg font-bold">Verifactu</span>
      </Link>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 cursor-pointer rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={session.user.image || ""}
                    alt={session.user.name || ""}
                  />
                  <AvatarFallback>
                    {session.user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm leading-none font-medium">
                    {session.user.name}
                  </p>
                  <p className="text-muted-foreground text-xs leading-none">
                    {session.user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/invoices">Invoices</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/chat">Chat</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <DropdownMenuItem asChild>
                  <button type="submit" className="flex w-full">
                    Sign Out
                  </button>
                </DropdownMenuItem>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild variant="ghost">
            <Link href="/api/auth/signin">Sign In</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
