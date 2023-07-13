import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price, url } = menuItem; // Add 'url' to destructuring
        return (
          <article key={id} className="menu-item">
            <a href={url}>
              <header>
                <h4 style={{ color: "black" }}>{title}</h4>
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

export default Menu;
