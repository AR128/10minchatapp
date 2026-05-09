import { LobbyClient } from "@/components/lobby-client";
import { SITE_TITLE } from "@/lib/site";
import type { Metadata } from "next";

type SearchParamValue = string | string[] | undefined;

type HomePageProps = {
  searchParams: Promise<{
    destroyed?: SearchParamValue;
    error?: SearchParamValue;
  }>;
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  alternates: {
    canonical: "/",
  },
};

function getFirstParam(value: SearchParamValue) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function Page({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const wasDestroyed = getFirstParam(params.destroyed) === "true";
  const error = getFirstParam(params.error);

  return <LobbyClient error={error} wasDestroyed={wasDestroyed} />;
}
