import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

 const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
 };


 
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root 

root.render(<AppLayout />);