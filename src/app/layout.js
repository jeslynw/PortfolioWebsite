import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const hand = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata = {
  title: "Jeslyn Wangsa - Portfolio",
  description:
    "Jeslyn Wangsa — MITB (AI) at Singapore Management University. Projects in agentic AI, applied machine learning, and web systems.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦒</text></svg>",
  },
  openGraph: {
    title: "Jeslyn Wangsa - Portfolio",
    description:
      "Projects in agentic AI, applied machine learning, and web systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${sans.variable} ${hand.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
