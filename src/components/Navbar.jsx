import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Sobre nosotros', href: '#sobre-nosotros' },
    { name: 'Servicios', href: '#servicios' },
  ];

  const rightLinks = [
    { name: 'Paquetes', href: '#paquetes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 ${scrolled ? 'py-4 shadow-sm' : 'py-6'}`}>
      <div className="w-full px-[8vw] flex justify-between items-center relative">
        {/* Desktop Menu */}
        <div className="hidden md:flex w-full items-center justify-between relative">

          {/* Left Links */}
          <div className="flex-1 flex justify-end gap-12 pr-20 md:pr-40">
            {leftLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-medium text-[15px] hover:text-primary transition-colors tracking-tight">
                {link.name}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-0 group cursor-pointer absolute left-1/2 -translate-x-1/2"
          >
            <span className="font-instrument font-bold text-3xl tracking-tighter text-[#FFCE1F]">STUDIO</span>
            <span className="font-instrument font-bold text-3xl tracking-tighter text-[#000000] ml-1">NOIR</span>
          </button>

          {/* Right Links */}
          <div className="flex-1 flex justify-start gap-12 pl-20 md:pl-40">
            {rightLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-medium text-[15px] hover:text-primary transition-colors tracking-tight">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-0"
          >
            <span className="font-instrument font-bold text-2xl tracking-tighter text-[#FFCE1F]">STUDIO</span>
            <span className="font-instrument font-bold text-2xl tracking-tighter text-[#000000] ml-1">NOIR</span>
          </button>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 text-center">
              {[...leftLinks, ...rightLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-lg text-gray-800 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
