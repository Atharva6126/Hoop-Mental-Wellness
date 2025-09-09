import ThemeToggle from "./ThemeToggle";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-left">
        <div className="nav-logo">
          <div className="logo-icon">
            <Heart className="logo-heart" />
          </div>
          <span className="logo-text">Hoop</span>
          <span className="logo-tagline">mental wellness</span>
        </div>
        
        <div className="nav-links">
          <a href="#" className="nav-link">
            Community
          </a>
          <a href="#" className="nav-link">
            Resources
          </a>
          <a href="#" className="nav-link">
            Support Groups
          </a>
          <a href="#" className="nav-link">
            About
          </a>
        </div>
      </div>
      
      <div className="nav-right">
  {/* Crisis hotline removed for cleaner navbar */}
        <ThemeToggle />
        <button className="button button-ghost">
          Sign In
        </button>
        <button className="button button-primary">
          Join Community
        </button>
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <a href="#" className="mobile-nav-link">Community</a>
            <a href="#" className="mobile-nav-link">Resources</a>
            <a href="#" className="mobile-nav-link">Support Groups</a>
            <a href="#" className="mobile-nav-link">About</a>
            <div className="mobile-menu-buttons">
              <button className="button button-ghost w-full">Sign In</button>
              <button className="button button-primary w-full">Join Community</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;