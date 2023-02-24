import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const HeaderComponet = () => {
  return (
    <div className="header">
      <a className="logo" href="/">
        <img
          crossOrigin="Anonymous"
          src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
        />
      </a>
      <ul>
        <li>
          <input type={Text} id="idSearchBar" />
        </li>
        <li>
          <a>
            <img
              className="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1I10m3DSqbPRLB01qyAF41xuuQXboajkzA&usqp=CAU"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
const LogoComponent = function () {
  return (
    <li>
      <img
        width={50}
        height={50}
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F10%2F23%2F06%2F04%2Fgoogle-1762248__340.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flogo%2F&tbnid=I2AJF1n49mOE7M&vet=12ahUKEwiWxd_D86j9AhWa93MBHQB-ChMQMygAegUIARDcAQ..i&docid=bVXxrJ-DMFgyIM&w=604&h=340&q=logo%20img&ved=2ahUKEwiWxd_D86j9AhWa93MBHQB-ChMQMygAegUIARDcAQ"
      />
    </li>
  );
};
const SearchBarComponent = () => (
  <li>
    <input type={Text} id="idSearchBar" />
  </li>
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<HeaderComponet />);
