import "./globals.css";
import { Header } from "@/components";
import Footer from "@/components/footer/Footer";
import { globalMetadata } from "@/helpers/metadata";

export const metadata = globalMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
