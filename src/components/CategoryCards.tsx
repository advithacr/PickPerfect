import React from 'react';

interface CategoryCard {
  title: string;
  image: string;
  bgColor: string;
}

const categories: CategoryCard[] = [
  {
    title: "BIRTHDAY",
    image: "https://images.pexels.com/photos/1857166/pexels-photo-1857166.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-pink-100"
  },
  {
    title: "ANNIVERSARY",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-purple-100"
  },
  {
    title: "FAMILY",
    image: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-blue-100"
  },
  {
    title: "THANK YOU GIFT",
    image: "https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=400",
    bgColor: "bg-yellow-100"
  }
];

const CategoryCards = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center font-corben mb-2">
          Top Picks
        </h2>
        <h3 className="text-2xl font-bold text-center font-corben mb-10">
          This Week
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`${category.bgColor} rounded-3xl p-4 w-full max-w-[180px] shadow-md hover:scale-105 transition-transform duration-300`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* ✅ Removed font-corben from title */}
              <h4 className="text-lg text-center text-black leading-tight font-semibold">
                {category.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
