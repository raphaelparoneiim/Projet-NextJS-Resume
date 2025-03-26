import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Portfolio></Portfolio>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
  </>
}