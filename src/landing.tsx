import React from "react";
// import { button } from "@/components/ui/button";

export default function WigCareLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="bg-pink-200 text-center py-20 px-4">
        <h1 className="text-4xl font-bold">Premium Wig Care at Your Doorstep!</h1>
        <p className="mt-2 text-lg">We wash, condition, and rejuvenate your wigs with expert care. Hassle-free pickup and delivery!</p>
        <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg">Book a Service</button>
      </div>

      {/* How It Works */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="p-4 bg-white shadow rounded-lg">Choose a Service</div>
          <div className="p-4 bg-white shadow rounded-lg">Schedule a Pickup</div>
          <div className="p-4 bg-white shadow rounded-lg">We Work Our Magic</div>
          <div className="p-4 bg-white shadow rounded-lg">Get Your Wig Delivered</div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 px-6 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white shadow rounded-lg">Basic Wash - $10</div>
          <div className="p-4 bg-white shadow rounded-lg">Deep Conditioning - $20</div>
          <div className="p-4 bg-white shadow rounded-lg">Complete Restoration - $30</div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold">What Our Customers Say</h2>
        <p className="mt-4 italic">"Amazing service! My wig looks brand new." - Sarah</p>
      </div>

      {/* Booking Form */}
      <div className="py-12 px-6 bg-pink-100 text-center">
        <h2 className="text-2xl font-semibold">Book a Service</h2>
        <form className="mt-6">
          <input className="p-2 rounded-lg border w-full md:w-1/2" type="text" placeholder="Your Name" />
          <input className="p-2 rounded-lg border w-full md:w-1/2 mt-4" type="text" placeholder="Service Needed" />
          <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}
