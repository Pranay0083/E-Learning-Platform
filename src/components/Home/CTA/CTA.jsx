import React from "react";
import { ArrowRight } from "lucide-react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Start Your Learning Journey?</h2>
        <p>
          Join thousands of learners who are already transforming their careers
          with Think-Box.
        </p>
        <button className="primary-button">
          Start Learning Today <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTA;
