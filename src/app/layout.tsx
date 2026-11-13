import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dancer-fitness.com"),
  title: {
    default: "Dancer Fitness — Exercises & Training Plans Designed for Dancers",
    template: "%s | Dancer Fitness"
  },
  description: "Handpicked exercises and skill-specific training plans designed exclusively for competitive dancers and the coaches who train them. Created by Katie Groven.",
  keywords: [
    "dancer fitness",
    "dance conditioning",
    "dance workouts",
    "dance training plans",
    "dancer flexibility",
    "dance jumps and turns",
    "strength training for dancers",
    "Katie Groven"
  ],
  authors: [{ name: "Katie Groven", url: "https://dancer-fitness.com" }],
  creator: "Katie Groven",
  publisher: "Dancer Fitness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Dancer Fitness — Safe, Practical Exercises and Training Plans for Dancers",
    description: "Handpicked exercises and skill-specific training plans designed exclusively for dancers and the coaches who train them.",
    url: "https://dancer-fitness.com",
    siteName: "Dancer Fitness",
    images: [
      {
        url: "/assets/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Dancer Fitness - Designed exclusively for dancers"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dancer Fitness — Strength, Flexibility & Technique for Dancers",
    description: "Hundreds of dancer-specific conditioning exercises and ready-made training plans for studios, coaches, and dancers.",
    images: ["/assets/homepage.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/assets/df-favicon.png" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/assets/df-favicon.png",
    apple: "/assets/df-favicon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">

        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6af6b9963aac6e3c4551a5a2/1k79s9tkv';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dancer Fitness",
              url: "https://dancer-fitness.com",
              logo: "https://dancer-fitness.com/wp-content/uploads/2021/09/df-logo.png",
              founder: {
                "@type": "Person",
                name: "Katie Groven",
                jobTitle: "Founder & Personal Trainer"
              },
              sameAs: [
                "https://www.instagram.com/dancer_fitness/",
                "https://www.facebook.com/dancerfitnessofficial",
                "https://www.youtube.com/@dancerfitness"
              ],
              description:
                "Strength training plans, exercises and conditioning programs engineered specifically for dancers and coaches."
            })
          }}
        />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
