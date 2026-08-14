import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-32">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-5 font-display text-5xl tracking-tight md:text-6xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-5 text-sm text-mute">
          The page you&apos;re looking for moved or was never here.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-on-accent"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
