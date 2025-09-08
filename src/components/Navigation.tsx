import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-left">
        <div className="nav-logo">
          <div className="logo-icon">
            <div className="logo-dot"></div>
          </div>
          <span className="logo-text">hoop</span>
        </div>
        
        <div className="nav-links">
          <a href="#" className="nav-link">
            Community
          </a>
          <a href="#" className="nav-link">
            Resources
          </a>
          <a href="#" className="nav-link">
            Support
          </a>
          <a href="#" className="nav-link">
            About
          </a>
        </div>
      </div>
      
      <div className="nav-right">
        <ThemeToggle />
        <button className="button button-ghost">
          Sign In
        </button>
        <button className="button button-primary">
          Join Community
        </button>
      </div>
    </nav>
  );
};

export default Navigation;