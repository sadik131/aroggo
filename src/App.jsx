import React from "react"
import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Nav from "./Components/Shared/Nav"

function App() {

  return (
    <>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
      </Routes>
    </>
  )
}

export default App
