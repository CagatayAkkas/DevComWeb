import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { links } from "./data";
import Navbar from "./Navbar";
import Menu from "./Pages/Menu";
import Categories from "./Categories";
import items from "./data";
import Ethernaut from "./Pages/Ethernaut";
import Algoritmalar from "./Pages/Algoritmalar";
import Roadmaps from "./Pages/Roadmaps";
import { EthernautItems } from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [ethernautItems, setEthernautItems] = useState(EthernautItems);
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
                  <h2>Ethernaut Görevleri</h2>
                  <div className="underline"></div>
                </div>
                <Ethernaut items={ethernautItems} />
              </section>
            </Route>
            <Route path="/Algoritmalar">
              <Algoritmalar />
            </Route>
            <Route path="/roadmaps">
              <Roadmaps />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
