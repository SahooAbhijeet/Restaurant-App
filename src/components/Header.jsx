const Title = () => (
    <a href="/">
    <img
    className="Logo"
    alt="Logo" 
    src="https://th.bing.com/th/id/OIP.sEQoAUtBqtmJdj2ycEh3XAHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
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