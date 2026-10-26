import "./globals.css";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "./contexts/DarkModeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Abdul Rehman | Backend Full Stack & Zoho Developer | AI & MCP Automation",
  description:
    "Portfolio of Abdul Rehman - Backend-Focused Full Stack Developer (MERN, REST APIs, Webhooks) and Zoho Developer (CRM, Flow, Creator, Deluge, MCP AI Automation).",
  keywords: [
    "Abdul Rehman",
    "Full Stack Developer",
    "Backend Developer",
    "Zoho Developer",
    "Zoho CRM",
    "Zoho Flow",
    "Zoho Creator",
    "Deluge",
    "Model Context Protocol",
    "Zoho MCP",
    "AI Automation",
    "MERN Stack",
    "Node.js",
    "MongoDB",
    "Whisper AI",
    "Oracle Integration"
  ],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rehman1.vercel.app",
    title: "Abdul Rehman | Backend Full Stack & Zoho Developer",
    description:
      "Backend Full Stack JavaScript & Zoho Developer with 1+ year experience building MERN apps, complex third-party integrations (Zoho, Oracle, Google Drive), and AI automations.",
    siteName: "Abdul Rehman Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased selection:bg-indigo-500 selection:text-white`}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
