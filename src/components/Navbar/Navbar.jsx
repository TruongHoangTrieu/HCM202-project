import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link và useLocation
import {
  Leaf,
  BookOpen,
  Video,
  Layers,
  HelpCircle,
} from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại của trình duyệt

  const menuItems = [
    { name: "Trang chủ", icon: <Leaf size={16} />, path: "/" },
    { name: "Tài liệu", icon: <BookOpen size={16} />, path: "/tai-lieu" },
    { name: "Blog & Video", icon: <Video size={16} />, path: "/blog" },
    { name: "Nội Dung", icon: <Layers size={16} />, path: "/noi-dung" },
    { name: "Quiz", icon: <HelpCircle size={16} />, path: "/quiz" },
  ];

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-pill">
        {/* Logo - Bọc trong Link để click về trang chủ */}
        <Link to="/" className="navbar-logo" style={{ textDecoration: 'none' }}>
          <div className="logo-box">
            <Leaf size={18} />
          </div>
          <span>Tư Tưởng HCM</span>
        </Link>

        {/* Menu */}
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`menu-item ${
                  location.pathname === item.path ? "active" : ""
                }`}
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