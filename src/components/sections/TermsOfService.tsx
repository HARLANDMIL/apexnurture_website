import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
      >
        <h3 className="font-orbitron text-lg md:text-xl text-white">{title}</h3>
        <ChevronDown
          className={`w-6 h-6 text-primary transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 text-gray-300 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const TermsOfService: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-center text-gray-400 mb-8">Last Updated: May 10, 2025</p>

            {/* Introduction */}
            <div className="mb-12 text-gray-300 max-w-[800px] mx-auto">
              <p>
                Welcome to Apex Nurture ("we," "us," or "our"). These Terms of Service ("Terms") 
                govern your access to and use of our website, www.apexnurture.com ("Website"), 
                and the services we provide, including the development and maintenance of custom 
                AI agents ("Services"). By accessing or using our Website or Services, you agree 
                to be bound by these Terms. If you do not agree, please do not use our Website or Services.
              </p>
            </div>

            {/* Accordion sections */}
            <div className="space-y-4">
              <AccordionItem title="1. Acceptance of Terms">
                <p>
                  By using our Website or Services, you confirm that you are at least 18 years old 
                  and have the legal capacity to enter into this agreement. If you are using the 
                  Services on behalf of a business or entity, you represent that you have the authority 
                  to bind that entity to these Terms.
                </p>
              </AccordionItem>

              <AccordionItem title="2. Services">
                <div className="space-y-4">
                  <p>
                    Apex Nurture provides custom AI agent development services, including but not 
                    limited to lead nurturing, appointment booking, client onboarding, and sales 
                    automation ("AI Agents"). These Services may include one-time builds, monthly 
                    maintenance, and ongoing support as outlined in your selected pricing plan ("Suite").
                  </p>
                  <p>
                    <strong>Service Delivery:</strong> We aim to deliver AI Agents within the timelines 
                    specified in your chosen Suite (e.g., 7-10 days). Delays due to client 
                    unresponsiveness or unforeseen technical issues do not constitute a breach of 
                    these Terms.
                  </p>
                  <p>
                    <strong>Maintenance Fees:</strong> Monthly Operations Fees cover monitoring, 
                    updates, and support as described in your Suite. Failure to pay these fees may 
                    result in suspension of Services.
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem title="3. Payment Terms">
                <div className="space-y-4">
                  <p>
                    <strong>Fees:</strong> You agree to pay the one-time build fee and monthly 
                    operations fee as outlined in your selected Suite. All fees are non-refundable 
                    except as specified in our refund policy.
                  </p>
                  <p>
                    <strong>Billing:</strong> Monthly fees are charged on a recurring basis. You 
                    authorize us to charge your provided payment method automatically. You must notify 
                    us of any payment issues within 7 days of the charge.
                  </p>
                  <p>
                    <strong>Late Payments:</strong> Late payments may incur a 1.5% monthly interest 
                    fee or the maximum allowed by law. We reserve the right to suspend Services for 
                    non-payment after a 10-day notice period.
                  </p>
                </div>
              </AccordionItem>

              {/* Add more accordion items for each section */}
              {/* ... Additional sections ... */}

              <AccordionItem title="14. Contact Us">
                <div className="space-y-4">
                  <p>For questions about these Terms, please contact us at:</p>
                  <p>Email: support@apexnurture.com</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
