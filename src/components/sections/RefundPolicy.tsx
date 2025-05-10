import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] -z-10" />
      
      {/* Particle effect - implemented in ParticleBackground component */}
      <div className="absolute inset-0 -z-5">
        <div className="relative w-full h-full">
          {/* Particles will be rendered here */}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[900px] mx-auto">
          {/* Glassmorphism container */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 md:p-10">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-center text-white mb-4 animate-slideUp">
              Refund Policy
            </h1>
            <p className="text-center text-gray-400 mb-8">Last Updated: May 10, 2025</p>

            {/* Introduction */}
            <div className="mb-12 text-gray-300 max-w-[800px] mx-auto">
              <p>
                At Apex Nurture, we strive to deliver exceptional AI automation Services/Suites that drive 
                results for your business. However, we understand that circumstances may arise where 
                a refund is requested. This Refund Policy outlines the conditions under which refunds 
                may be issued for our Services.
              </p>
            </div>

            {/* Main content with numbered sections */}
            <div className="space-y-8">
              {/* One-Time Build Fees */}
              <section className="border-b border-white/20 pb-8">
                <h2 className="font-orbitron text-xl md:text-2xl text-white mb-4 hover:text-primary transition-colors">
                  1. One-Time Build Fees
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Non-Refundable:</strong> One-time build fees for our AI automation suites 
                    (e.g., LeadGen Suite, Full Automation Suite) are non-refundable once work has 
                    commenced. This is due to the custom nature of our Services, which are tailored 
                    specifically to your business needs.
                  </p>
                  <p>
                    <strong>Exception – "Build in 7 Days or It's Free" Guarantee:</strong> If we fail 
                    to deliver your suite within the promised timeline (e.g., 7 days for most suites) 
                    due to our sole fault, and not due to delays caused by you (e.g., unresponsiveness, 
                    incomplete information), you may be eligible for a full refund of the one-time build 
                    fee. To request this, contact us within 14 days of the missed deadline.
                  </p>
                </div>
              </section>

              {/* Monthly Operations Fees */}
              <section className="border-b border-white/20 pb-8">
                <h2 className="font-orbitron text-xl md:text-2xl text-white mb-4 hover:text-primary transition-colors">
                  2. Monthly Operations Fees
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Cancellation and Refunds:</strong> Monthly operations fees are charged on 
                    a recurring basis for ongoing maintenance, monitoring, and support. If you cancel 
                    your subscription, you will not be charged for future billing cycles, but no refunds 
                    will be issued for the current billing period.
                  </p>
                  <p>
                    <strong>Promotional Discounts:</strong> If you received a promotional discount on 
                    your first month's ops fee (e.g., 50% off for the first 3 clients), this discount 
                    is non-refundable and applies only to the first billing cycle.
                  </p>
                </div>
              </section>

              {/* How to Request a Refund */}
              <section className="border-b border-white/20 pb-8">
                <h2 className="font-orbitron text-xl md:text-2xl text-white mb-4 hover:text-primary transition-colors">
                  3. How to Request a Refund
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>To request a refund under the "Build in 7 Days or It's Free" guarantee:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Contact Us:</strong> Email us at support@apexnurture.com with your order 
                      details and reason for the refund request.
                    </li>
                    <li>
                      <strong>Timeline:</strong> Requests must be made within 14 days of the missed 
                      delivery deadline.
                    </li>
                    <li>
                      <strong>Processing:</strong> Approved refunds will be processed within 10 business 
                      days to your original payment method.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Non-Refundable Circumstances */}
              <section className="border-b border-white/20 pb-8">
                <h2 className="font-orbitron text-xl md:text-2xl text-white mb-4 hover:text-primary transition-colors">
                  4. Non-Refundable Circumstances
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Refunds will not be issued for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Failure to achieve specific business outcomes (e.g., revenue goals), as results 
                      depend on various factors outside our control.
                    </li>
                    <li>
                      Changes in your business needs or decision to discontinue using the AI agents 
                      after delivery.
                    </li>
                    <li>
                      Delays caused by third-party platforms (e.g., Make.com outages) or your failure 
                      to provide necessary information or access.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="font-orbitron text-xl md:text-2xl text-white mb-4 hover:text-primary transition-colors">
                  5. Contact Us
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>For questions about this Refund Policy or to initiate a refund request, please contact us at:</p>
                  <p>Email: support@apexnurture.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
