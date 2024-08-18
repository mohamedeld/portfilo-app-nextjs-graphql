import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "../styles/index.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function App({ Component, pageProps }) {
  return (
    <div className="portfolio-app">
    <Navbar/>
   {Component.name === "Home" &&<Hero/>}
    <div className="container">
    <Component {...pageProps} />;
    </div>
    <Footer/>
    </div>
  )
  
}
