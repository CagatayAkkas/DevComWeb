import React from "react";
import bannerImage from "../images/banner1.jpg";
import "../index.css";
import discordButton from "../images/discord.png";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        <div className="content">
          <h1></h1>
          <p></p>
          <a
            href="https://discord.gg/PreBDJg48r"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={discordButton}
              alt="Discord Button"
              className="discord-button"
            />
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
