import React from 'react';

const steps = [
  {
    number: "01",
    title: "Share Details",
    description: "Answer simple questions about the recipient's age, interests, occasion, and budget. The more details, the better the match!"
  },
  {
    number: "02",
    title: "Receive Recommendation",
    description: "Our intelligent algorithm processes your input to provide a curated list of personalized gift suggestions tailored to their preferences."
  },
  {
    number: "03",
    title: "Gift with Confidence",
    description: "Choose from our top recommendations, knowing you've found something thoughtful and unique that's sure to bring joy to the recipient."
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-pink-500 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          How Pick Perfect Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-pink-500 mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;