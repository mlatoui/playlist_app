import React from "react";

const menuItems = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Play List", url: "/playlist" },
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
