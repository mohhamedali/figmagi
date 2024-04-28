import React from "react"
import {Link} from "react-router-dom"
import Navbar from './Navbar'
let Home = () => {
    return (
        <>
        <Navbar/>
          <h1 style={{fontSize:"50px",margin:'auto',textAlign:"center"}}>This is Home page</h1>
        </>
    )
}
export default Home;