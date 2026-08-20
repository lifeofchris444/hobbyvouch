import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const SITE_URL = "https://www.hobbylobbydiscounts.com"
const SITE_NAME = "Hobby Lobby Discounts"
const TITLE = "The Hobby Lobby Discounts They Don't Advertise"
const DESCRIPTION =
  "Discover how shoppers are unlocking hidden discount codes on fall and harvest decor, Halloween decor, autumn florals and wreaths, and costumes and party supplies. Complete 5+ deals in five simple steps and get your discount delivered straight to your inbox."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Hobby Lobby discount code",
    "Hobby Lobby promo code",
    "Hobby Lobby discounts",
    "Hobby Lobby coupons",
    "Hobby Lobby Halloween discounts",
    "Hobby Lobby fall decor deals",
    "fall and harvest decor deals",
    "Halloween decor deals",
    "autumn florals and wreath deals",
    "Halloween costume and party supply deals",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: {
    canonical: "/",
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
  generator: "v0.app",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 1024,
        alt: "Small pumpkins and a gourd, a grapevine wreath with autumn maple leaves and berry picks, a white ceramic ghost figurine, a black cat Halloween decoration, an orange trick-or-treat pail, and party tableware arranged on a vivid orange-red and dark brown background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
}

export const viewport: Viewport = {
  themeColor: "#EF4416",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
