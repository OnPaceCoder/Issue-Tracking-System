import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import { Container } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker created using NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AuthProvider>
          <Navbar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
