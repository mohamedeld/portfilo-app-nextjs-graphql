import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { getSession, SessionProvider } from "next-auth/react"

import "@/styles/globals.css";
import "../styles/index.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

export const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
    <div className="portfolio-app">
    <Navbar/>
   {Component.name === "Home" &&<Hero/>}
    <div className="container">
    <Component {...pageProps} />;
    </div>
    <Toaster/>
    <Footer/>
    </div>
    </SessionProvider>
    </ApolloProvider>
  )
  
}


export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props:{
      session
    }
  }
}