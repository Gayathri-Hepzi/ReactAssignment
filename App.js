import React, { Component } from "react";
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
//reactRoot.render(container);
// JSX way for writing - JSX is html like syntax

const headingjsx = <h1>Heading from JSX </h1>;
//reactRoot.render(headingjsx);

//********* Functional componrnt-React Component - JS function, that returns
// react element,JSX code,
//use react elemnet inside functional component
const HeaderComponent = () => {
  return (
    <div>
      {headingjsx}
      <headerComp2 />
      <h1>React header component</h1>
      <h2>React Header component 2</h2>
    </div>
  );
};

const headerComp2 = function () {
  return <div>React function component is normal JS function</div>;
};

const HeaderComponent3 = () => (
  <div>Amother way to write functional component</div>
);

//How to render functional component enclose in </> self closing tag

reactRoot.render({ HeaderComponent });

//*********** samples**********//
// const heading=document.createElement("h1");
// heading.innerHTML="From Jss";

// const root=document.getElementById("root");
// root.appendChild(heading);

//***********JSX samples**********//
// function disname(user) {
//   return user.fname;
// }
// const user = { fname: "Billa", lname: "lbilla" };
// const logindeatils = <h1>Hello, {disname(user)} </h1>;
// reactRoot.render(logindeatils);
