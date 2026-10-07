"use server";

import {
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

const r2 = new S3Client({
  region: "auto",

  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,

  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.R2_BUCKET_NAME!;
const PUBLIC_URL = process.env.R2_PUBLIC_URL!;

export type R2Photo = {
  key: string;
  url: string;
};

//galeria
export async function getGalleryPhotos(
  year: string,
  event: string
): Promise<R2Photo[]> {

  const prefix = `${year}/${event}/`;

  const response = await r2.send(
    new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: prefix,
    })
  );

  const photos =
    response.Contents
      ?.filter((object) => {
        if (!object.Key) return false;

        const key = object.Key.toLowerCase();

        return (
          key.endsWith(".jpg") ||
          key.endsWith(".jpeg") ||
          key.endsWith(".png") ||
          key.endsWith(".webp")
        );
      })
      .sort((a, b) =>
        (a.Key ?? "").localeCompare(b.Key ?? "", undefined, {
          numeric: true,
        })
      )
      .map((object) => ({
        key: object.Key!,
        url: `${PUBLIC_URL}/${object.Key}`,
      })) ?? [];

  return photos;
}

//kroniki
export async function getChroniclePages(
  year: string
): Promise<R2Photo[]> {

  const prefix = `kroniki/${year}/`;

  const response = await r2.send(
    new ListObjectsV2Command({
      Bucket: BUCKET,
      Prefix: prefix,
    })
  );

  const pages =
    response.Contents
      ?.filter((object) => {
        if (!object.Key) return false;

        const key = object.Key.toLowerCase();

        return (
          key.endsWith(".jpg") ||
          key.endsWith(".jpeg") ||
          key.endsWith(".png") ||
          key.endsWith(".webp")
        );
      })
      .sort((a, b) =>
        (a.Key ?? "").localeCompare(
          b.Key ?? "",
          undefined,
          { numeric: true }
        )
      )
      .map((object) => ({
        key: object.Key!,
        url: `${PUBLIC_URL}/${object.Key}`,
      })) ?? [];

  return pages;
}