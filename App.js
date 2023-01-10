import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "idh1", name: "headimgTag" },
  "Created by React 1"
);

const heading2 = React.createElement("h2", {}, "Created By React 2");

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
console.log(heading);
console.log(heading);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(container);

// const heading=document.createElement("h1");
// heading.innerHTML="From Jss";

// const root=document.getElementById("root");
// root.appendChild(heading);
