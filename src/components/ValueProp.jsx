import React from 'react';
import { motion } from 'framer-motion';

// VALUE PROP images
import vpImg1 from '../assets/VALUE PROP/Foto12_Horizontal.jpg';
import vpImg2 from '../assets/VALUE PROP/Foto4_Vertical.jpg';
import vpImg3 from '../assets/VALUE PROP/Foto7_Horizontal.JPG.JPG';

const ValueProp = () => {
  return (
    <section id="sobre-nosotros" className="
    py-20 
    bg-[#FFFFFF] 
   ">
      <div className="w-full px-[8vw] mx-auto">
        <div className="
         bg-[#FFFBEB] 
        rounded-[40px] md:rounded-[60px] p-8 md:p-24 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-[#111111]">
              La primera impresión vende (y mucho)
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed font-light">
              Nosotros nos encargamos de que sea inolvidable. Tenemos más de <span className="font-bold">10 años de experiencia</span> y más de <span className="font-bold">50 propiedades</span> fotografiadas para <span className="font-bold">Airbnb</span>, inmobiliarias en el <span className="font-bold">extranjero</span> y desarrolladores en <span className="font-bold">CABA</span> y <span className="font-bold">GBA</span>. Entendernos no será un problema: contamos con atención en <span className="font-bold">inglés, español, francés</span> e <span className="font-bold">italiano</span>.
            </p>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FFCE1F] hover:bg-[#F5C31A] text-black font-bold py-4 px-8 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              Contactanos <span className="font-black">ahora</span>
            </button>
          </motion.div>

          {/* Collage Cluster */}
          <div className="lg:w-1/2 relative min-h-[380px] md:min-h-[500px] w-full flex items-center justify-center mt-6 lg:mt-0">

            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute left-0 w-[80%] h-[320px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <img src={vpImg1} alt="Interior de propiedad" className="w-full h-full object-cover" />
            </motion.div>

            {/* Top Right Box */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-[55%] h-[180px] md:h-[250px] rounded-3xl overflow-hidden shadow-xl z-20 border-[4px] md:border-[6px] border-[#FFFBEB]"
            >
              <img src={vpImg2} alt="Vista de propiedad" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom Right Box */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute bottom-5 right-5 w-[45%] h-[150px] md:h-[200px] rounded-3xl overflow-hidden shadow-xl z-30 border-[4px] md:border-[6px] border-[#FFFBEB]"
            >
              <img src={vpImg3} alt="Detalle interior" className="w-full h-full object-cover" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProp;
