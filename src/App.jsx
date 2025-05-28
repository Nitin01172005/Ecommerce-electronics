import React from 'react'
import Navbar from "./Components/Navbar.jsx";

import Hero from './Components/Hero'
import Category from './Components/Category'
import Mid from './Components/Mid'
import Products from './Components/Products'
import Banner from './Components/Banner'
import News from './Components/News'
import Bottom from './Components/Bottom'
import Footer from './Components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[])


  return (
    <div className=' dark:bg-gray-900'>
    <Navbar />
    <Hero />
    <Category />
    <Mid />
    <Products />
    <Banner />
    <News />
    <Bottom />
    <Footer />
    </div>
  )
}

export default App
