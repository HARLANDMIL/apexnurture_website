import React, { useEffect } from 'react';
import './RecruitmentAutomation.css';
import { enforceAccessControl } from '../utils/accessControl';

const RecruitmentAutomation = () => {
  // Enforce access control on page load
  useEffect(() => {
    enforceAccessControl();
  }, []);

  return (
    <div className="recruitment-automation">
      <header className="hero">
        <h1>Place Top Talent 30% Faster with AI Automation</h1>
        <p>Slash Recruitment Time by 30% Starting Today</p>
        <button className="cta">Get Started Right – $3,000 + $700/month</button>
        <p className="urgency">Limited Offer: First 10 Clients Get 10% Off Setup!</p>
      </header>
      <section className="pain-points">
        <h2>End Your Recruitment Headaches</h2>
        <ul>
          <li>Drowning in CVs with no time to screen?</li>
          <li>Losing candidates to slow follow-ups?</li>
          <li>Struggling to find top talent in a competitive market?</li>
        </ul>
      </section>
      <section className="solution">
        <h2>Your Recruitment Powerhouse</h2>
        <ul>
          <li>CV Screening Bot: Cuts screening time by 70%—focus on the best candidates.</li>
          <li>Follow-Up Agent: Reduces candidate drop-off by 40% via WhatsApp/Email.</li>
          <li>Data Enricher: Sources 50+ qualified profiles/month from LinkedIn.</li>
        </ul>
      </section>
      <section className="outcome">
        <h2>Faster Placements, Guaranteed</h2>
        <p>Place candidates 30% faster and double your qualified interviews in 30 days—or your money back.</p>
      </section>
      <section className="case-study">
        <blockquote>
          “I saved 10 hours a week and placed 15% more candidates in the first month alone.” – JobFind SA.
        </blockquote>
      </section>
      <footer className="cta-section">
        <h2>Ready to Outplace the Competition?</h2>
        <p>Start automating your recruitment process now. Results guaranteed in 14 days—or your money back.</p>
        <button className="cta">Book a Free Consultation</button>
      </footer>
    </div>
  );
};

export default RecruitmentAutomation;
