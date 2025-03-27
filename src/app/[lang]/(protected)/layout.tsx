export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: RESTORE THIS
  // const session = await auth();
  // if (!session) redirect("/auth/signin");

  return <>{children}</>;
}
