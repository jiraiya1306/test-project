import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { supabase } from "../config/supabase_client.js";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const { data, error } = await supabase.from('User_signup').insert([
      {
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        "Email ID": formData.email,
        "Message": formData.message
      }
    ]);

    setLoading(false);

    if (error) {
      console.error('Error inserting data:', error.message);
      setError('Failed to send message. Please try again.');
    } else {
      setSuccess('Message sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        {/* Contact Information */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <ContactCard icon={<Phone className="w-6 h-6" />} title="Phone" info="(555) 123-4567" />
          <ContactCard icon={<Mail className="w-6 h-6" />} title="Email" info="info@haircare.com" />
          <ContactCard icon={<MapPin className="w-6 h-6" />} title="Location" info="123 Beauty Street, Fashion City" />
          <ContactCard icon={<Clock className="w-6 h-6" />} title="Business Hours" info="Mon-Sat: 9AM - 7PM" />
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const ContactCard = ({ icon, title, info }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4 text-pink-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{info}</p>
    </div>
  );
};
