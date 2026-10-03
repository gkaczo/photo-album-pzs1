"use client";

import Image from "next/image";
import { useState } from "react";

const pages = [
  {
    image: "/kroniki/001.jpg",
    title: "Rok szkolny 1985/1986",
  },
  {
    image: "/kroniki/002.jpg",
    title: "Życie szkoły",
  },
  {
    image: "/kroniki/003.jpg",
    title: "Wydarzenia szkolne",
  },
  {
    image: "/kroniki/004.jpg",
    title: "Wspomnienia",
  },
];

export default function KronikiPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const nextPage = () => {
    if (turning || currentPage >= pages.length - 1) return;

    setDirection("next");
    setTurning(true);

    setTimeout(() => {
      setCurrentPage((page) => page + 1);
      setTurning(false);
    }, 650);
  };

  const previousPage = () => {
    if (turning || currentPage <= 0) return;

    setDirection("prev");
    setTurning(true);

    setTimeout(() => {
      setCurrentPage((page) => page - 1);
      setTurning(false);
    }, 650);
  };

  const page = pages[currentPage];

  return (
    <main className="min-h-[calc(100vh-73px)] bg-[#171a1d] text-white">

      {/* Nagłówek */}

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-12">

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


        {/* KSIĄŻKA */}

        <div className="mt-10 flex justify-center">

          <div className="relative w-full max-w-4xl">

            {/* cień książki */}

            <div className="absolute -bottom-5 left-[5%] right-[5%] h-10 rounded-[50%] bg-black/50 blur-2xl" />


            {/* książka */}

            <div className="relative mx-auto aspect-[1.45/1] w-full max-w-4xl perspective-[1800px]">

              {/* tylna okładka */}

              <div className="absolute inset-0 rounded-lg bg-[#493a29] shadow-2xl" />


              {/* lewa strona */}

              <div className="absolute inset-y-3 left-3 right-1/2 overflow-hidden rounded-l-md bg-[#e9dfc9] shadow-inner">

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black/20" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="h-[90%] w-[84%] border border-black/10 bg-[#f3ead7]" />

                </div>

              </div>


              {/* prawa strona */}

              <div
                className={`
                  page
                  absolute
                  inset-y-3 left-1/2 right-3
                  overflow-hidden
                  rounded-r-md
                  bg-[#f3ead7]
                  shadow-xl
                  ${turning && direction === "next" ? "page-next" : ""}
                  ${turning && direction === "prev" ? "page-prev" : ""}
                `}
              >

                <div className="absolute inset-0">

                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 45vw, 400px"
                    className="object-contain p-3 sm:p-6"
                  />

                </div>

                {/* światło kartki */}

                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/10 to-transparent" />

              </div>


              {/* grzbiet */}

              <div className="pointer-events-none absolute bottom-3 left-1/2 top-3 w-[2px] -translate-x-1/2 bg-black/20 shadow-[0_0_8px_rgba(0,0,0,0.25)]" />

            </div>

          </div>

        </div>


        {/* sterowanie */}

        <div className="mt-10 flex flex-col items-center gap-4">

          <div className="flex items-center gap-4">

            <button
              onClick={previousPage}
              disabled={currentPage === 0 || turning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Poprzednia strona"
            >
              ←
            </button>


            <div className="min-w-24 text-center">

              <p className="text-sm font-medium text-slate-300">
                {currentPage + 1} / {pages.length}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {page.title}
              </p>

            </div>


            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1 || turning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-slate-300 transition hover:border-slate-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Następna strona"
            >
              →
            </button>

          </div>


          <p className="text-xs text-slate-600">
            Użyj przycisków, aby przewracać strony
          </p>

        </div>

      </section>


      {/* stopka */}

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-4">

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          Cyfrowe archiwum kronik PZS1 Kościerzyna
        </div>

      </section>

    </main>
  );
}