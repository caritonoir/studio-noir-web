import React from 'react';
import { motion } from 'framer-motion';

// FEATURES images
import featPool from '../assets/FEATURES/MaterialListoParaPublicarEn24Horas.jpg';
import featStaircase from '../assets/FEATURES/post-producciondealtacalidad.jpg';
import featOffice from '../assets/FEATURES/Masde10añosdeexperiencia.jpg';
import featHero from '../assets/FEATURES/atencionpersonalizada.JPG';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Features = () => {
  return (
    <section id="servicios" className="py-24 bg-[#FFFCF5]">
      <div className="w-full px-[8vw] mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* Card 1 — Material listo en 24h */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#FFFBEB] rounded-3xl border border-[#F5D77A]/40 p-8 md:p-10 flex flex-col md:flex-row gap-6 overflow-hidden"
          >
            {/* Text */}
            <div className="md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Material listo para publicar en 24 horas ⏳
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Las fotos se envían por <strong>WeTransfer</strong> directo a tu email; listas para ser publicadas donde lo necesites.
                </p>
              </div>
            </div>
            {/* Image + Mockup */}
            <div className="md:w-3/5 relative min-h-[220px]">
              <img
                src={featPool}
                alt="Propiedad con piscina"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* WeTransfer-style notification overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-3 w-[85%] max-w-[220px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-900 leading-tight">¡Correo enviado!</p>
                    <p className="text-[8px] text-gray-400 leading-tight">La transferencia es válida hasta 3 días.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="bg-blue-500 text-white text-[8px] font-semibold py-1 rounded text-center">¡Enviar otro!</div>
                  <div className="border border-gray-200 text-gray-600 text-[8px] font-medium py-1 rounded text-center">Explorar la visita previa</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Post-producción de alta calidad */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#FFFBEB] rounded-3xl border border-[#F5D77A]/40 p-8 md:p-10 flex flex-col gap-6 overflow-hidden"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                Post-producción de alta calidad 🖥️
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Editamos con lo más potente del mercado, Adobe <strong>Photoshop</strong> y Adobe <strong>Lightroom</strong> para una edición precisa.
              </p>
            </div>
            {/* Image with Lr/Ps badges */}
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden">
              <img
                src={featStaircase}
                alt="Interior con escalera moderna"
                className="w-full h-full object-cover"
              />
              {/* Adobe badges */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <div className="bg-[#31A8FF] w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg tracking-tight">Lr</span>
                </div>
                <div className="bg-[#31A8FF] w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg tracking-tight">Ps</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Atención personalizada */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#FFFBEB] rounded-3xl border border-[#F5D77A]/40 p-8 md:p-10 flex flex-col gap-6 overflow-hidden"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
                Atención personalizada 🌍
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nos adaptamos a tus necesidades. Atención en <strong>inglés, español, francés</strong> e <strong>italiano</strong> para clientes internacionales.
              </p>
            </div>
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
              <img
                src={featHero}
                alt="Interior de propiedad"
                className="w-full h-full object-cover"
              />
              {/* Language badges */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {['ES', 'EN', 'FR', 'IT'].map((lang) => (
                  <div key={lang} className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-gray-800">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4 — Más de 10 años de experiencia */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#FFFBEB] rounded-3xl border border-[#F5D77A]/40 p-8 md:p-10 flex flex-col md:flex-row gap-6 overflow-hidden"
          >
            {/* Image */}
            <div className="md:w-3/5 h-[220px] md:h-auto rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src={featOffice}
                alt="Decoración interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Text */}
            <div className="md:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Más de 10 años de experiencia ⭐
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trabajamos hace <strong>más de una década</strong> con todo tipo de propiedades y contamos con experiencia con <strong>clientes internacionales</strong>.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Features;
