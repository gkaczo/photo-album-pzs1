import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Galeria zdjęć",
    description:
      "Fotografie z wydarzeń, wycieczek, uroczystości i codziennego życia szkoły.",
    href: "/galeria",
    label: "Przeglądaj zdjęcia",
    icon: "▧",
    accent: "text-blue-400",
  },
  {
    number: "02",
    title: "Kroniki szkolne",
    description:
      "Cyfrowe archiwum dawnych kronik, skanów, zapisów i wspomnień z historii PZS1.",
    href: "/kroniki",
    label: "Otwórz archiwum",
    icon: "▤",
    accent: "text-amber-300",
  },
  {
    number: "03",
    title: "Filmoteka",
    description:
      "Filmy, nagrania z uroczystości i materiały audiowizualne dokumentujące życie szkoły.",
    href: "/filmoteka",
    label: "Przejdź do filmów",
    icon: "▷",
    accent: "text-emerald-400",
  },
];

export default function HomePage() {
  return (
    <main className="text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-24">

        <div className="max-w-3xl">

          <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            <span className="h-px w-8 bg-blue-400" />
            PZS1 · Kościerzyna
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Photo Kronika
            <span className="mt-2 block text-slate-400">
              Historia zapisana w obrazach.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Miejsce spotkania przeszłości z teraźniejszością.
            Zdjęcia, dawne kroniki szkolne i filmy tworzą
            wspólne archiwum historii Powiatowego Zespołu
            Szkół nr 1 w Kościerzynie.
          </p>

        </div>


        {/* STATYCZNE ZDJĘCIE */}
        <div className="group relative mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

          <div className="relative aspect-[16/7] min-h-56 overflow-hidden sm:min-h-80">

            <img
              src="/images/pzs_hero1.jpg"
              alt="Powiatowy Zespół Szkół nr 1 w Kościerzynie"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Photo Kronika PZS1
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Historia szkoły zapisana na zdjęciach
              </h2>

              <p className="mt-2 text-sm text-slate-300">
                Wydarzenia · uroczystości · wycieczki · wspomnienia
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DZIAŁY ARCHIWUM */}
      <section className="border-t border-slate-800/80 bg-slate-900/20">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

          <div className="mb-9">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Zasoby archiwum
            </p>

            <h2 className="text-2xl font-bold sm:text-3xl">
              Odkrywaj szkolne historie
            </h2>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {sections.map((section) => (

              <Link
                key={section.number}
                href={section.href}
                className="group flex min-h-64 flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900 sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <span className={`text-4xl ${section.accent}`}>
                    {section.icon}
                  </span>

                  <span className="text-sm tabular-nums text-slate-600">
                    {section.number}
                  </span>

                </div>


                <h3 className="mt-8 text-xl font-semibold transition group-hover:text-blue-300">
                  {section.title}
                </h3>


                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {section.description}
                </p>


                <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-4">

                  <span className="text-sm font-medium text-slate-300">
                    {section.label}
                  </span>

                  <span className="text-lg text-slate-500 transition group-hover:translate-x-1 group-hover:text-blue-400">
                    →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      

    </main>
  );
}