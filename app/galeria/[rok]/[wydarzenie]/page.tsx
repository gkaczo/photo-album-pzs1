import PhotoGrid from "@/app/components/PhotoGrid";
//import { photoGalleries } from "@/app/data/photos";
import { getGalleryPhotos } from "@/app/actions/galleryActions";
import { events } from "@/app/data/events";
import Link from "next/link";


type Props = {
  params: Promise<{
    rok: string;
    wydarzenie: string;
  }>;
};

export default async function EventGalleryPage({
  params,
}: Props) {

  const { rok, wydarzenie } = await params;

  // const gallery = photoGalleries.find(
  //   (item) =>
  //     item.year === rok &&
  //     item.event === wydarzenie
  // );

  // if (!gallery) 
  const event = events.find(
    (item) =>
      item.year === rok &&
      item.slug === wydarzenie
  );

  if (!event) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">

        <h1 className="text-3xl font-bold">
          Nie znaleziono galerii
        </h1>

        <Link
          href={`/galeria/${rok}`}
          className="mt-6 inline-block text-green-600"
        >
          ← Wróć do wydarzeń
        </Link>

      </main>
    );
  }

  // NOWE: pobieramy listę zdjęć z Cloudflare R2
  // zamiast korzystać z photoGalleries z data/photos.ts
  const photos = await getGalleryPhotos(
    rok,
    wydarzenie
  );

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href={`/galeria/${rok}`}
            className="text-sm text-green-400 hover:text-green-300"
          >
            ← Wróć do wydarzeń
          </Link>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            {/* ZMIANA: gallery.title → event.title
                Dane wydarzenia nadal pochodzą z events.ts */}
            {event.title}
          </h1>

          <p className="mt-4 text-slate-300">
            Rok szkolny {rok.replace("-", " / ")}
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        {/* ZMIANA: gallery.photos → zdjęcia pobrane z Cloudflare R2 */}
        <PhotoGrid
          photos={photos.map((photo) => photo.url)}
        />

      </section>

    </main>
  );
}