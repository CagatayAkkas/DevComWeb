import React from "react";

const Ethernaut = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((EthernautItem) => {
        const { id, title, img, desc, price, url } = EthernautItem; // Add 'url' to destructuring
        return (
          <article key={id} className="menu-item">
            <header>
              <h4 style={{ color: "black" }}>{title}</h4>
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

export default Ethernaut;
