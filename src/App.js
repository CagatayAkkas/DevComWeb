import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MediumItems, YoutubeItems, links } from "./data";
import Navbar from "./Navbar";
import Menu from "./Pages/Menu";
import Categories from "./Categories";
import items from "./data";
import Ethernaut from "./Pages/Ethernaut";
import Medium from "./Pages/medium";
import Youtube from "./Pages/youtube";
import Algoritmalar from "./Pages/Algoritmalar";
import Roadmaps from "./Pages/Roadmaps";
import Home from "./Pages/home";
import { EthernautItems } from "./data";
import EthernautImage from "./images/Ethernaut.jpeg";

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
            <Route exact path="/LeetCode">
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
              <section className="menu section ethernaut-background">
                {/* Add the ethernaut-background class */}
                <div className="title">
                  {/* Header with the title "Ethernaut" */}
                  <h2>Ethernaut</h2>
                  <div className="underline"></div>
                </div>
                <div className="ethernaut-description">
                  <p className="description-text">
                    Ethernaut: OpenZeppelin 'in hazırladığı, Solidity ile
                    yazılan akıllı kontratların açıklarını bulma ve bu
                    açıklardan yararlanarak kontrata saldırma üzerine kurulu bir
                    soru havuzudur. Dünyanın sınırlı Türkiye'nin ilk Ethernaut
                    video çözümleri Developer Community farkıyla sizlerle.
                  </p>
                  <img
                    src={EthernautImage}
                    alt="Description Image"
                    className="description-image"
                  />
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
            <Route path="/Home">
              <Home />
            </Route>
            <Route exact path="/Medium">
              <section className="menu section">
                <div className="title">
                  <h2>Medium</h2>
                  <div className="underline"></div>
                </div>
                <div className="medium-description">
                  <p className="description-text">
                    Yazılarınızın linklerini Discord sunucumuzdaki ilgili kanala
                    göndererek içeriklerinizi burada sergileyebilirsiniz.
                  </p>
                </div>
                <Medium items={MediumItems} />
              </section>
            </Route>
            <Route exact path="/Youtube">
              <section className="menu section">
                <div className="title">
                  <h2>Youtube</h2>
                  <div className="underline"></div>
                </div>
                <div className="youtube-description">
                  <p className="description-text">
                    Videolarınızın linklerini Discord sunucumuzdaki ilgili
                    kanala göndererek içeriklerinizi burada sergileyebilirsiniz.
                  </p>
                </div>
                <Youtube items={YoutubeItems} />
              </section>
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
