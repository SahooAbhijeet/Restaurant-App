import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import {cartItems} from "../Redux/Slices/cartSlice";

const HomeLayout = ({ children }) => {

    const cartItems = useSelector(store => store.cart?.items);
    console.log(cartItems);

    const changeWidth = () => {
        const drawerSide = document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width = "auto";
    }

    const hideDrawer = () => {
        const element = document.getElementsByClassName('drawer-toggle');
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width = 0;
    }

    return (
        <div className="min-h-[90vh]">
            <div className="drawer-absolute left-0 z-50 w-fit">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="cursor-pointer relative">
                            <FiMenu
                            onClick={changeWidth}
                            size={"40px"}
                            className="font-bold text-white m-6"
                            />
                        </label>
                    </div>
                    <div className="drawer-side w -0">
                        <label htmlFor="my-drawer" className="my-drawer-overlay"> 
                        </label>
                        <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
                            <li className="w-fit absolute right-2 z-50">
                                <button onClick={hideDrawer}>
                                    <AiFillCloseCircle size={24}/>
                                </button>
                            </li>
                            <li>
                                <Link to="/">
                                    <li>Home</li>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <li>About Us</li>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <li>Contact Us</li>
                                </Link>
                            </li>
                            <li>
                                <Link to="/instamart">
                                    <li>Instamart</li>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <li>Cart- {cartItems?.length}</li>
                                </Link>
                            </li>
                            </ul>                    
                    </div>
            </div>

            {children}



        </div>
    );
}

export default HomeLayout;