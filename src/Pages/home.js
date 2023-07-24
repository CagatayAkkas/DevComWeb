import React from "react";
import bannerImage from "../images/banner1.jpg";
import "../index.css";
import discordButton from "../images/discord.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="navbar">
        {/* Your navigation links and other elements in the navbar */}
      </div>
      <div className="content"></div>
      <div className="background-container">
        <div className="description-and-image">
          <p className="website-description">
            Sitemiz açık kaynaktır. Sizde sağ üstteki GitHub logosuna tıklayarak
            kendi sekmenizi ekleyebilirsiniz.
          </p>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${bannerImage})` }}
          ></div>
        </div>
        <div className="discord-button-container">
          <a
            href="https://discord.gg/PreBDJg48r"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <img
              src={discordButton}
              alt="Discord Button"
              className="discord-button"
            /> */}
          </a>
        </div>
      </div>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Developer Community
      </footer>
    </div>
  );
};

export default HomePage;
