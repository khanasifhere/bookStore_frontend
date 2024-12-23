import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
 function ContactFull(){
    return (
        <>
      <Navbar />
      <div className=" min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
    );
};
export default ContactFull