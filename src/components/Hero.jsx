import React from 'react';
import { motion } from 'framer-motion';

// Hero images
import h1 from '../assets/HERO/Foto1_Horizontal.JPG';
import h2 from '../assets/HERO/Foto11_Horizontal.jpg';
import h3 from '../assets/HERO/Foto16_Horizontal.jpg';
import h4 from '../assets/HERO/Foto18_Horizontal.jpg';
import h5 from '../assets/HERO/Foto20_Horizontal.jpg';
import h6 from '../assets/HERO/Foto21_Horizontal.jpg';
import h7 from '../assets/HERO/Foto22_Horizontal.jpg';
import h8 from '../assets/HERO/Foto23_Horizontal.jpg';
import h9 from '../assets/HERO/Foto25_Horizontal.jpg';
import h10 from '../assets/HERO/Foto26_Horizontal.jpg';
import h11 from '../assets/HERO/Foto27_Horizontal.jpg';
import h12 from '../assets/HERO/Foto28_Horizontal.jpg';
import h13 from '../assets/HERO/Foto30_Horizontal.jpg';
import h14 from '../assets/HERO/Foto31_Horizontal.jpg';
import h15 from '../assets/HERO/Foto6_Horizontal.JPG.JPG';
import h16 from '../assets/HERO/Foto9_Vertical.jpg';
import h17 from '../assets/Foto10_Horizontal.jpg';
import h18 from '../assets/Foto13_Horizontal.jpg';
import h19 from '../assets/Foto14_Horizontal.jpg';
import h20 from '../assets/Foto15_Horizontal.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  /*
   * Photo positions mapped from the reference design (1280×734).
   * Using absolute vw/vh positioning for each photo individually.
   * Photos are NOT in a uniform grid — sizes and positions vary.
   */
  const photos = [
    // ——— TOP ROW (3 photos, staggered heights) ———
    { src: h7, top: '5%', left: '16%', w: '22%', h: '18%' },
    { src: h8, top: '5%', left: '40%', w: '21%', h: '20%' },
    { src: h9, top: '5%', left: '63%', w: '22%', h: '18%' },
    // { src: h10, top: '0.5%',  left: '77%',  w: '12%',  h: '15%' },

    // ——— LEFT SIDE (5 photos, different sizes, staggered positions) ———
    { src: h1, top: '0%', left: '0.5%', w: '11%', h: '15%' },
    { src: h2, top: '16%', left: '0.5%', w: '11%', h: '17%' },
    { src: h3, top: '34%', left: '0.5%', w: '11%', h: '13%' },
    { src: h4, top: '48%', left: '0.5%', w: '11%', h: '14%' },
    { src: h5, top: '66%', left: '0.5%', w: '11%', h: '14%' },
    { src: h6, top: '81%', left: '0.5%', w: '11%', h: '15%' },
    // { src: h20, top: '91%', left: '-0.5%', w: '11%', h: '10%' },

    // ——— RIGHT SIDE (5 photos, different sizes, staggered positions) ———
    { src: h11, top: '0%', right: '0.5%', w: '11%', h: '16%' },
    { src: h12, top: '17%', right: '0.5%', w: '11%', h: '18%' },
    { src: h13, top: '36%', right: '0.5%', w: '11%', h: '13%' },
    { src: h14, top: '50%', right: '0.5%', w: '11%', h: '15%' },
    { src: h15, top: '66%', right: '0.5%', w: '11%', h: '14%' },
    { src: h16, top: '81%', right: '0.5%', w: '11%', h: '15%' },

    // ——— BOTTOM ROW (3 larger photos, staggered) ———
    { src: h17, bottom: '1%', left: '15%', w: '22%', h: '23%' },
    { src: h18, bottom: '0%', left: '40%', w: '21%', h: '25%' },
    { src: h19, bottom: '2%', left: '63%', w: '22%', h: '23%' },
  ];

  return (
    <section className="relative w-full h-screen bg-white overflow-hidden">

      {/* Photo Cloud — Desktop only */}
      <div className="absolute inset-0 pointer-events-none select-none hidden lg:block">
        {photos.map((photo, i) => {
          const posStyle = {};
          if (photo.top !== undefined) posStyle.top = photo.top;
          if (photo.bottom !== undefined) posStyle.bottom = photo.bottom;
          if (photo.left !== undefined) posStyle.left = photo.left;
          if (photo.right !== undefined) posStyle.right = photo.right;
          posStyle.width = photo.w;
          posStyle.height = photo.h;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.04 * i }}
              className="absolute rounded-xl overflow-hidden"
              style={posStyle}
            >
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* ===== CENTER CONTENT ===== */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="text-center flex flex-col items-center justify-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-1 mb-4"
          >
            <span className="font-instrument font-normal text-2xl tracking-wide text-[#FFCE1F] uppercase">STUDIO</span>
            <span className="font-instrument font-bold text-2xl tracking-tight text-[#FFCE1F] uppercase">NOIR</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl xl:text-[5rem] font-instrument font-medium text-[#111111] leading-none mb-10 tracking-tight whitespace-nowrap"
          >
            Amor a primera foto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl xl:text-[1.8rem] font-instrument font-medium text-[#111111] leading-none mb-10 tracking-tight whitespace-nowrap"
          >
            Destacá tu propiedad en <span className="font-bold">24 horas.</span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={scrollToContact}
            className="bg-[#FFCE1F] hover:bg-[#F5C31A] text-black font-normal py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-xl hover:-translate-y-1 text-lg inline-block"
          >
            Pedí tu <span className="font-bold">presupuesto</span>
          </motion.button>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="lg:hidden flex flex-col items-center min-h-[100svh] px-6 pt-28 pb-16">
        <div className="text-center mb-10 flex flex-col items-center flex-shrink-0 z-10 relative">
          <div className="flex items-center justify-center gap-1 mb-4">
            <span className="font-instrument font-normal text-xl tracking-wide text-[#FFCE1F] uppercase">STUDIO</span>
            <span className="font-instrument font-bold text-xl tracking-tight text-[#FFCE1F] uppercase">NOIR</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-instrument font-medium text-[#111111] leading-[1.1] mb-6 tracking-tight">
            Amor a primera foto
          </h1>
          <p className="text-lg text-gray-800 mb-8 max-w-[280px]">
            Destacá tu propiedad en <span className="font-bold">24 horas.</span>
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#FFCE1F] hover:bg-[#F5C31A] text-black font-normal py-3.5 px-8 rounded-xl transition-all shadow-md text-lg inline-block"
          >
            Pedí tu <span className="font-bold">presupuesto</span>
          </button>
        </div>

        {/* Dynamic Mobile Collage */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-[340px] mx-auto flex-grow max-h-[40vh] min-h-[250px]">
          <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-lg transform -rotate-2 origin-bottom-right">
             <img src={h16} className="absolute inset-0 w-full h-full object-cover" alt="" />
          </div>
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg transform rotate-2">
             <img src={h7} className="absolute inset-0 w-full h-full object-cover" alt="" />
          </div>
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg -mt-2">
             <img src={h19} className="absolute inset-0 w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
