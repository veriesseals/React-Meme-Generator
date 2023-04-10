import React from "react"
import TrollFace from '../components/img/troll-face.png';

function Header() {
    return (
        <header className="container header">
            <img 
                src={TrollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header;