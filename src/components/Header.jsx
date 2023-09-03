import Logo from "../assets/img/gradient-spicy-logo-template-design_23-2149641024.avif";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
    <img
    className="Logo"
    alt="Logo" 
    src={Logo} 
    />
    </a>
);

const Header = () => {
    return (
        <div className="Header">
            <Title />
            <div className="Nav-Items">
                <ul>
                    <li>
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    </li>
                    
                    <li>
                    <Link to="/About">
                    <li>About</li>
                    </Link>
                    </li>

                    <li>
                        <Link to="/Contact">
                        <li>Contact</li>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Instamart">
                        <li>Instamart</li>
                        </Link>
                    </li>

                    <li>Cart</li>
                
                </ul>
            </div>
        </div>
    );
};

export default Header; 