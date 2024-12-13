import React from "react"
import Navbar from "../src/components/Navbar"
import Herosection from "./components/Herosection"
import { TrustedPartners } from "./components/TrustedPartners"
import SalesSection, { VideoCardHeaderSection, VideoCardSection } from "./components/SalesSection"
import PointsSection, { Infrocard } from "./components/PointsSection"
import InformationSection, { Leftsideimageofcompany } from "./components/InformationSection"
import StatCounter from "./components/Countup"
import Testimonials from "./components/Testimonials"
import FounderSection from "./components/FounderSection"
import BlogSection from "./components/BlogSection"
import Banner from "./components/AdBanner"
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom'
import Herosectiontext from "./components/Herosectiontext"
import Laptop from "./components/Laptop";
import StatCounter2 from "./components/counter2"
import PointsSectiontext from "./components/PointsSectiontext"
import MarketingHero from "./components/Marketin-hero"
import SplitedConterner, { Dimondcardcomponent, DimondcardcomponentText } from "./components/SplitedConterner"
import Integrationcardmain from "./components/Integrationcard"
import TestimonialSlider from './components/TestimonialSlider'
import Herosectionofgrided from "./components/herosectionofgrided"
import TeamGrid from "./components/Teamgrid"
import CareerSection from "./components/CareerSection"

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/1"
          element={
            <>
              <Navbar />
              <Herosection />
              <TrustedPartners />
              <SalesSection />
              <PointsSection />
              <InformationSection />
              <StatCounter />
              <FounderSection />
              <Testimonials />
              <BlogSection />
              <Banner />
              <Footer />
            </>
          }
        />

        <Route path="/2" element={
          <>
            <Navbar />
            <Herosectiontext />
            <Laptop />
            <StatCounter2 />
            <div className="bg-[#003153] py-8">
              <PointsSectiontext />
              <Infrocard />
            </div>
            <SplitedConterner />
            <Integrationcardmain />
            <div className=" grid md:grid-cols-2 justify-center items-center bg-[#003652]">
              <VideoCardSection />
              <VideoCardHeaderSection />
            </div>
            <BlogSection />
            <TestimonialSlider />
            <Banner />
            <TrustedPartners />
            <Footer />
          </>
        } />


        <Route path="/3"
          element={
            <>
              <Navbar />
              <Herosectionofgrided />
              <StatCounter />
              <div className="grid md:grid-cols-2 px-8 h-full my-14">
                <Dimondcardcomponent />
                <DimondcardcomponentText />
              </div>
              <TeamGrid />
              <CareerSection />
              <Banner />
              <Footer />  
            </>
          } />
      </Routes>
    </>
  )
}

export default App
