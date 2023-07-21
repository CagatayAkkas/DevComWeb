import React from "react";
import "../index.css";

const Medium = ({ items }) => {
  return (
    <div className="section-center square-layout">
      {items.map((MediumItem) => {
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
              <p className="description-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Medium;
