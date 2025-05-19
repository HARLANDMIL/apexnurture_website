import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Countdown from 'react-countdown';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Pricing: React.FC = () => {
  // Deadline: May 21, 2025, 11:31 AM SAST
  const deadline = new Date('2025-05-21T11:31:00+02:00').getTime();
  
  const suites = [
    {
      name: "E-Commerce Growth Suite",
      icon: "fa-shopping-cart",
      description: "Boost Sales and Streamline Operations with AI",
      setupPrice: 2999,
      monthlyPrice: 599,
      goal: "Increase online sales by 15-25% within 30 days",
      outcome: "Recover abandoned carts and automate customer service",
      features: [
        "AI-Powered Cart Recovery Agent",
        "Customer Service Chatbot",
        "Inventory Sync Automation",
        "Real-Time Analytics Dashboard"
      ]
    },
    {
      name: "Healthcare Admin Suite",
      icon: "fa-hospital",
      description: "Focus on Patient Care, Not Admin Tasks",
      setupPrice: 3499,
      monthlyPrice: 699,
      goal: "Reduce admin workload by 70% within 45 days",
      outcome: "Decrease no-shows and improve patient retention",
      features: [
        "AI Scheduling Agent",
        "Billing Automation",
        "Patient Follow-Up System",
        "Compliance Dashboard"
      ]
    },
    {
      name: "Real Estate Transaction Suite",
      icon: "fa-home",
      description: "Close Deals Faster with AI Automation",
      setupPrice: 2799,
      monthlyPrice: 549,
      goal: "Speed up deal closures by 10% within 45 days",
      outcome: "Reduce errors and improve response rates",
      features: [
        "Lead Qualification AI",
        "Document Automation",
        "Client Follow-Up System",
        "Transaction Tracking Dashboard"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background Gradient & Particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C29] via-[#302B63] to-[#24243E] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Pricing Intro */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
            style={{ textShadow: "0 0 10px rgba(128, 0, 128, 0.5)" }}
          >
            Transform Your Business with AI Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Choose from our bespoke Precision Suite or ready-to-go solutions for instant results
          </motion.p>
        </div>

        {/* Precision AI Implementation Suite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="glass-card border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <TypeAnimation
                  sequence={[
                    'Precision AI Implementation Suite',
                    1000,
                    'Custom AI Agents for Your Business',
                    1000
                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                  className="text-3xl md:text-4xl font-orbitron font-bold mb-4 text-white"
                  style={{ textShadow: "0 0 15px rgba(128, 0, 128, 0.8)" }}
                />
                <p className="text-xl text-purple-300">Custom AI Agents Tailored to Your Unique Business Needs</p>
              </div>

              {/* Pricing & Offer */}
              <div className="text-center mb-12">
                <div className="text-4xl font-orbitron font-bold text-white mb-2">
                  $4,999 <span className="text-xl text-gray-400">setup</span>
                </div>
                <div className="text-2xl font-orbitron text-purple-300 mb-4">
                  $1,499 <span className="text-base text-gray-400">/ month</span>
                </div>
                <div className="text-green-400 font-bold mb-2">25% off first year: $1,124/mo</div>
                <div className="text-purple-300">Save $4,500 annually</div>
              </div>

              {/* Process Steps */}
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                {[
                  { icon: "search", title: "Audit Workflows", desc: "2-week analysis" },
                  { icon: "code", title: "Design AI Agents", desc: "Custom solutions" },
                  { icon: "plug", title: "Implement", desc: "30-day deployment" },
                  { icon: "tools", title: "Optimize", desc: "Monthly updates" }
                ].map((step, i) => (
                  <div key={i} className="text-center">
                    <i className={`fa fa-${step.icon} text-3xl text-purple-400 mb-4`}></i>
                    <h3 className="font-orbitron font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA & Timer */}
              <div className="text-center">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-xl px-12 py-4 mb-4"
                  onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
                >
                  Get Free Audit Now ($999 Value)
                </Button>
                <div className="text-orange-400 animate-pulse font-orbitron">
                  Only 5 Spots Left!
                  <Countdown 
                    date={deadline}
                    renderer={({ days, hours, minutes }) => (
                      <div>
                        Offer ends in {days}d {hours}h {minutes}m
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ready-to-Go Suites */}
        <div className="grid md:grid-cols-3 gap-8">
          {suites.map((suite, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full hover:scale-105 transition-transform duration-300">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <i className={`fa ${suite.icon} text-4xl text-purple-400 mb-4`}></i>
                    <h3 className="text-2xl font-orbitron font-bold mb-2">{suite.name}</h3>
                    <p className="text-gray-400">{suite.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-3xl font-orbitron font-bold text-white mb-2">
                      ${suite.setupPrice} <span className="text-base text-gray-400">setup</span>
                    </div>
                    <div className="text-xl text-purple-300">
                      ${suite.monthlyPrice} <span className="text-sm text-gray-400">/ month</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="text-green-400 font-semibold">{suite.goal}</div>
                    <div className="text-gray-300">{suite.outcome}</div>
                    <ul className="space-y-2">
                      {suite.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <i className="fa fa-check text-purple-400"></i>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                    onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
                  >
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-silver-500 hover:from-purple-700 hover:to-silver-600 text-xl px-12 py-4"
            onClick={() => window.open('https://calendly.com/apexnurture', '_blank')}
          >
            Book Free Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;