import React from 'react';
import { motion } from 'framer-motion';

// Portfolio images
import port1 from '../assets/Portfolio/Foto10_Vertical.jpg';
import port2 from '../assets/Portfolio/Foto19_Horizontal.jpg';
import port3 from '../assets/Portfolio/Foto24_Horizontal.jpg';
import port4 from '../assets/Portfolio/Foto33_Horizontal.jpg';
import port5 from '../assets/Portfolio/Foto3_Vertical.jpg';
import port6 from '../assets/Portfolio/Foto5_Vertical.jpg';

const PortfolioItem = ({ src, alt, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`relative overflow-hidden group rounded-2xl ${className || ''}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </motion.div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="w-full px-[8vw] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >

        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">

          {/* Left tall image (spans 2 rows) */}
          <div className="md:row-span-2">
            <PortfolioItem
              src={port1}
              alt="Interior con escalera"
              className="h-[300px] md:h-full"
              delay={0}
            />
          </div>

          {/* Right top */}
          <div>
            <PortfolioItem
              src={port2}
              alt="Dormitorio elegante"
              className="h-[250px] md:h-[300px]"
              delay={0.1}
            />
          </div>

          {/* Right middle: two small images */}
          <div className="grid grid-cols-2 gap-4">
            <PortfolioItem
              src={port5}
              alt="Detalle decorativo"
              className="h-[200px] md:h-[550px]"
              delay={0.2}
            />
            <PortfolioItem
              src={port6}
              alt="Detalle interior"
              className="h-[200px] md:h-[550px]"
              delay={0.25}
            />
          </div>

          {/* Bottom row */}
          <PortfolioItem
            src={port3}
            alt="Salón principal"
            className="h-[250px] md:h-[300px]"
            delay={0.3}
          />
          <PortfolioItem
            src={port4}
            alt="Vista panorámica del interior"
            className="h-[250px] md:h-[300px]"
            delay={0.35}
          />

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
