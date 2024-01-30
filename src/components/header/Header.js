import { NavLink } from 'react-router-dom';
import "./Header.css";
import Logo from "../../assets/Logo12.png";
import { useState } from 'react';


function Header () {
   
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return <>
        <nav className="navbar">
            <div className="container">
                <NavLink exact="true" to="/" className="logo">
                    <img className="img" src={Logo} alt="logo" />
                    Logo
                </NavLink>
                
                <ul className={click ? "menu active" : "menu"}>
                    <li className="item">
                        <NavLink  exact="true" to="/main" activeclassname="active" className="links" onClick={handleClick}>
                            Main
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact="true" to="/services" activeclassname="active" className="links" onClick={handleClick}>
                            Services
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink exact="true" to="/aboutUs" activeclassname="active" className="links" onClick={handleClick}>
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <div className="navIcon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    </>;
}

export default Header;