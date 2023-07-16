import React from "react";
import banner from "../images/banner.jpg";
import banner1 from "../images/banner1.jpg";

function Home() {
  const handleDiscordClick = () => {
    // Handle the click event for the Discord link
    // For example, open the Discord link in a new tab
    window.open("https://discord.gg/PreBDJg48r");
  };

  return (
    <section className="home">
      <div className="background-image">
        {/* Replace the 'image-url' with the URL of your big image */}
        <img src={banner1} alt="Background" />

        <div className="image-overlay">
          {/* Replace 'Your Text' with the desired text for the overlay */}
          <h2>Your Text</h2>
          <p>Some additional information about your website</p>

          {/* Replace 'image-url' with the URL of your clickable image */}
          <img
            src={banner}
            alt="Clickable Image"
            onClick={handleDiscordClick}
          />

          {/* Replace 'Your Discord Link' with the desired text for the Discord link */}
          <p>
            Join our Discord community:{" "}
            <a href="https://discord.gg/PreBDJg48r">Gaza getiren davet</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
