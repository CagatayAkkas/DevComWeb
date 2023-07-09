import React from "react";

const Ethernaut = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((EthernautItem) => {
        const { id, title, img, desc, price, url } = EthernautItem; // Add 'url' to destructuring
        return (
          <article key={id} className="menu-item">
            <a href={url}>
              <header>
                <h4>{title}</h4>
              </header>
              <img src={img} alt={title} className="photo" />
            </a>
            <div className="item-info"></div>
          </article>
        );
      })}
    </div>
  );
};

export default Ethernaut;
