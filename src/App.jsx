import React from 'react'
import Navbar from "./Components/Navbar.jsx";

import Hero from './Components/Hero.jsx'
import Category from "./Components/Category.jsx";
import Mid from "./Components/Mid.jsx";
import Products from "./Components/Products.jsx";
import Banner from "./Components/Banner.jsx";
import News from "./Components/News.jsx";
import Bottom from "./Components/Bottom.jsx";
import Footer from './Components/Footer.jsx';
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
