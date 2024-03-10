import React, { Component, Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";
import UserContext2 from "./components/utils/context/UserContext2";
import { Provider } from "react-redux";
import appStore from "./components/Redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => {

    const [userName, setUserName] = useState();

    // User Authentication 

    useEffect(() => {

        // fetching api 

        const data = {
            name: "Biswajit Das"
        }
        setUserName(data.name);

    }, [])


    return (
        <Provider store={appStore}>
            <UserContext2.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext2.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>loading....</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantPage />
            }
        ],
        errorElement: <Error />
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); 