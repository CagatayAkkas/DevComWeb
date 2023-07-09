import React from "react";

const Ethernaut = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, title, img, desc, price, url } = menuItems; // Add 'url' to destructuring
        return (
          <article key={id} className="menu-item">
            <a href={url}>
              <img src={img} alt={title} className="photo" />
            </a>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Ethernaut;
