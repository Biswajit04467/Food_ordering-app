import React from "react";
import ReactDOM  from "react-dom/client";

{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}

// const heading=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"abcd")));

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const heading=React.createElement("h1",{id:"heading"},"Hello world");

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);