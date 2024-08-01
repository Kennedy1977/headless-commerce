import "../app/globals.css";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="p-4 sm:p-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
