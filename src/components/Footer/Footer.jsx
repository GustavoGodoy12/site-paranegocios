import React from 'react';
import {FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/">site.paranegocio</a>
        </div>
        <nav className="footer-links">
          <a href="#solucoes">Soluções</a>
          <a href="#sobre">Sobre</a>
          <a
            href="https://api.whatsapp.com/send?phone=5541985166032&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20solu%C3%A7%C3%B5es%20digitais."
            target="_blank"
            rel="noreferrer"
          >
            Contato
          </a>
        </nav>
        <div className="footer-social">
          <a href="https://api.whatsapp.com/send?phone=5541985166032&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20solu%C3%A7%C3%B5es%20digitais." target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/site.paranegocio/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} site.paranegocio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
