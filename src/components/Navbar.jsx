import React from "react";

const menuItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Playlists", url: "/playlist" },
  { id: 3, title: "About", url: "/about" },
];

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
