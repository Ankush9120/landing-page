import { useState, useEffect } from "react";
import KamunityImage from "../assets/logo.png";
import LightKamunityImage from "../assets/lightLogo.png";
import MenuLogo from "../assets/images/navbar/MenuLogo";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const [toggleDropdown, setToggleDropDown] = useState(false);

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollpos = window.pageYOffset;
    setPrevScrollpos(currentScrollpos);
    const visible = prevScrollpos > currentScrollpos;
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width < 1000) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  }, [width]);

  return (
    <nav
      style={{
        top: visible ? "0" : "-85px",
        background: prevScrollpos > 200 ? "#1c1c27" : "transparent",
      }}
    >
      <div className="logo">
        <img src={KamunityImage} alt="Kamunity" />
        <img hidden src={LightKamunityImage} alt="Kamunity" />
      </div>

      <div
        hidden
        onClick={() => setMobileMenu(!mobileMenu)}
        className="menuLogo"
      >
        <MenuLogo />
      </div>

      {mobileMenu && (
        <div className="menu">
          <ul className="navigator">
            <li onClick={() => setMobileMenu(false)}>Home</li>
            <>
              <li>About</li>
              <li>Product</li>
              <li>Forums</li>
            </>

            <div hidden>
              <li>Transactions</li>
              <li>Holdings</li>
              <li
                className={`insights ${toggleDropdown && "toggled"}`}
                onClick={() => setToggleDropDown(!toggleDropdown)}
              >
                <span className="li">Insights</span>
                {toggleDropdown && (
                  <div className="dropDown">
                    <li onClick={() => setToggleDropDown(false)}>
                      Spend By Category
                    </li>
                    <li onClick={() => setToggleDropDown(false)}>
                      Spend By Merchant
                    </li>
                  </div>
                )}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="48"
                    d="M112 184l144 144 144-144"
                  />
                </svg>
              </li>
              <li>Insights - Graphs</li>
            </div>
          </ul>

          <div className="loginSignup">
            <>
              <button className="btn1" onClick={() => setMobileMenu(false)}>
                Login
              </button>
              <button className="btn2" onClick={() => setMobileMenu(false)}>
                Sign Up
              </button>
            </>

            <button hidden className="btn3">
              Logout
            </button>
          </div>
        </div>
      )}

      {toggleDropdown && (
        <div
          className="dropdownBackdrop"
          onClick={() => setToggleDropDown(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
