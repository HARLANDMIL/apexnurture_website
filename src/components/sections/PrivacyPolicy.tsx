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

const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
            </h1>
            <p className="text-center text-gray-400 mb-8">Last Updated: May 10, 2025</p>

            {/* Introduction */}
            <div className="mb-12 text-gray-300 max-w-[800px] mx-auto">
              <p>
                At Apex Nurture ("we," "us," or "our"), we are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website, www.apexnurture.com ("Website"), or use our AI agent 
                development services ("Services"). By using our Website or Services, you consent to 
                the practices described in this policy. If you do not agree, please do not use our 
                Website or Services.
              </p>
            </div>

            {/* Accordion sections */}
            <div className="space-y-4">
              <AccordionItem title="1. Information We Collect">
                <div className="space-y-4">
                  <p>We collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Personal Information:</strong> Name, email address, phone number, billing 
                      information, and other details you provide when you sign up for our Services, 
                      schedule a consultation, or contact us.
                    </li>
                    <li>
                      <strong>Business Information:</strong> Data you provide for AI agent development, 
                      such as client lists, integration details (e.g., Calendly, Make.com credentials), 
                      and business goals.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Information about how you interact with our Website, 
                      such as IP address, browser type, pages visited, and timestamps, collected via 
                      cookies and similar technologies.
                    </li>
                    <li>
                      <strong>Third-Party Data:</strong> Information processed by our AI agents on your 
                      behalf (e.g., leads' email addresses, booking details), which you provide or 
                      authorize us to access.
                    </li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem title="2. How We Use Your Information">
                <div className="space-y-4">
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our Services (e.g., developing and operating your AI agents).</li>
                    <li>Process payments and manage your account.</li>
                    <li>Communicate with you, including sending service updates, promotional offers, and responses to inquiries.</li>
                    <li>Analyze usage patterns to enhance our Website and Services.</li>
                    <li>Comply with legal obligations, such as tax reporting or responding to legal requests.</li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem title="3. How We Share Your Information">
                <div className="space-y-4">
                  <p>
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> Third-party platforms (e.g., Make.com, N8N, Calendly) 
                      to perform the Services, such as integrating AI agents with your systems.
                    </li>
                    <li>
                      <strong>Legal Authorities:</strong> If required by law, regulation, or legal process 
                      (e.g., court order).
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale 
                      of assets, your information may be transferred as part of the transaction, with 
                      notice to you where required.
                    </li>
                  </ul>
                </div>
              </AccordionItem>

              <AccordionItem title="4. Cookies and Tracking Technologies">
                <div className="space-y-4">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Enhance user experience (e.g., remembering your preferences).</li>
                    <li>Analyze Website performance (e.g., Google Analytics).</li>
                    <li>Deliver relevant ads (if applicable).</li>
                  </ul>
                  <p>
                    You can manage cookie preferences through your browser settings, but disabling 
                    cookies may affect Website functionality.
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem title="5. Data Security">
                <p>
                  We implement reasonable technical and organizational measures to protect your 
                  information from unauthorized access, loss, or disclosure (e.g., encryption, 
                  secure servers). However, no method of transmission over the internet is 100% 
                  secure, and we cannot guarantee absolute security.
                </p>
              </AccordionItem>

              <AccordionItem title="6. Your Data Rights">
                <div className="space-y-4">
                  <p>
                    Depending on your jurisdiction (e.g., GDPR for EU residents, CCPA for California 
                    residents), you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access, correct, or delete your personal information.</li>
                    <li>Opt out of marketing communications.</li>
                    <li>Request data portability or restrict processing.</li>
                  </ul>
                  <p>
                    To exercise these rights, contact us at support@apexnurture.com. We will respond 
                    within 30 days, subject to verification of your identity.
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem title="7. International Data Transfers">
                <p>
                  If you are located outside the United States, your information may be transferred 
                  to and processed in the U.S., where our servers are located. We take steps to 
                  ensure compliance with applicable data protection laws (e.g., GDPR's standard 
                  contractual clauses).
                </p>
              </AccordionItem>

              <AccordionItem title="8. Children's Privacy">
                <p>
                  Our Services are not intended for individuals under 18. We do not knowingly 
                  collect personal information from children. If we learn such data has been 
                  collected, we will delete it promptly.
                </p>
              </AccordionItem>

              <AccordionItem title="9. Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy periodically. Changes will be posted on this 
                  page with an updated "Last Updated" date. Your continued use of the Website or 
                  Services after changes constitutes acceptance of the new policy.
                </p>
              </AccordionItem>

              <AccordionItem title="10. Contact Us">
                <div className="space-y-4">
                  <p>For questions about this Privacy Policy or to exercise your data rights, please contact us at:</p>
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

export default PrivacyPolicy;
