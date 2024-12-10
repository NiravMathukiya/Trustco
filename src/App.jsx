import React from "react"
import Navbar from "../src/components/Navbar"
// import Herosection, { CTAButton, FloatingProfiles } from "./components/Herosection"
import Herosection from "./components/Herosection"
import { TrustedPartners } from "./components/TrustedPartners"
// import { TrustPilot } from "./components/TrustPilot"

function App() {

  return (
    <>
    <Navbar />
    <Herosection/>
    <TrustedPartners />
    </>
  )
}

export default App
