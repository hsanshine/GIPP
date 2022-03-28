import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Backdrop from "./Backdrop";
import Nav from "./Nav";
import "./Layout.css";
const Layout = (props) => {
  const [showAside, setShowAside] = useState(false);

  const handleMenuToggle = () => {
    setShowAside((prevState) => !prevState);
  };

  return (
    <div>
      <Header onMenuToggle={handleMenuToggle} />
      <div className="main-div">
        {showAside && <Backdrop onClick={handleMenuToggle} />}
        {showAside && (
          <aside className={`nav aside-mobile`} onClick={handleMenuToggle}>
            <Nav />
          </aside>
        )}
        {!showAside && (
          <aside className={`nav aside-large`}>
            <Nav />
          </aside>
        )}

        <div className="page-area">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
