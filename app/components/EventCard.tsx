
"use client";

import { useCallback, useEffect, useState } from "react";
import { getGalleryPhotos, type R2Photo } from "@/app/actions/galleryActions";

type Event = {
  slug: string;
  year: string;
  title: string;
  description?: string;
  date?: string;
  image?: string;
};

type Props = {
  event: Event;
};

export default function EventCard({ event }: Props) {
  const [photos, setPhotos] = useState<R2Photo[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openGallery = async () => {
    setIsOpen(true);
    setLoading(true);
    setError("");

    try {
      const result = await getGalleryPhotos(
        event.year,
        event.slug
      );

      setPhotos(result);
      setActiveIndex(0);

      if (result.length === 0) {
        setError("Brak zdjęć w tym wydarzeniu.");
      }
    } catch {
      setError("Nie udało się pobrać zdjęć. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  const closeGallery = useCallback(() => {
    setIsOpen(false);
  }, []);

  const previousPhoto = useCallback(() => {
    setActiveIndex((index) =>
      index === 0 ? photos.length - 1 : index - 1
    );
  }, [photos.length]);

  const nextPhoto = useCallback(() => {
    setActiveIndex((index) =>
      index === photos.length - 1 ? 0 : index + 1
    );
  }, [photos.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft" && photos.length > 1) {
        previousPhoto();
      }
      if (event.key === "ArrowRight" && photos.length > 1) {
        nextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, photos.length, closeGallery, previousPhoto, nextPhoto]);

  return (
    <>
      <button
        type="button"
        onClick={openGallery}
        className="group block w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-left transition duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:shadow-xl hover:shadow-black/20"
        aria-label={`Otwórz galerię: ${event.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-slate-500">
              Brak miniatury
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Zobacz zdjęcia
          </span>
        </div>

        <div className="p-5">
          {event.date && (
            <p className="mb-2 text-sm text-green-400">
              {event.date}
            </p>
          )}

          <h3 className="text-xl font-semibold text-white transition group-hover:text-green-400">
            {event.title}
          </h3>

          {event.description && (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
              {event.description}
            </p>
          )}

          <p className="mt-4 text-sm font-medium text-green-400">
            Otwórz galerię <span aria-hidden="true">→</span>
          </p>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080b10] p-4 sm:p-8"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria: ${event.title}`}
        >
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
            aria-label="Zamknij galerię"
          >
            ×
          </button>

          <div
            className="relative flex h-full max-h-[90vh] w-full max-w-7xl flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 max-w-full pr-12 text-center">
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                {event.title}
              </h2>

              {!loading && photos.length > 0 && (
                <p className="mt-1 text-sm text-slate-400">
                  Zdjęcie {activeIndex + 1} z {photos.length}
                </p>
              )}
            </div>

            {loading ? (
              <div className="flex flex-col items-center gap-4 py-16 text-slate-300">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-600 border-t-green-400" />
                Pobieranie zdjęć...
              </div>
            ) : error ? (
              <p className="rounded-xl bg-white/5 px-6 py-5 text-center text-slate-300">
                {error}
              </p>
            ) : (
              <div className="relative flex min-h-0 w-full flex-1 items-center justify-center">
                {photos.length > 1 && (
                  <button
                    type="button"
                    onClick={previousPhoto}
                    className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-3xl text-white hover:bg-black/80 sm:left-3"
                    aria-label="Poprzednie zdjęcie"
                  >
                    ‹
                  </button>
                )}

                <img
                  key={photos[activeIndex].url}
                  src={photos[activeIndex].url}
                  alt={`${event.title} — zdjęcie ${activeIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />

                {photos.length > 1 && (
                  <button
                    type="button"
                    onClick={nextPhoto}
                    className="absolute right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-3xl text-white hover:bg-black/80 sm:right-3"
                    aria-label="Następne zdjęcie"
                  >
                    ›
                  </button>
                )}
              </div>
            )}

            {!loading && !error && photos.length > 0 && (
              <p className="mt-4 text-xs text-slate-500">
                Użyj strzałek na klawiaturze lub kliknij przyciski nawigacji.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
