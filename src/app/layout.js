import { JetBrains_Mono, Spectral } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const hand = Spectral({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata = {
  title: "Jeslyn Wangsa — Portfolio",
  description:
    "Jeslyn Wangsa — MITB (AI) at Singapore Management University. Projects in agentic AI, applied machine learning, and web systems.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦒</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning className={`${mono.variable} ${hand.variable}`}>
      <body className="font-mono">{children}</body>
    </html>
  );
}
