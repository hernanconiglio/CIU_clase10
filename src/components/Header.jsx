import React from "react";
import logoV from '../img/gonzalezYNietosLogo.jpg'

const Header = (props) => {
    return (
        <div>
            <nav id="menu">
                <ul>
                    <img id="logoV" src={logoV} alt="logoV"/>
                </ul>
            </nav>
        </div>
    );
};

export default Header;