import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition hover:text-blue-400"
        >
          PZS1 Kościerzyna<span className="text-blue-400"> Photo Kronika</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/galeria"
            className="transition hover:text-green-400"
          >
            Galeria
          </Link>

          <Link
            href="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            O aplikacji
          </Link>
        </div>
      </div>
    </nav>
  );
}