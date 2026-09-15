import Link from "next/link";
import TealShell from "@/components/TealShell";

export default function NotFound() {
  return (
    <TealShell className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-5 text-5xl font-extrabold tracking-tight md:text-6xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-5 text-on-teal-mute">The page you&apos;re looking for moved or was never here.</p>
      <Link
        href="/"
        className="mt-9 inline-flex rounded-full bg-accent px-7 py-4 font-semibold text-on-accent transition-transform hover:scale-105"
      >
        Back home
      </Link>
    </TealShell>
  );
}
