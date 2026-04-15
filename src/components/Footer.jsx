import React from 'react';
import { Instagram, Facebook, Linkedin, Globe } from 'lucide-react';
import footerLogo from '../assets/footer/logo.png';

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="w-full px-[8vw] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <img src={footerLogo} alt="Studio Noir logo" className="w-8 h-8 object-contain" />
              <span className="font-instrument font-bold text-xl tracking-tight">STUDIO NOIR</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fotografía que vende, diseño que enamora.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3 items-center">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Recorré el sitio</h4>
              <a href="#sobre-nosotros" className="text-gray-500 text-sm hover:text-primary">Sobre Nosotros</a>
              <a href="#servicios" className="text-gray-500 text-sm hover:text-primary">Servicios</a>
              <a href="#portfolio" className="text-gray-500 text-sm hover:text-primary">Portfolio</a>
              <a href="#contacto" className="text-gray-500 text-sm hover:text-primary">Contacto</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://studionoir.myportfolio.com" target="_blank"
                rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary transition-colors text-gray-700 hover:text-white">
                <Globe size={20} />
              </a>

              {/* <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary transition-colors text-gray-700 hover:text-white">
                <Facebook size={20} />
              </a> */}
              <a href="https://instagram.com/heystudionoir"
                target="_blank"
                rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary transition-colors text-gray-700 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-xs text-right">
              © {new Date().getFullYear()} Studio Noir. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
