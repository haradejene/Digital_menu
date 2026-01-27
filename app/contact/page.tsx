'use client';

import { useState } from 'react';
import Navbar from '@/Components/Navbar';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-3xl" />,
      title: "OUR LOCATION",
      details: ["123 Chicken Street", "Food City, FC 10001"],
      link: "#"
    },
    {
      icon: <FiPhone className="text-3xl" />,
      title: "PHONE NUMBER",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567"
    },
    {
      icon: <FiMail className="text-3xl" />,
      title: "EMAIL ADDRESS",
      details: ["info@chickenhq.com", "support@chickenhq.com"],
      link: "mailto:info@chickenhq.com"
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "WORKING HOURS",
      details: ["Mon-Sun: 10:00 AM - 11:00 PM", "24/7 Delivery Available"],
      link: "#"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh]  overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">
          <div className="text-center">
            <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-[#F9C73D] mb-6">
              CONTACT <span className="text-white">US</span>
            </h1>
            <p className="font-inter text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              Get in touch with the Headquarters of Fried Chicken
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Information */}
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl text-[#730202] mb-8">
                GET IN <span className="text-[#F9C73D]">TOUCH</span>
              </h2>
              
              <p className="font-inter text-gray-700 text-lg mb-10">
                Have questions about our menu, want to cater an event, or just want to say hello? 
                We&apos;d love to hear from you!
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-l-4 hover:border-l-[#F9C73D] group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-[#F9C73D] rounded-full flex items-center justify-center text-[#730202] mr-6 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bebas text-xl text-[#730202] mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-inter text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="font-bebas text-2xl text-[#730202] mb-6">FOLLOW US</h3>
                <div className="flex space-x-6">
                  <a href="#" className="w-12 h-12 bg-[#730202] rounded-full flex items-center justify-center text-white hover:bg-[#F9C73D] hover:text-[#730202] transition-all duration-300">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#730202] rounded-full flex items-center justify-center text-white hover:bg-[#F9C73D] hover:text-[#730202] transition-all duration-300">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#730202] rounded-full flex items-center justify-center text-white hover:bg-[#F9C73D] hover:text-[#730202] transition-all duration-300">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <h3 className="font-bebas text-3xl text-[#730202] mb-2">SEND US A MESSAGE</h3>
              <p className="font-inter text-gray-600 mb-8">We&apos;ll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-inter font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Inquiry</option>
                      <option value="career">Career Opportunity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-inter font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9C73D] focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#730202] hover:bg-[#B80000] text-white font-bebas text-xl py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-[#730202] to-[#B80000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#F9C73D] mb-6">
              VISIT OUR <span className="text-white">LOCATION</span>
            </h2>
            <p className="font-inter text-white/80 text-lg max-w-2xl mx-auto">
              Come taste why we&apos;re called the Headquarters of Fried Chicken
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex w-16 h-16 bg-[#F9C73D] rounded-full items-center justify-center text-[#730202] mb-6">
                  <FiMapPin size={32} />
                </div>
                <h3 className="font-bebas text-2xl text-white mb-2">123 Chicken Street</h3>
                <p className="font-inter text-white/80">Food City, FC 10001</p>
                <div className="mt-6">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#F9C73D] text-[#730202] font-bebas text-lg px-8 py-3 rounded-full hover:bg-white transition-all duration-300"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="text-center mt-12">
            <h3 className="font-bebas text-3xl text-white mb-6">
              NEED HELP <span className="text-[#F9C73D]">IMMEDIATELY?</span>
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bebas text-xl px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <FiPhone className="mr-3" />
                CALL NOW
              </a>
              <a 
                href="/menu" 
                className="inline-flex items-center justify-center bg-[#F9C73D] text-[#730202] font-bebas text-xl px-8 py-3 rounded-full hover:bg-white transition-all duration-300"
              >
                ORDER ONLINE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}