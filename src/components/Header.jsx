import Logo from "../assets/vecteezy_vintage-grilled-barbecue-logo-retro-bbq-vector-fire-grill_6735689.jpg";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
    <img className ="h-28 p-3" alt="Logo" 
    src={Logo}
    />
    </a>
);

const Header = () => {
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