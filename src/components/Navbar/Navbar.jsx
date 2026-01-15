import React, { useState } from "react"; // Thêm useState
import { Link, useLocation } from "react-router-dom";
import {
  Leaf,
  BookOpen,
  Video,
  Layers,
  HelpCircle,
  Menu, // Icon menu ba gạch
  X, // Icon đóng
  Bot
} from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State quản lý menu

  const menuItems = [
    { name: "Trang chủ", icon: <Leaf size={16} />, path: "/" },
    { name: "Tài liệu", icon: <BookOpen size={16} />, path: "/tai-lieu" },
    { name: "Blog & Video", icon: <Video size={16} />, path: "/blog" },
    { name: "Nội Dung", icon: <Layers size={16} />, path: "/noi-dung" },
    { name: "Quiz", icon: <HelpCircle size={16} />, path: "/quiz" },
    { name: "AI Usage", icon: <Bot size={16} />, path: "/ai" },
  ];

  // Hàm đóng menu khi click vào một mục
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar-wrapper">
      <div className={`navbar-pill ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          style={{ textDecoration: "none" }}
        >
          <div className="logo-box">
            <Leaf size={18} />
          </div>
          <span>Tư Tưởng HCM</span>
        </Link>

        {/* Nút Hamburger cho Mobile */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`menu-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={closeMenu} // Click vào link thì đóng menu
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
