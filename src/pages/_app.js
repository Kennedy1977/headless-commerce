import "../app/globals.css";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import LoginPrompt from "../components/login-prompt/LoginPrompt";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <LoginPrompt />
      <main className="p-4 sm:p-12">
        <Breadcrumb />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
