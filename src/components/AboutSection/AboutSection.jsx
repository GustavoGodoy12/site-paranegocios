import React from 'react';
import './AboutSection.css';
import img from '../../assets/Site PARANEGOCIO.png';

const AboutSection = () => {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <div className="about-image">
          {/* Substitua a URL abaixo pela imagem desejada */}
          <img src={img} alt="Sobre nós" />
        </div>
        <div className="about-content">
          <h2>Por Que Nos Escolher?</h2>
          <div className="about-item">
            <h3>Experiência Comprovada</h3>
            <p>
              Mais de 10 anos no mercado desenvolvendo soluções que já beneficiaram dezenas de empresas em diferentes setores.
            </p>
          </div>
          <div className="about-item">
            <h3>Resultados Garantidos</h3>
            <p>
              Nossos clientes relatam em média 300% de aumento em produtividade e 50% de redução em custos operacionais.
            </p>
          </div>
          <div className="about-item">
            <h3>Suporte Dedicado</h3>
            <p>
              Equipe técnica especializada disponível 24/7 para garantir o funcionamento perfeito das suas soluções.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
