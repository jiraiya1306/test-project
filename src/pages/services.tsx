import React from 'react';
import { CheckCircle2, Gift, Sparkles, Droplets, Wind, Bomb as Comb, Scissors } from 'lucide-react';

export function ServiceDetails() {
  const serviceSteps = [
    {
      icon: <Comb className="w-8 h-8" />,
      title: "Initial Assessment & Detangling",
      description: "Careful examination and gentle detangling of the hairpiece using professional tools.",
      duration: "30 mins"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Premium Cleansing",
      description: "Deep cleansing with specialized wig shampoo to remove buildup and impurities.",
      duration: "45 mins"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Deep Conditioning Treatment",
      description: "Application of premium conditioning treatment to restore moisture and shine.",
      duration: "60 mins"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Luxury Hair Mask",
      description: "Intensive repair mask treatment for enhanced softness and manageability.",
      duration: "45 mins"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Professional Blow Drying",
      description: "Gentle blow drying with controlled temperature to protect the fibers.",
      duration: "30 mins"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Styling & Finishing",
      description: "Expert styling to achieve your desired look with long-lasting results.",
      duration: "45 mins"
    }
  ];

  const complimentaryGifts = [
    {
      title: "Essential Care Kit",
      items: ["Travel-size wig shampoo", "Conditioning spray", "Detangling brush", "Storage bag"],
      value: "$45"
    },
    {
      title: "Styling Accessories",
      items: ["Wig stand", "Styling clips", "Edge brush", "Satin sleep cap"],
      value: "$35"
    },
    {
      title: "Maintenance Products",
      items: ["Leave-in conditioner", "Heat protectant", "Shine serum", "Care guide"],
      value: "$40"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Premium Wig Care Process</h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Experience our comprehensive 6-step wig care service, designed to restore and maintain 
          your hairpiece's beauty while extending its lifespan.
        </p>

        {/* Service Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {serviceSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4">
              <div className="flex-shrink-0 bg-pink-100 p-3 rounded-full text-pink-600">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-sm text-pink-600 font-medium">
                  Duration: {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Complimentary Hair Care Goodies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With every service, receive a luxury gift set to help maintain your 
              hairpiece's beauty at home. Choose from our curated collection:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {complimentaryGifts.map((gift, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-center mb-4">
                  <Gift className="w-12 h-12 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{gift.title}</h3>
                <div className="space-y-3">
                  {gift.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-pink-600 font-semibold">Value: {gift.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition inline-flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Book Your Service Now</span>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Service?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <p className="text-gray-600">Expert technicians with years of experience in wig care</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <p className="text-gray-600">Premium products specifically formulated for artificial hair</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <p className="text-gray-600">Convenient pickup and delivery service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}