import type { Metadata } from "next";

import { SITE_NAME, SITE_NAME_TH } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Personal Projects",
  description:
    `Personal projects built by ${SITE_NAME} (${SITE_NAME_TH}) — web ` +
    `applications, hackathon builds, and side projects.`,
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
