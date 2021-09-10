import React from 'react'
import Navbar from './Navbar'

function Header(){
    return(
        <>
        <div id='main'>
            <Navbar/>
            <div className="name">
                <h1><span>Download JEE & NEET </span>all best and required books</h1>
                <p className="details">this app contains all the important books for competetion and completely free -- made by ABHAY RANA</p>
                <a href="#" className="cv-btn">Download</a>
            </div>
        </div>
        </>
        
    )
}

export default Header;