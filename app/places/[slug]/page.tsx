import { notFound } from "next/navigation";
import ScrollReveal from "@/components/scroll-reveal";
import { places } from "@/src/lib/konaseema-data";
import { MapPin, Camera, Navigation } from "lucide-react";
import PlaceDetailClient from "./place-detail-client";

export default async function PlaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = places.find((p) => p.id === slug);

  if (!place) {
    notFound();
  }

  return <PlaceDetailClient place={place} />;
}

