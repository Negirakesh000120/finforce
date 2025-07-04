"use client"; // Make sure this is at the top of your file

import React, { useState } from 'react'; // Import React for type usage
import { motion } from 'framer-motion';
import { Mail, Users, ArrowRight } from 'lucide-react';
// These imports might be different based on your project structure
// import { Button } from '@/components/ui/button'; 
// import { Card, CardContent } from '@/components/ui/card';

// A simple Card component for the example
const Card = ({ className, children }) => <div className={className}>{children}</div>;
const CardContent = ({ className, children }) => <div className={className}>{children}</div>;


export function CtaForm() {
  const [submitted, setSubmitted] = useState(false);

  // --- THIS FUNCTION IS MODIFIED FOR DEBUGGING ---
  // FIX: Added the correct TypeScript type for the form event
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const form = event.currentTarget;
    const formData = new FormData(form);
  
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdYvnLU5j1QjmpNqBL7devqJhH8WyPwFzTHPwCHNQ4Tx67WXA/formResponse";
  
    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors", // Important for Google Forms
        body: formData
      });
  
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  

  // This message now appears on the original page after you click submit.
  if (submitted) {
    return (
        <div className="text-center py-20 px-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Check the new tab!</h3>
            <p className="text-xl text-gray-600">A new tab has opened to show the submission status. If it was successful, you can close that tab.</p>
        </div>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header content... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
           <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
              <Mail className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Let's Talk{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Talent
              </span>
            </h2>
            <div className="flex items-center justify-center mb-4">
              <Users className="h-5 w-5 text-gray-400 mr-2" />
              <p className="text-xl text-gray-600">Leave your details and we'll set up a quick discovery call.</p>
            </div>
        </motion.div>

        {/* Form itself... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-10">
              {/* IMPORTANT: The form's action is removed, and we use onSubmit */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Sharksense</h3>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you shortly</p>
                </div>

                {/* Input fields... */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="entry.1332708864" placeholder="Your full name" className="w-full px-4 py-3 border border-gray-200 rounded-xl" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="entry.1382412761" placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" id="phone" name="entry.930930338" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 border border-gray-200 rounded-xl" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input type="text" id="company" name="entry.1682153250" placeholder="Your company name" className="w-full px-4 py-3 border border-gray-200 rounded-xl" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">What function are you hiring for? *</label>
                  <textarea id="message" name="entry.1634244443" placeholder="Tell us about your hiring needs..." rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl" required />
                </div>

                {/* The submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Send Message to Sharksense
                </button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
