export function TypographyH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="~text-4xl/6xl scroll-m-20 font-extrabold tracking-tight">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="~text-3xl/5xl scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="~text-2xl/4xl scroll-m-20 font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="~text-xl/3xl scroll-m-20 font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: { children: React.ReactNode }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyBlockquote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyList({ children }: { children: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function TypographyInlineCode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <code className="bg-muted ~text-sm/lg relative rounded px-[0.3rem] py-[0.2rem] font-mono font-semibold">
      {children}
    </code>
  );
}

export function TypographyLead({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground ~text-xl/2xl">{children}</p>;
}

export function TypographyLarge({ children }: { children: React.ReactNode }) {
  return <div className="~text-lg/xl font-semibold">{children}</div>;
}

export function TypographySmall({ children }: { children: React.ReactNode }) {
  return (
    <small className="~text-sm/md leading-none font-medium">{children}</small>
  );
}

export function TypographyMuted({ children }: { children: React.ReactNode }) {
  return <p className="~text-sm/md text-muted-foreground">{children}</p>;
}
