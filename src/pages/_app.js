import "../app/globals.css";
import { Header } from "@/components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="px-12 py-6">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
