

import SchoolYearCard from "../components/SchoolYearCard";
import { schoolYears } from "../data/schoolYears";

export default function GalleryPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-950 text-white">

      {/* Nagłówek */}
      <section className="mb-12 max-w-3xl">
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Photo Kronika PZS1
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Galeria szkoły
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-400">
          Przeglądaj fotograficzne wspomnienia z kolejnych lat
          działalności PZS1 Kościerzyna.
        </p>
      </section>


     



      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-5 text-xl font-semibold">
          Wybierz rok szkolny
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {schoolYears.map((year) => (
            <SchoolYearCard
              key={year.slug}
              year={year}
            />
          ))}

        </div>

      </section>

    </main>
  );
}