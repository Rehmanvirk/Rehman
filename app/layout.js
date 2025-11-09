import "./globals.css";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Head from "next/head"; // Import Head

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abdul Rehman - Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN stack with hands-on experience in building and deploying scalable web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
