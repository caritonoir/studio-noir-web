import React from 'react';

const MessageBanner = () => {
  return (
    <section className="py-24 md:py-32 bg-white flex items-center justify-center">
      <div className="px-6 text-center">
        <h2 className="font-instrument font-normal text-4xl md:text-5xl lg:text-[54px] tracking-tight text-[#111111]">
          Destacá tu propiedad en <span className="font-bold font-instrument">24 horas.</span>
        </h2>
      </div>
    </section>
  );
};

export default MessageBanner;
