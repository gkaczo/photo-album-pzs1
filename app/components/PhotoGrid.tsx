import Image from "next/image";

type Props = {
  photos: string[];
};

export default function PhotoGrid({ photos }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

      {photos.map((photo, index) => (

        <div
          key={photo}
          className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200"
        >

          <Image
            src={photo}
            alt={`Zdjęcie ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

        </div>

      ))}

    </div>
  );
}