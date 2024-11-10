import React from "react";
import { BookOpen, Brain, Users, Trophy } from "lucide-react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Expert-Led Courses",
      description:
        "Learn from industry professionals with real-world experience.",
    },
    {
      icon: <Brain size={32} />,
      title: "Adaptive Learning",
      description: "Personalized learning paths that adapt to your progress.",
    },
    {
      icon: <Users size={32} />,
      title: "Community Support",
      description: "Join a global community of learners and educators.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Certification",
      description: "Earn recognized certificates upon course completion.",
    },
  ];

  return (
    <section className="features-section">
      <h2>Why Choose Think-Box?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
