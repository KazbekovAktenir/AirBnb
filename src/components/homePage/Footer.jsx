import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://www.facebook.com/warnerbrosent/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/warnerbrosentertainment/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/user/WarnerBrosPictures">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://x.com/Warnerbros/?mx=2">
            <i className="fa-brands fa-google-plus"></i>
          </a>
        </div>
        <div className="footerNav">
          <nav>
            <ul>
              <li>
                <a href="">Популярные</a>
              </li>
              <li>
                <a href="">Искусство культура</a>
              </li>
              <li>
                <a href="">Природа</a>
              </li>
              <li>
                <a href="">Горы</a>
              </li>
              <li>
                <a href="">Пляжи</a>
              </li>
              <li>
                <a href="">Категории</a>
              </li>
              <li>
                <a href="">Чем заняться</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footerBottom">
        <p> Вдохновение для будущих поездок</p>
        <p>© 2024 Airbnb, Inc.</p>
        <li>
          <a href="https://ru.airbnb.com/help/article/2908">Условия</a>
        </li>
        <li>
          <a href="https://ru.airbnb.com/sitemaps/v2">Карта Сайта</a>
        </li>
        <li>
          <a href="https://ru.airbnb.com/help/article/2855">
            Конфиденциальность
          </a>
        </li>
        <li>
          <a href="https://ru.airbnb.com/help/sale-share-opt-out">
            Настройки Конфиденциальность
          </a>
        </li>
      </div>
    </footer>
  );
};

export default Footer;
