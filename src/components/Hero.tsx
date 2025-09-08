import { Heart, Users, Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <Shield className="w-4 h-4" />
          <span>Safe • Supportive • Anonymous</span>
        </div>
        
        <h1 className="hero-title">
          You're Not Alone in This{" "}
          <span className="gradient-text">
            Journey
          </span>
        </h1>
        
        <p className="hero-description">
          Join a supportive community where mental health conversations happen with care, understanding, and hope. 
          <br />
          Share your story, find support, and grow together in a judgment-free environment.
        </p>
        
        <div className="hero-stats">
          <div className="stat-item">
            <Users className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Community Members</span>
            </div>
          </div>
          <div className="stat-item">
            <Heart className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Peer Support</span>
            </div>
          </div>
          <div className="stat-item">
            <Shield className="stat-icon" />
            <div className="stat-content">
              <span className="stat-number">100%</span>
              <span className="stat-label">Anonymous & Safe</span>
            </div>
          </div>
        </div>
        
        <div className="hero-buttons">
          <button className="hero-button-primary">
            Join Our Community
            <ArrowRight className="w-5 h-5 ml-2" />
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

        <div className="hero-testimonial">
          <blockquote>
            "This community gave me the courage to speak up and the support to keep going. I'm forever grateful."
          </blockquote>
          <cite>— Sarah, Community Member</cite>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>
    </section>
  );
};

export default Hero;