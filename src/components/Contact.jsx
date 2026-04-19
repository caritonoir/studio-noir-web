import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Globe, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [isRemax, setIsRemax] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);
    formData.set('agente_remax', isRemax ? 'Sí' : 'No');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        body: formData
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (err) {
        console.error('El servidor no devolvió JSON válido. Respuesta:', text);
        alert('Hubo un error en el servidor. Revisa la consola o asegúrate de que el Host de Ferozo sea el correcto y no haya errores de PHP.');
        setStatus('idle');
        return;
      }
      
      if (response.ok && result?.success) {
        setStatus('success');
      } else {
        console.error('Error:', result?.message);
        alert('Hubo un error: ' + (result?.message || 'Error desconocido al enviar el email.'));
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error de red o de servidor. Por favor intenta de nuevo.');
      setStatus('idle');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="w-full px-[8vw] mx-auto">
        <div className="bg-[#FFF4E0] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden">

          {/* Left — Info */}
          <div className="lg:w-[40%] relative z-10 flex flex-col justify-between">
            <div>
              <span className="text-3xl mb-4 block">📷</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                ¿Listo para empezar?
              </h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed max-w-sm">
                <p>
                  Podes enviarnos un email, buscarnos en redes o completar el formulario indicando tus datos y cantidad de ambientes de tu propiedad.
                </p>
                <p>
                  También podes contactarnos por email o buscarnos en nuestras redes sociales.
                </p>
                <p>
                  Nos contactaremos con vos a la brevedad para brindarte la mejor asesoría.
                </p>
              </div>
            </div>

            {/* Social icons + email */}
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <a
                href="https://studionoir.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <Globe size={18} className="text-gray-700" />
              </a>
              <a
                href="https://instagram.com/heystudionoir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <Instagram size={18} className="text-gray-700" />
              </a>
              <a
                href="mailto:info@studionoir.com.ar"
                className="text-sm text-gray-700 hover:text-black transition-colors ml-1"
              >
                info@studionoir.com.ar
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:w-[60%] relative z-10">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center shadow-xl h-full flex flex-col items-center justify-center min-h-[400px]"
              >
                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Nos contactaremos con vos a la brevedad.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                name="contacto"
                method="POST"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >

                <input
                  type="text" name="name" placeholder="Nombre*" required
                  className="w-full bg-white rounded-xl p-4 border border-gray-200 focus:border-primary outline-none transition-all"
                />
                <input
                  type="text" name="last_name" placeholder="Apellido*" required
                  className="w-full bg-white rounded-xl p-4 border border-gray-200 focus:border-primary outline-none transition-all"
                />
                <input
                  type="email" name="email" placeholder="Email*" required
                  className="w-full bg-white rounded-xl p-4 border border-gray-200 focus:border-primary outline-none transition-all col-span-1 md:col-span-2"
                />
                <input
                  type="tel" name="phone" placeholder="Teléfono"
                  className="w-full bg-white rounded-xl p-4 border border-gray-200 focus:border-primary outline-none transition-all col-span-1 md:col-span-2"
                />

                {/* Agente REMAX checkbox + Ambientes dropdown */}
                <label
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 cursor-pointer select-none hover:border-primary transition-all"
                  onClick={() => setIsRemax(!isRemax)}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isRemax ? 'bg-primary border-primary' : 'border-gray-300 bg-white'}`}>
                    {isRemax && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Agente REMAX</span>
                  <input type="hidden" name="agente_remax" value={isRemax ? 'Sí' : 'No'} />
                </label>

                <select
                  name="ambientes"
                  className="w-full bg-white rounded-xl p-4 border border-gray-200 focus:border-primary outline-none transition-all text-gray-700 text-sm appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="">Ambientes</option>
                  <option value="1-2">1 a 2 ambientes</option>
                  <option value="3-5">3 a 5 ambientes</option>
                  <option value="5+">Más de 5 ambientes</option>
                </select>

                <textarea
                  name="message" placeholder="Mensaje" rows="4"
                  className="w-full bg-white rounded-xl p-4 border border-gray-200 focus:border-primary outline-none transition-all col-span-1 md:col-span-2 resize-vertical"
                ></textarea>

                <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="bg-[#1a1a2e] hover:bg-[#111122] text-white font-semibold py-3.5 px-16 rounded-xl transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
