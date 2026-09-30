import EventCard from "@/app/components/EventCard";
import { events } from "@/app/data/events";
import { schoolYears } from "@/app/data/schoolYears";
import Link from "next/link";

type Props = {
  params: Promise<{
    rok: string;
  }>;
};

export default async function YearPage({ params }: Props) {
  const { rok } = await params;

  const year = schoolYears.find(
    (item) => item.slug === rok
  );

  const yearEvents = events.filter(
    (event) => event.year === rok
  );

  if (!year) {
    return (
      <main className="min-h-[calc(100vh-73px)] text-white">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-3xl font-bold">
            Nie znaleziono roku szkolnego
          </h1>

          <Link
            href="/galeria"
            className="mt-6 inline-block text-green-400 transition hover:text-green-300"
          >
            ← Wróć do galerii
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-73px)] text-white">

      {/* Nagłówek */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href="/galeria"
            className="mb-8 inline-block text-sm font-medium text-slate-400 transition hover:text-white"
          >
            ← Wróć do galerii
          </Link>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Rok szkolny
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {year.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                {year.description}
              </p>

              <p className="mt-4 max-w-2xl text-slate-500">
                Najważniejsze wydarzenia, wycieczki i chwile
                z życia naszej szkoły.
              </p>
            </div>

            {/* Liczba wydarzeń */}
            <div className="shrink-0 rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-3 backdrop-blur-sm">
              <span className="text-sm text-slate-400">
                Liczba wydarzeń
              </span>

              <span className="ml-3 text-2xl font-bold text-white">
                {yearEvents.length}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Wydarzenia */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Wydarzenia
          </h2>

          <p className="mt-2 text-slate-400">
            Wybierz wydarzenie, aby zobaczyć galerię zdjęć.
          </p>
        </div>

        {yearEvents.length === 0 ? (

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <p className="text-slate-400">
              Brak wydarzeń dla tego roku.
            </p>
          </div>

        ) : (

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {yearEvents.map((event) => (
              <EventCard
                key={event.slug}
                event={event}
              />
            ))}
          </div>

        )}

      </section>

    </main>
  );
}