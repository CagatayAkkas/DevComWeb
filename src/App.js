import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { links } from "./data";
import Navbar from "./Navbar";
import Menu from "./Pages/Menu";
import Categories from "./Categories";
import items from "./data";
import Ethernaut from "./Pages/Ethernaut";
import Algoritmalar from "./Pages/Algoritmalar";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <main>
        <Router>
          <Navbar links={links} />
          <Switch>
            <Route exact path="/">
              <section className="menu section">
                <div className="title">
                  <h2>LeetCode Görevleri</h2>
                  <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
              </section>
            </Route>
            <Route exact path="/Ethernaut">
              <section className="menu section">
                <div className="title">
                  <h2>Ethernaut Görevleri </h2>
                  <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Ethernaut items={menuItems} />
              </section>
            </Route>
            <Route path="/Ethernaut" component={Ethernaut} />
            <Route path="/Algoritmalar" component={Algoritmalar} />
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
