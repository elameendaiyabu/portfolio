import type { ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  children,
}: {
  id?: string;
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid scroll-mt-14 gap-8 border-t border-line py-16 lg:grid-cols-[14rem_1fr] lg:gap-12 lg:py-24"
    >
      <h2 className="meta self-start text-ink-2 lg:sticky lg:top-24">
        <span className="text-ink-3">{index} /</span> {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
