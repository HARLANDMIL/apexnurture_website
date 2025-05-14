import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <div className="pricing-cards">
        <div className="card">
          <h2>Lead-to-Client Conversion</h2>
          <p>$2,500 setup + $550/month</p>
          <button
            className="learn-more"
            onClick={() => window.location.href = '/lead-to-client'}
          >
            Learn More
          </button>
        </div>
        <div className="card">
          <h2>Recruitment Automation</h2>
          <p>$3,000 setup + $700/month</p>
          <button
            className="learn-more"
            onClick={() => window.location.href = '/recruitment-automation'}
          >
            Learn More
          </button>
        </div>
        <div className="card">
          <h2>Smart Business Ops</h2>
          <p>$3,500 setup + $700/month</p>
          <button
            className="learn-more"
            onClick={() => window.location.href = '/business-ops'}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
