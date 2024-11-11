import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

import Loader from "./components/Loader";
const App = () => {
  let [isLoading,setLoading]=useState(true);
  setTimeout(
    ()=>{
      setLoading(false)
    },1500)
  return (
    !isLoading? (<>
      <Header />
      <LandingPage/>
      <About/>
      <Services/>
      <Projects/>
      <Experiences/>
      <Contact />
      <Footer />
    </>):(
      <Loader/>
    )
  );
};

export default App;
