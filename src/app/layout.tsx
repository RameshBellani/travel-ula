import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Ula", // Updated title
  description: "Your safari adventure awaits!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <img 
            src="https://travelula.com/wp-content/uploads/2023/04/travel_ula_header_logo.png" // Use the provided logo URL
            alt="Travel Ula Logo"
            className="h-12" // Adjust height as needed
          />
          <h1 className="text-2xl font-bold">Travel Ula</h1>
        </header>
        {children}
      </body>
    </html>
  );
}