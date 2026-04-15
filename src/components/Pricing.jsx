import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ title, subtitle, price, features, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group bg-white rounded-2xl p-8 md:p-10 flex flex-col h-full border-2 border-gray-200 hover:border-[#FFCE1F] transition-all duration-300"
  >
    <h3 className="text-lg font-bold mb-1">{title}</h3>
    <p className="text-sm text-gray-500 mb-6">{subtitle}</p>

    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-5xl md:text-6xl font-bold tracking-tight">${price}</span>
      <span className="text-gray-400 text-base font-normal">/ sesión</span>
    </div>

    <ul className="space-y-3 mb-10 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex gap-3 items-start text-gray-700 text-sm">
          <Check size={18} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
          <span dangerouslySetInnerHTML={{ __html: feature }} />
        </li>
      ))}
    </ul>

    <button
      onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
      className="w-full py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold transition-all duration-300 text-sm group-hover:bg-[#FFCE1F] group-hover:border-[#FFCE1F] group-hover:text-black"
    >
      Lo quiero
    </button>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Pack Básico",
      subtitle: "Inmuebles hasta 2 ambientes",
      price: "80",
      features: [
        "10 Fotografías en HD",
        "Post-producción digital",
        "Entrega en 24h",
      ],
    },
    {
      title: "Pack Completo",
      subtitle: "Inmuebles de 3 a 5 ambientes",
      price: "200",
      features: [
        "Pack <strong>básico</strong>",
        "10 fotografías extra",
        "1 video recorrido",
      ],
    },
    {
      title: "Pack Premium",
      subtitle: "Inmuebles de + de 5 ambientes",
      price: "350",
      features: [
        "Pack <strong>completo</strong>",
        "15 fotografías extra",
        "Book de agente inmobiliario",
      ],
    }
  ];

  return (
    <section id="precios" className="py-24 bg-white relative overflow-hidden">
      <div className="w-full px-[8vw] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Nuestros <span className="font-bold
                ">precios</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
