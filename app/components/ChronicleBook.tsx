
"use client";

import Image from "next/image";
import { useState } from "react";
import { R2Photo } from "../actions/galleryActions";

type ChronicleBookProps = {
  pages: R2Photo[];
};

export default function ChronicleBook({
  pages,
}: ChronicleBookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [previousPage, setPreviousPage] = useState<R2Photo | null>(null);
  const [turning, setTurning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const changePage = (newPage: number, dir: "next" | "prev") => {
    if (turning || newPage < 0 || newPage >= pages.length) {
      return;
    }

    setPreviousPage(pages[currentPage]);
    setDirection(dir);
    setTurning(true);

    setTimeout(() => {
      setCurrentPage(newPage);
      setTurning(false);
      setPreviousPage(null);
    }, 450);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      changePage(currentPage + 1, "next");
    }
  };

  const goPrevious = () => {
    if (currentPage > 0) {
      changePage(currentPage - 1, "prev");
    }
  };

  const page = pages[currentPage];

  if (!page) {
    return null;
  }

  return (
    <>
      {/* =====================================================
          KARTA KRONIKI
          ===================================================== */}

      <div className="mt-10 flex justify-center px-4">

        <div className="relative w-full max-w-5xl">

          {/* cień */}
          <div
            className="
              absolute
              -bottom-6
              left-[5%]
              right-[5%]
              h-10
              rounded-[50%]
              bg-black/40
              blur-2xl
            "
          />

          {/* =================================================
              FORMAT A4 POZIOM
              297 × 210
              ================================================= */}

          <div
            className="
              chronicle
              relative
              aspect-[297/210]
              w-full
              overflow-hidden
              rounded-sm
              bg-[#d7c39d]
              shadow-2xl
            "
          >

            {/* =================================================
                TŁO STAREGO PAPIERU
                ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-[#e8d9b9]
              "
            />

            {/* delikatna tekstura */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-30
                bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(80,50,20,0.08),transparent_30%)]
              "
            />

            {/* =================================================
                ZEWNĘTRZNA RAMKA
                ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[2%]
                rounded-sm
                border-[3px]
                border-[#6f3f2f]
              "
            />

            {/* =================================================
                ZŁOTA RAMKA
                ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[2.8%]
                rounded-sm
                border
                border-[#a9854d]
              "
            />

            {/* =================================================
                WEWNĘTRZNA RAMKA
                ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[4%]
                rounded-sm
                border
                border-[#8b6540]/70
              "
            />

            {/* =================================================
                OZDOBNE NAROŻNIKI
                ================================================= */}

            <div className="pointer-events-none absolute left-[3.2%] top-[3.2%] text-2xl text-[#765034]">
              ❧
            </div>

            <div className="pointer-events-none absolute right-[3.2%] top-[3.2%] -scale-x-100 text-2xl text-[#765034]">
              ❧
            </div>

            <div className="pointer-events-none absolute bottom-[3.2%] left-[3.2%] -scale-y-100 text-2xl text-[#765034]">
              ❧
            </div>

            <div className="pointer-events-none absolute bottom-[3.2%] right-[3.2%] scale-x-[-1] scale-y-[-1] text-2xl text-[#765034]">
              ❧
            </div>

            {/* =================================================
                ZAWARTOŚĆ – AKTUALNA STRONA
                ================================================= */}

            <div
              className={`
                chronicle-content
                absolute
                inset-[7%]
                ${turning ? `animate-${direction}` : ""}
              `}
            >
              <PageContent
                page={page}
                pageNumber={currentPage + 1}
                totalPages={pages.length}
              />
            </div>

            {/* =================================================
                NOWA STRONA
                ================================================= */}

            {turning && previousPage && (
              <div
                className={`
                  chronicle-content
                  absolute
                  inset-[7%]
                  ${direction === "next"
                    ? "animate-next-new"
                    : "animate-prev-new"}
                `}
              >
                <PageContent
                  page={
                    direction === "next"
                      ? pages[currentPage + 1]
                      : pages[currentPage - 1]
                  }
                  pageNumber={
                    direction === "next"
                      ? currentPage + 2
                      : currentPage
                  }
                  totalPages={pages.length}
                />
              </div>
            )}

          </div>
        </div>
      </div>

      {/* =====================================================
          STEROWANIE
          ===================================================== */}

      <div className="mt-8 flex flex-col items-center gap-4">

        <div className="flex items-center gap-5">

          <button
            onClick={goPrevious}
            disabled={currentPage === 0 || turning}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-slate-700
              bg-slate-900
              text-xl text-slate-300
              transition
              hover:bg-slate-800
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
            aria-label="Poprzednia strona"
          >
            ←
          </button>

          <div className="min-w-24 text-center">
            <p className="text-sm font-medium text-slate-300">
              {currentPage + 1} / {pages.length}
            </p>
          </div>

          <button
            onClick={nextPage}
            disabled={
              currentPage === pages.length - 1 || turning
            }
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-slate-700
              bg-slate-900
              text-xl text-slate-300
              transition
              hover:bg-slate-800
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
            aria-label="Następna strona"
          >
            →
          </button>

        </div>

        <p className="text-xs text-slate-600">
          Przewracaj strony kroniki
        </p>

      </div>
    </>
  );
}


/* =========================================================
   ZAWARTOŚĆ STRONY
   ========================================================= */

function PageContent({
  page,
  pageNumber,
  totalPages,
}: {
  page: R2Photo;
  pageNumber: number;
  totalPages: number;
}) {
  return (
    <div className="relative h-full w-full">

      {/* zdjęcie */}
      <div className="absolute inset-[2%] overflow-hidden bg-[#eee3c9] shadow-[0_3px_12px_rgba(50,30,10,0.25)]">

        <Image
          src={page.url}
          alt={`Strona ${pageNumber} kroniki`}
          fill
          priority={pageNumber === 1}
          sizes="(max-width: 768px) 90vw, 900px"
          className="object-contain p-3 sm:p-5"
        />

      </div>

      {/* numer */}
      <div
        className="
          absolute
          bottom-[-3%]
          left-0
          right-0
          text-center
          font-serif
          text-xs
          tracking-[0.25em]
          text-[#765034]
        "
      >
        {pageNumber} / {totalPages}
      </div>

    </div>
  );
}
