import React, { useState } from "react";
import "../App.css"; // Make sure to create a CSS file for styling

// ... (previous code)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Generator", path: "/generator" },
    { id: 3, text: "Pricing Plan", path: "/pricing" },
    { id: 4, text: "Blog-News", path: "/blog" },
    { id: 5, text: "About Us", path: "/about" },
    { id: 6, text: "Features", path: "/features" },
    { id: 7, text: "Collection-2023", path: "/collection" },
    { id: 8, text: "Career", path: "/career" },
  ];

  const firstColumnLinks = navLinks.slice(0, 4);
  const secondColumnLinks = navLinks.slice(4);

  return (
    <div className={`header ${menuOpen ? "open" : ""}`}>
      <div className="logo">AlPatrn</div>
      <div className="new-menu-btn" onClick={() => setMenuOpen(true)}>
        <button className="menu-btn mar-0">
          <span>Menu</span>
          <span class="material-symbols-outlined menu-svg">menu</span>
        </button>
      </div>

      {menuOpen ? (
        <div className="openMenu">
          <ul>
            {navLinks.map((ele) => {
              return (
                <li>
                  <a href={ele.path}>{ele.text}</a>
                </li>
              );
            })}
          </ul>
          <span
            class="material-symbols-outlined cross"
            onClick={() => setMenuOpen(false)}
          >
            close
          </span>
        </div>
      ) : (
        ""
      )}

      <div className="menu">
        <div className="column">
          <ul className="columnLinks">
            {firstColumnLinks.map((link) => (
              <li key={link.id}>{link.text}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <ul className="columnLinks">
            {secondColumnLinks.map((link) => (
              <li key={link.id}>{link.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <button className="menu-btn">
            <span>Menu</span>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
