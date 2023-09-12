import React, {lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

 const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Abhijeet Sahoo",
        email: "support@dev.com",
    });
    
    return (
        <Provider store={store}>
        <UserContext.Provider
        value={{
            user: user,
            setUser: setUser,
          }}
        >
        <Header />
        <Outlet />
        <Footer />
        </UserContext.Provider>
        </Provider>
    );
 };

 const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body user={{
                    name: "restro",
                    email: "support@restro.com",
                }} />
            },
            {
                path: "/About",
                element: (
                <Suspense fallback={
                    <div className="container">
                        <h1> Loading ..... </h1>
                    </div>
                }
                >
                    <About />
                </Suspense>
                ),
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
              path: "/Cart",
              element: <Cart />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                <Suspense fallback = {<Shimmer />}> 
                   {" "}
                    <Instamart /> 
                </Suspense>
                ),
            },
        ],
    },
]);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root 

root.render(<RouterProvider router={appRouter} />);   