import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers"; // Make sure this matches your actual file name
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex's Portfolio | Data Scientist & Software Engineer",
  description: "Passionate data scientist and software engineer creating innovative solutions with modern technologies.",
  keywords: ["Data Science", "Software Engineering", "Portfolio", "Alex"],
  authors: [{ name: "Alex" }],
  openGraph: {
    title: "Alex's Portfolio",
    description: "Data Scientist & Software Engineer",
    type: "website",
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}