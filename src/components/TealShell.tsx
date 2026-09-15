import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  stacked?: boolean;
};

/** The rounded dark-teal card every page opens with. Leaves room at the top for the fixed nav. */
export default function TealShell({ children, className = "", stacked = true }: Props) {
  return (
    <section
      className={`relative mx-auto max-w-[1360px] rounded-[28px] bg-teal px-5 pb-16 pt-24 text-on-teal sm:px-10 md:rounded-[36px] lg:px-16 lg:pt-32 ${
        stacked ? "stacked" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
