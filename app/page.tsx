import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-400">
            PZS1 Kościerzyna
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Photo Kronika
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Najważniejsze wydarzenia, wspomnienia i chwile
            zapisane na zdjęciach.
          </p>

          <div className="mt-10">
            <Link
              href="/galeria"
              className="inline-block rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-400"
            >
              Przejdź do galerii
            </Link>
          </div>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-bold">
          Kronika szkoły
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          Przeglądaj wydarzenia z kolejnych lat szkolnych.
        </p>

      </section>
    </main>
  );
}