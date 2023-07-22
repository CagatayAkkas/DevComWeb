import React from "react";
import "../index.css";

const Youtube = ({ items }) => {
  // Create a copy of the items array and reverse it
  const reversedItems = [...items].reverse();

  return (
    <div className="section-center square-layout">
      {reversedItems.map((YoutubeItems) => {
        const { id, title, img, desc, url } = YoutubeItems;
        return (
          <article key={id} className="menu-item">
            <header className="item-title">
              <h4 style={{ color: "black" }}>{title}</h4>
            </header>
            <a href={url} className="item-image">
              <img src={img} alt={title} className="photo" />
            </a>
            <div className="item-info">
              <p className="description-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Youtube;
