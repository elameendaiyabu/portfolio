import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/data";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

const description = `${site.role}. ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}, ${site.role}`, template: `%s | ${site.name}` },
  description,
  openGraph: {
    title: site.name,
    description,
    url: "/",
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F6F4EE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <body>
        <Nav name={site.shortName} items={site.nav} />
        <main className="mx-auto max-w-[72rem] px-6">{children}</main>
        <div className="mx-auto max-w-[72rem] px-6">
          <Footer />
        </div>
      </body>
    </html>
  );
}
