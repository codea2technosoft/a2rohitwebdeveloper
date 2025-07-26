import React from 'react'
import Slider from "../Component/Pages/Slider";
import Ourservice from "../Component/Pages/Ourservice";
import Howitwork from "../Component/Pages/Howitwork";
import Testimonials from "../Component/Pages/Testimonials";
import Aboutus from "../Component/Pages/Aboutus";
import Livestream from "../Component/Pages/Livestream";
import Livewatch from "../Component/Pages/Livewatch";
import Banner from "../Component/Pages/Banner";
import Header from "../Component/Layout/Header";
import Footer from "../Component/Layout/Footer";
function Home() {
  return (
  <>
  
  <Header />
       <Slider />
       <Livewatch/>
       <Ourservice/>
       <Livestream/>
       <Aboutus/>
       <Howitwork/>
       <Banner/>
       <Testimonials/>
       {/* <Footer/> */}
  </>
  )
}

export default Home
