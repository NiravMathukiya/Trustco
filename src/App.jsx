import React from "react"
import Navbar from "../src/components/Navbar"
// import Herosection, { CTAButton, FloatingProfiles } from "./components/Herosection"
import Herosection from "./components/Herosection"
import { TrustedPartners } from "./components/TrustedPartners"
import SalesSection from "./components/SalesSection"
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
            <div>
              <MarketingHero />
              <Leftsideimageofcompany />
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
