// Quá trình render
// JS: Node Element ==> DOM Browser
//React: React Element ==> Thông qua ReactDOM ==> Node Element ==> DOM Browser
import React from "react";
import ReactDOM from "react-dom/client";
const root = document.querySelector("#root");
const h1 = React.createElement(
    "h1",
    {
        id: "title",
        className: "title",
        onClick: (e) => {
            console.log("hello ae");
            e.target.style.color = "red";
        },
    },
    "Hello ae f8"
);
const h2 = React.createElement("h2", {}, "Hoc react khong kho");
// const div = React.createElement("div", {}, h1, h2);
const liList = Array(100)
    .keys()
    .map((value) => {
        return React.createElement("li", {}, `Item ${value + 1}`);
    });
const ul = React.createElement("ul", {}, ...liList);
const fragment = React.createElement(React.Fragment, {}, h1, ul, h2);
ReactDOM.createRoot(root).render(fragment);

//Bài tập:
//Tạo thẻ ul và đưa vào trước thẻ h2
//Tạo 100 thẻ li đưa vào trong thẻ ul: Item 1, Item 2,... Item 100
