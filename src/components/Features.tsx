import { Shield, Users, Heart, MessageCircle, Clock, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe Space",
      description: "A judgment-free environment where you can share openly and authentically without fear."
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Connect with others who understand your journey and can offer genuine empathy and advice."
    },
    {
      icon: Heart,
      title: "Mental Wellness",
      description: "Access resources, tools, and guidance to support your mental health and wellbeing."
    },
    {
      icon: MessageCircle,
      title: "Group Discussions",
      description: "Join topic-based discussions and support groups tailored to your specific needs."
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Our community is always here when you need support, day or night."
    },
    {
      icon: Lock,
      title: "Complete Privacy",
      description: "Your identity and conversations are protected with end-to-end encryption."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">
            Why Choose <span className="gradient-text">hoop</span>?
          </h2>
          <p className="features-description">
            We've built a platform designed specifically for mental health support, 
            with features that prioritize your safety, privacy, and wellbeing.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;