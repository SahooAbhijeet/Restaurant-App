import  React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header 
 *   - Logo
 *   - Nav-items
 *   - Cart
 * Body
 *    - Search-bar
 *    - Restaurant-List
 *        - Restaurant-Card
 *             - Image
 *             - Name
 *             - Ratings
 *             - Cusines
 * Footer
 *    - Links
 *    - Copyright
 */
const Title = () => (
    <a href="/">
    <img
    className="Logo"
    alt="Logo" 
    src="https://th.bing.com/th/id/OIP.sEQoAUtBqtmJdj2ycEh3XAHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
    />
    </a>
)

const HeaderComponent = () => {
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


const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root 

root.render(<HeaderComponent />);