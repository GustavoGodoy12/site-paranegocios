import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Acelere seu Crescimento com Soluções Digitais Sob Medida</h1>
        <p>
          Já ajudamos mais de 10 empresas a aumentarem sua eficiência com nossas soluções personalizadas. Descubra como podemos transformar seu negócio.
        </p>
        <div className="buttons">
          <a href="#solucoes" className="btn primary">Ver soluções</a>
          <a
            href="https://api.whatsapp.com/send?phone=5541985166032&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20solu%C3%A7%C3%B5es%20digitais."
            className="btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
