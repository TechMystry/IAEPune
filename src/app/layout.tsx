import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/FooterSection";
import { ModalProvider } from "@/app/ContactForm/ModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IAE Pune - Learn German | Study Abroad | MBBS Abroad | Global Careers",
  description:
    "IAE Pune offers premium German language courses and expert guidance for studying abroad including MBBS. Unlock global career opportunities with us!",
  keywords:
    "German language course, study abroad, MBBS abroad, global careers, IAE Pune, overseas education, study in Germany, MBBS admission, international jobs",
  authors: [{ name: "IAE Pune", url: "https://iaepune.com" }],
  openGraph: {
    title:
      "IAE Pune - Learn German, Study MBBS Abroad, and Global Career Opportunities",
    description:
      "Join IAE Pune for German language training and get expert help for study abroad programs including MBBS admissions and international jobs.",
    url: "https://iaepune.com",
    siteName: "IAE Pune",
    images: [
      {
        url: "https://iaepune.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IAE Pune - Education and Study Abroad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IAE Pune - Learn German, Study MBBS Abroad & Global Careers",
    description:
      "IAE Pune provides German courses and expert study abroad consulting for MBBS and job opportunities worldwide.",
    site: "@IAEPune",
    creator: "@IAEPune",
    images: ["https://iaepune.com/twitter-image.jpg"],
  },
  metadataBase: new URL("https://iaepune.com"),
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationOrganization",
    name: "IAE Pune",
    url: "https://iaepune.com",
    logo: "https://iaepune.com/IAE.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "German"],
    },
    sameAs: [
      "https://www.facebook.com/iae.pune",
      "https://twitter.com/IAEPune",
      "https://www.linkedin.com/company/iae-pune",
      "https://www.instagram.com/iae.pune",
    ],
    description:
      "IAE Pune offers German language courses, MBBS abroad admissions, and global career consultancy to students aspiring to study and work internationally.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Flat C1, Shree Ganesh Vihar,Kale Padal, Hadapsar",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411028",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <ModalProvider>
          <Header />
          {children}
          <Footer />
          <StructuredData />
        </ModalProvider>
      </body>
    </html>
  );
}
