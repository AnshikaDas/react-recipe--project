import React from 'react'
import { Route } from 'react-router-dom'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Routes path ='/recipies' element={<Recipies />} />
        <Route path="/about" element={<About />} />
        <Route path='/create-recipie' element={<Create />} />
    </Routes>
  )
}

export default Mainroutes
import Navbar from "./components/Navbar"
import Mainroutes from "../routes/Mainroutes"

const app = () => {
    return (
        <div className="py-10 "
    )
}