const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          You're Not Alone in This{" "}
          <span className="gradient-text">
            Journey
          </span>
        </h1>
        
        <p className="hero-description">
          Join a supportive community where mental health conversations happen with care, understanding, and hope. 
          <br />
          Share your story, find support, and grow together.
        </p>
        
        <div className="hero-buttons">
          <button className="hero-button-primary">
            Join Our Community
          </button>
          <button className="hero-button-outline">
            Explore Resources
          </button>
        </div>

        <div className="hero-tagline">
          <div className="tagline-dot"></div>
          <span>Building hope, one conversation at a time</span>
          <div className="tagline-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;