import Image from "next/image";
import Link from "next/link";
import { Event } from "../data/events";

type Props = {
  event: Event;
};

export default function EventCard({ event }: Props) {
  return (
    <Link
      href={`/galeria/${event.year}/${event.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="relative aspect-[16/9] overflow-hidden">

        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="p-6">

        <p className="text-sm font-medium text-green-600">
          {event.date}
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {event.title}
        </h2>

        <p className="mt-2 text-slate-600">
          {event.description}
        </p>

        <div className="mt-5 font-semibold text-green-600">
          Zobacz zdjęcia →
        </div>

      </div>

    </Link>
  );
}