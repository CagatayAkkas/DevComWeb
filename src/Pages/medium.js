import React from "react";
import "../index.css";

const Medium = ({ items }) => {
  // Create a copy of the items array and reverse it
  const reversedItems = [...items].reverse();

  return (
    <div className="section-center square-layout">
      {reversedItems.map((MediumItem) => {
        const { id, title, img, desc, url } = MediumItem;
        return (
          <article key={id} className="menu-item">
            <header className="item-title">
              <h4 style={{ color: "black" }}>{title}</h4>
            </header>
            <a href={url} className="item-image">
              <img src={img} alt={title} className="photo" />
            </a>
            <div className="item-info">
              <div className="description-text-container">
                <p className="description-text">{desc}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Medium;
