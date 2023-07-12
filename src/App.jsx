import React from "react"
import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./Components/Shared/Nav"
import SideNav from "./Components/SideSlider/SideNav"

function App() {

  return (
    <>
      <Nav></Nav>
      <SideNav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </SideNav>
    </>
  )
}

export default App
