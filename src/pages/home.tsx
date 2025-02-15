import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scissors, Sparkles, ShieldCheck, Phone, MapPin, Clock } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Professional Artificial Hair Care Services</h1>
            <p className="text-xl mb-8">Expert wig maintenance, conditioning, and cleaning with convenient pickup and delivery service.</p>
            <button 
              onClick={() => navigate('/services')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Scissors className="w-8 h-8 text-pink-600" />}
              title="Wig Styling"
              description="Professional styling services for all types of wigs and hairpieces."
              onClick={() => navigate('/services')}
            />
            <ServiceCard 
              icon={<Sparkles className="w-8 h-8 text-pink-600" />}
              title="Deep Conditioning"
              description="Revitalize your artificial hair with our premium conditioning treatments."
              onClick={() => navigate('/services')}
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-8 h-8 text-pink-600" />}
              title="Cleaning & Maintenance"
              description="Thorough cleaning and maintenance to extend the life of your hairpieces."
              onClick={() => navigate('/services')}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep number="1" title="Book Service" description="Choose your service and schedule a pickup time" />
            <ProcessStep number="2" title="Pickup" description="We'll collect your hairpiece from your location" />
            <ProcessStep number="3" title="Service" description="Expert care and maintenance by our specialists" />
            <ProcessStep number="4" title="Delivery" description="Return delivery to your preferred location" />
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ContactInfo 
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              info="(555) 123-4567"
            />
            <ContactInfo 
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              info="123 Beauty Street, Fashion City"
            />
            <ContactInfo 
              icon={<Clock className="w-6 h-6" />}
              title="Hours"
              info="Mon-Sat: 9AM - 7PM"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, onClick }) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4 text-pink-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{info}</p>
    </div>
  );
}