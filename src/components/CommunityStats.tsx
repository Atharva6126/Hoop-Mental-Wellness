import { TrendingUp, MessageSquare, Users, Heart } from "lucide-react";

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      number: "12,847",
      label: "Active Members",
      growth: "+23% this month"
    },
    {
      icon: MessageSquare,
      number: "45,231",
      label: "Supportive Messages",
      growth: "+18% this week"
    },
    {
      icon: Heart,
      number: "98.7%",
      label: "Feel Supported",
      growth: "Member satisfaction"
    },
    {
      icon: TrendingUp,
      number: "24/7",
      label: "Community Support",
      growth: "Always available"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-header">
          <h2 className="stats-title">Our Growing Community</h2>
          <p className="stats-description">
            Real people, real support, real impact on mental health and wellbeing.
          </p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                <stat.icon className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-growth">{stat.growth}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;