import React from "react";

const Ethernaut = ({ items }) => {
  return (
    <div className="section-center ethernaut-section">
      {items.map((EthernautItem) => {
        const { id, title, img, desc, price, url } = EthernautItem;
        return (
          <article key={id} className="menu-item">
            <header>
              <h4 style={{ color: "black" }}>{title}</h4>
            </header>
            <a href={url} className="item-image">
              <img src={img} alt={title} className="photo" />
            </a>
            <div className="item-info">{desc}</div>
          </article>
        );
      })}
    </div>
  );
};

export default Ethernaut;
