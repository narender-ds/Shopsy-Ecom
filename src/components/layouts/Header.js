import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import animation from "react-animations/lib/swing";
import Hlogo from "../../assets/images/HLogo.png";
import SearchIcon from "../../assets/images/icon/search.png";
import CartIcon from "../../assets/images/icon/CartIcon.png";
import HeartIcon from "../../assets/images/icon/heart.png";
import { cartTotalSelector } from "../../redux/Selectors";
import { toggle } from "../../redux/slice/uiSlice";
import styled, { keyframes } from "styled-components";
const styledAnimation = keyframes`${animation}`;
const NavIconWrapper = styled.div`
  position: relative;
`;

const Bubble = styled.div`
  position: absolute;
  top: -40%;
  right: -40%;
  padding: 0 4px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  text-align: center;

  border-radius: 2px;
  animation: ${(p) => (p.change ? styledAnimation : null)} 1s;
`;
const Header = () => {
  const total = useSelector(cartTotalSelector);
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (total !== 0) {
      setChange(true);

      setTimeout(() => {
        setChange(false);
      }, 1000);
    }
  }, [total]);
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__right">
                  <input
                    type="text"
                    id="search-input"
                    style={{ width: "80%" }}
                    placeholder="Search here....."
                  />{" "}
                  <img src={SearchIcon} alt="" />
                </div>
              </div>

              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link to="/login">Sign in</Link>
                    <Link to="#">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down" />
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="/Home">
                  <img
                    src={Hlogo}
                    style={{ height: "100px", width: "100px" }}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/Home">Home</Link>
                  </li>
                  <li>
                    <Link to={"/shop"}>Shop</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shop-details">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="/shopping-cart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Check Out</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <Link to="/search" className="search-switch">
                  <img src={SearchIcon} alt="" />
                </Link>
                <Link to="#">
                  <img src={HeartIcon} alt="" />
                </Link>

                <NavIconWrapper
                  onClick={() => {
                    dispatch(toggle());
                  }}
                >
                  {/* <Link to="/Shopping-cart"> */}
                  <img
                    src={CartIcon}
                    style={{ width: "17%", marginBottom: "20%" }}
                    alt=""
                  />
                  <Bubble change={change}>{total}</Bubble>
                  {/* </Link> */}

                  {/* <div className="price">$0.00</div> */}
                </NavIconWrapper>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
