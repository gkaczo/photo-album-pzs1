import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-73px)] text-white">

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:py-36">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Powiatowy Zespół Szkół nr 1 w Kościerzynie
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Kronika wydarzeń szkolnych
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Miejsce, w którym szkolne wydarzenia, wycieczki
              i wspólne chwile zostają z nami na dłużej.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/galeria"
                className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Przeglądaj galerię →
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                Dowiedz się więcej
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}