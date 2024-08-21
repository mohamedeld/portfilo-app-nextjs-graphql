import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "../styles/index.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <div className="portfolio-app">
    <Navbar/>
   {Component.name === "Home" &&<Hero/>}
    <div className="container">
    <Component {...pageProps} />;
    </div>
    <Footer/>
    </div>
    </ApolloProvider>
  )
  
}
