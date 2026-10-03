import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    href: "/galeria",
    label: "Galeria zdjęć",
  },
  {
    href: "/kroniki",
    label: "Kroniki szkolne",
  },
  {
    href: "/filmoteka",
    label: "Filmoteka",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">

        {/* BRAND */}
        <Link
          href="/"
          className="group flex items-center gap-4"
        >
          {/* Logo PZS1 */}
          {/* <div className="relative h-12 w-12 shrink-0">
            <Image
              src="/images/pzs1-logo.png"
              alt="PZS1 Kościerzyna"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div> */}

          {/* Nazwa projektu */}
          <div className="border-l border-slate-700 pl-4 leading-none">
            <div className="text-lg font-semibold tracking-tight text-white transition group-hover:text-blue-400">
              Photo Kronika
            </div>

            <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
              PZS1 Kościerzyna
            </div>
          </div>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                rounded-lg
                px-4 py-2.5
                text-sm font-medium
                text-slate-300
                transition
                hover:bg-slate-800
                hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}