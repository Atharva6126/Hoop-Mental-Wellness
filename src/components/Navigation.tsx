import ThemeToggle from "./ThemeToggle";
import { Menu, X, Heart, Bell, Search } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <div className="logo-icon">
              <Heart className="logo-heart" />
            </div>
            <div className="logo-text">
              Hoop
              <span className="logo-tagline">MENTAL WELLNESS</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#" className="nav-link">Community</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">Support Groups</a>
            <a href="#" className="nav-link">About</a>
          </div>
        </div>
        
        <div className="nav-center">
          <div className="search-wrapper">
            <div className="search-icon-wrapper">
              <Search className="search-icon" />
            </div>
            <input type="text" placeholder="Search discussions..." className="search-input" />
          </div>
        </div>

        <div className="nav-right">
          <ThemeToggle />
          <div className="notification-wrapper">
            <Bell className="notification-icon" />
            <span className="notification-badge"></span>
          </div>
          <button className="button sign-in">Sign In</button>
          <button className="button join-community">Join Community</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;