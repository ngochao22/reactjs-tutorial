import React from "react";
import ReactDOM from "react-dom/client";
const root = document.querySelector("#root");

//JSX = Javascript + XML ==> viết XMl trong js

//Quá trình biên dịch JSX của React

//JSX ==> Javascript Compiler(Babel, SWC) ==> React Element ==> Node Element ==> DOM Browser
const title = "Học lập trình không khó";
const element = (
    <div>
        <h1 id="title" className="title">
            {title}
        </h1>
        <h2 style={{ color: "red" }}>Học React còn dễ hơn</h2>
    </div>
);
ReactDOM.createRoot(root).render(element);
