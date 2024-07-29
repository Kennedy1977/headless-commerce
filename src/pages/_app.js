import "../app/globals.css";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="px-12 py-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
