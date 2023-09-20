import { useContext } from  "react";
import UserContext from "../utils/UserContext";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
    const {user} = useContext(UserContext);
    const currentdate = new Date();
    const year = currentdate.getFullYear();

    return (
        <>
        <footer className="relative left-0 bottom-0 h-10 py-8 flex flex-col sm:flex-row items-center justify-between  bg-gray-800 sm:px-20">
            <section className="text-2xl ">
                Copyright {year} | All Rights Reserved
            </section>
            <section className="flex items-center justify-center gap-5 text-3xl text-white">
                <a className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                    <BsFacebook />
                </a>
                <a className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                    <BsInstagram />
                    </a>
                <a className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                    <BsLinkedin />
                    </a>
                <a className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                    <BsTwitter />
                </a>
            </section>
        </footer>

        <h4 className="p-10 m-10"> 
        This site is developed by {user.name} - {user.email}
        </h4>
        </>
       
    ); 
};


export default Footer;