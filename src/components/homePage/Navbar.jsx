import React, { useEffect, useRef, useState } from "react";
import Arctic from "./assets/Arctic.jpg";
import Camping from "./assets/Camping.jpg";
import Luxe from "./assets/Luxe.jpg";
import Top_cities from "./assets/Top_cities.jpg";
import Trending from "./assets/Trending.jpg";
import Tropical from "./assets/Tropical.jpg";
import Yurts from "./assets/Yurts.jpg";
import Design from "./assets/Design.jpg";
import Lake from "./assets/Lake.jpg";
import Farms from "./assets/Farms.jpg";
import Golfing from "./assets/Golfing.jpg";
import prev from "./assets/prev.png";
import next from "./assets/next.png";
import avatar from "./assets/avatar_icon.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Navbar = () => {
  const { checkAuth, currentUser, handleLogOut } = useAuth();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const sliderRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      setShowPrev(sliderRef.current.scrollLeft > 0);
      setShowNext(
        sliderRef.current.scrollWidth >
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth + 1
      );
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a href="" onClick={() => navigate("/")}>
          <img
            className="logo"
            width={140}
            height={80}
            src="https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/6387b574438cb3aac7fcf8c5_8QxOTbpyisEwldvyhwvfa_LhpqNLyGmJagh6i7fTgqg.png"
            alt=""
          />
        </a>
        {currentUser ? (
          <>
            <ul className="navbar_cart">
              <li onClick={() => navigate("/cart")}>Cart</li>
            </ul>
          </>
        ) : null}
        <div className="place">
          <span onClick={() => navigate("/addApartment")}>
            Airbnb your home
          </span>
        </div>
        <div className="avatar_box">
          <button className="avatar_icon" onClick={toggleMenu}>
            <div className="avatar_spans">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={avatar} alt="" />
          </button>
          {menuVisible && (
            <div className="avatar_menu">
              <ul>
                <li onClick={() => navigate("/sign-in")}>Log in</li>
                <li onClick={() => navigate("/sign-up")}>Sign up</li>
                <li>Rent your place</li>
                <li>Help center</li>
                {currentUser && <li onClick={handleLogOut}>Logout</li>}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="bar">
        <div className="location">
          <p>Location</p>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="check-in">
          <p>Check in</p>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="check-out">
          <p>Check out</p>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="guests">
          <p>Guests</p>
          <input type="text" placeholder="Add guests" />
          <span>
            <i className="lni lni-search-alt"></i>
          </span>
        </div>
      </div>
      <div className="slider-container">
        {showPrev && (
          <button className="prev_controlls" onClick={scrollLeft}>
            <img src={prev} alt="Prev" />
          </button>
        )}
        <div className="slider_category" ref={sliderRef}>
          <label className="slider_category_card">
            <img src={Arctic} alt="Arctic" />
            <span>Arctic</span>
          </label>
          <label className="slider_category_card">
            <img src={Camping} alt="Camping" />
            <span>Camping</span>
          </label>
          <label className="slider_category_card">
            <img src={Luxe} alt="Luxe" />
            <span>Luxe</span>
          </label>
          <label className="slider_category_card">
            <img src={Top_cities} alt="Top cities" />
            <span>Top cities</span>
          </label>
          <label className="slider_category_card">
            <img src={Trending} alt="Trending" />
            <span>Trending</span>
          </label>
          <label className="slider_category_card">
            <img src={Tropical} alt="Tropical" />
            <span>Tropical</span>
          </label>
          <label className="slider_category_card">
            <img src={Yurts} alt="Yurts" />
            <span>Yurts</span>
          </label>
          <label className="slider_category_card">
            <img src={Design} alt="Design" />
            <span>Design</span>
          </label>
          <label className="slider_category_card">
            <img src={Lake} alt="Lake" />
            <span>Lake</span>
          </label>
          <label className="slider_category_card">
            <img src={Farms} alt="Farms" />
            <span>Farms</span>
          </label>
          <label className="slider_category_card">
            <img src={Golfing} alt="Golfing" />
            <span>Golfing</span>
          </label>
        </div>
        {showNext && (
          <button className="next_controlls" onClick={scrollRight}>
            <img src={next} alt="Next" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
