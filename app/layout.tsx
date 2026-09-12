import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/app/components/headers/Header";
import Footer from "@/app/components/Footer";
import ThemeProvider from "@/app/components/headers/ThemeProvider";
import { MobileNavProvider } from "@/app/MobileNavContext";
import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_TH,
  SITE_DESCRIPTION,
  personSchema,
} from "@/app/data/site";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Portfolio`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: `${SITE_NAME} | Portfolio`,
  authors: [{ name: SITE_NAME, url: "https://github.com/photkosee" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    SITE_NAME,
    SITE_NAME_TH,
    "Phot Kosee",
    "photkosee",
    "software engineer",
    "web developer",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: `${SITE_NAME} | Portfolio`,
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
    firstName: "Phot",
    lastName: "Koseekrainiramon",
    locale: "en_US",
    alternateLocale: "th_TH",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "CnlwpaPq5AkFDd-p3szQDoH4TKkdW43R_fRCcNoLF1Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <MobileNavProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            storageKey="newTheme2"
          >
            <Header />
            <div className="-mt-[68px] md:-mt-[75px] relative overflow-hidden">
              {children}
            </div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </MobileNavProvider>

        <Analytics />
      </body>
    </html>
  );
}
