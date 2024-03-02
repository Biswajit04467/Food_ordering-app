import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantPage from "./components/RestaurantPage";
// import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import('./components/Grocery'))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
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
                path: "/restaurants/:resId",
                element: <RestaurantPage />
            }
        ],
        errorElement: <Error />
    }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<RouterProvider router={appRouter} />); 