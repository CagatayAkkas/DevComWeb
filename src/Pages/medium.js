import React from "react";

const Medium = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((MediumItem) => {
        const { id, title, img, desc, price, url } = MediumItem;
        return (
          <article key={id} className="menu-item">
            <header>
              <h4 style={{ color: "black" }}>{title}</h4>
              <p className="description-text">{MediumItem.desc}</p>
            </header>
            <div className="item-info"></div>
            <a href={url}>
              <img src={img} alt={title} className="photo" />
            </a>
          </article>
        );
      })}
    </div>
  );
};

export default Medium;
