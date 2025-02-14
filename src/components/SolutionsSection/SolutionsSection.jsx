import React from 'react';
import './SolutionsSection.css';
import { FaLaptopCode, FaUserTie, FaRocket } from 'react-icons/fa';

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="solutions">
      <div className="solutions-container">
        <h2>Soluções que Geram Resultados</h2>
        <p className="subtitle">
          Desenvolvemos soluções tecnológicas que já ajudaram dezenas de empresas a aumentarem sua produtividade e reduzirem custos operacionais.
        </p>

        <div className="solutions-boxes">
          <div className="solution-box">
            <div className="icon">
              <FaLaptopCode />
            </div>
            <h3>Software Personalizado</h3>
            <p>
              Sistemas sob medida que automatizam processos e aumentam a eficiência da sua empresa em até 300%.
            </p>
            <ul>
              <li>✓ Integração com sistemas existentes</li>
              <li>✓ Interface intuitiva e moderna</li>
              <li>✓ Suporte técnico especializado</li>
            </ul>
          </div>

          <div className="solution-box">
            <div className="icon">
              <FaUserTie />
            </div>
            <h3>Consultoria Estratégica</h3>
            <p>
              Análise completa do seu negócio para identificar oportunidades de otimização através da tecnologia.
            </p>
            <ul>
              <li>✓ Diagnóstico tecnológico</li>
              <li>✓ Planejamento estratégico</li>
              <li>✓ Implementação guiada</li>
            </ul>
          </div>

          <div className="solution-box">
            <div className="icon">
              <FaRocket />
            </div>
            <h3>Transformação Digital</h3>
            <p>
              Modernize seu negócio com soluções inovadoras que garantem vantagem competitiva no mercado.
            </p>
            <ul>
              <li>✓ Automação de processos</li>
              <li>✓ Análise de dados</li>
              <li>✓ Escalabilidade garantida</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
