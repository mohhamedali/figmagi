import React from "react"
import {Link} from "react-router-dom"
let Navbar = () => {
    return (
        <>
            <div style={{ backgroundColor: "green", display: "flex", width:"full", justifyContent: "between", alignItems:"center",padding:'10px'}}>
            <div style={{width:'30%'}}>
            <Link to='/' style={{ cursor: 'pointer', fontSize: "30px", color: 'yellow',textDecoration:"none" }}>Home</Link>
            </div>
               

                <div style={{ padding: '8px', display: "flex", gap: '40px',  justifyContent: "end",width:'70%' }}>
                    <Link to='/signin' style={{ cursor: 'pointer', fontSize: "20px",color: 'white',textDecoration:"none" }}>Sign In</Link>
                    <Link to='/signup'  style={{ cursor: 'pointer',fontSize: "20px",color: 'white',textDecoration:"none" }}>SignUp</Link>
                    <Link to='/create'  style={{ cursor: 'pointer',fontSize: "20px",color: 'white',textDecoration:"none" }}>Create</Link>
                    <Link to='/color' style={{ cursor: 'pointer',fontSize: "20px",color: 'white',textDecoration:"none" }}>Color</Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;