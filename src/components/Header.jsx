import Logo from "../assets/img/gradient-spicy-logo-template-design_23-2149641024.avif";
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                
                </ul>
            </div>
        </div>
    );
};

export default Header; 