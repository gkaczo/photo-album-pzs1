import Image from "next/image";
import Link from "next/link";
import { SchoolYear } from "../data/schoolYears";


type Props = {
  year: SchoolYear;
};

export default function SchoolYearCard({ year }: Props) {
  return (



    <Link
      href={`/galeria/${year.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-500/50 hover:bg-slate-800 hover:shadow-xl hover:shadow-black/20"
    >
      {/* <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={year.image}
          alt={year.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div> */}

      <div className="absolute left-0 top-0 h-full w-1 bg-green-500 opacity-70 transition-all group-hover:w-1.5 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-medium uppercase tracking-wider text-green-400">
            Rok szkolny
          </div>

          <h3 className="mt-2 text-3xl font-bold tracking-tight">
            {year.title}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition group-hover:bg-green-500 group-hover:text-slate-950">
          →
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        Wydarzenia, uroczystości i najważniejsze chwile.
      </p>

      <div className="mt-6 text-sm font-medium text-slate-300 transition group-hover:text-green-400">
        Zobacz galerię
        <span className="ml-2 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}