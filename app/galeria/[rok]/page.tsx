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
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-3xl font-bold">
          Nie znaleziono roku szkolnego
        </h1>

        <Link
          href="/galeria"
          className="mt-6 inline-block text-green-600"
        >
          ← Wróć do galerii
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Rok szkolny {year.title}
          </p>
          <p className="mt-5 max-w-2xl text-slate-300">
            {year.description}
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-400">
                Najważniejsze wydarzenia, wycieczki i chwile
                z życia naszej szkoły.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">
                <span className=" text-sm text-slate-400">
                  Ilość wydarzeń
                </span>
                <span className=" ml-2 text-2xl font-bold">
                  {yearEvents.length}
                </span>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href="/galeria"
            className="text-sm text-green-400 hover:text-green-300"
          >
            ← Wszystkie lata
          </Link>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Rok szkolny {year.title}
          </h1>

          <p className="mt-5 max-w-2xl text-slate-300">
            {year.description}
          </p>

        </div>

      </section> */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        {yearEvents.length === 0 ? (

          <p className="text-slate-600">
            Brak wydarzeń dla tego roku.
          </p>

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