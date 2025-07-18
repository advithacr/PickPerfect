import React from 'react';
import backgroundImage from '../assets/Red Watercolor Cute Bow Christmas Phone Wallpaper (1).png'; // ← Update with your image path

const ValueProposition = () => {
  return (
    <section
      className="py-16 bg-no-repeat bg-center bg-cover text-center text-black"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-xl mx-auto px-4">
        <p className="text-[22px] md:text-[24px] leading-relaxed font-[900] font-[Caveat]">
          Discover thoughtful<br />
          presents for every<br />
          occasion, tailored to<br />
          perfection.<br />
          We make gifting effortless<br />
          and memorable.
        </p>
      </div>
    </section>
  );
};

export default ValueProposition;
