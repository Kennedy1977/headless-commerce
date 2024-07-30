import "./globals.css";
import { Header } from "@/components";
import Footer from "@/components/footer/Footer";
import { globalMetadata } from "@/helpers/metadata";

export const metadata = globalMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
