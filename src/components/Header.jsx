import { useState, useContext } from "react";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href="/">
    <img className ="h-40 p-3 bg-amber-200" alt="Logo"
    src={Logo}
    />
    </a>
);

const Header = () => {
    const [loggedin, setLoggedIn] = useState(false);

    const isOnline = useOnline();
    return (
        <div className="flex justify-between bg-amber-200 shadow-xl">
            <Title />
            <div className="nav-items ">
                <ul className="flex py-10">
                    <li className="px-4 font-semibold text-xl">
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    </li>
                    
                    <li className="px-4 font-semibold text-xl ">
                    <Link to="/About">
                    <li>About</li>
                    </Link>
                    </li>

                    <li className="px-4 font-semibold text-xl">
                        <Link to="/Contact">
                        <li>Contact</li>
                        </Link>
                    </li>

                    <li className="px-4 font-semibold text-xl">
                        <Link to="/Instamart">
                        <li>Instamart</li>
                        </Link>
                    </li>

                    <li className="px-4 font-semibold text-xl">
                        <Link to="/Cart">
                            <li>Cart</li>
                        </Link>
                    </li>

                    

                    
                
                </ul>
            </div>
        </div>
    );
};

export default Header; 