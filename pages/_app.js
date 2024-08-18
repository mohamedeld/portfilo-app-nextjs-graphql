import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "../styles/index.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <main>
    <Component {...pageProps} />;
    </main>
    <Footer/>
    </>
  )
  
}
