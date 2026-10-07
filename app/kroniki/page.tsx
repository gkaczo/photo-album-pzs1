import { getChroniclePages } from "../actions/galleryActions";
import ChronicleBook from "../components/ChronicleBook";


export default async function KronikiPage() {
  const pages = await getChroniclePages("2022-2023");

  return (
    <main className="min-h-[calc(100vh-73px)] bg-[#171a1d] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
            Archiwum PZS1
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Kroniki szkolne
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Przeglądaj cyfrowe kopie dawnych kronik i odkrywaj
            historię szkoły zapisaną na kolejnych stronach.
          </p>
        </div>

        {pages.length > 0 ? (
          <ChronicleBook pages={pages} />
        ) : (
          <div className="mt-16 text-center text-sm text-slate-500">
            Brak stron kroniki dla tego roku.
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-4">
        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          Cyfrowe archiwum kronik PZS1 Kościerzyna
        </div>
      </section>
    </main>
  );
}