import { useState } from "react";
import { motion } from "motion/react";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "Sets",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Outfits",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vestidos",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Accesorios",
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80",
  },
];

export function CategoryGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="categories-section" className="w-full bg-white text-black pt-0 pb-0 px-0 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full border-b border-neutral-100" id="categories-grid-container">
        {categories.map((category, idx) => (
          <div
            key={category.name}
            className="group relative flex flex-col overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            id={`category-item-${category.name.toLowerCase()}`}
          >
            {/* Image Container with aspect-3:4 for portrait fashion display */}
            <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-100 relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Subtle elegant hover overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Label container beneath the image */}
            <div
              className="bg-white py-5 text-center transition-colors duration-300 border-r border-neutral-100 last:border-r-0"
              style={{
                color: hoveredIdx === idx ? "#8B7355" : "#000000",
              }}
              id={`category-label-${idx}`}
            >
              <span className="font-body text-xs md:text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-300">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
