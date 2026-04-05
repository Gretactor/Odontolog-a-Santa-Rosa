import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Clock, Instagram } from 'lucide-react';
import { CONTACT } from '../constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">CE</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-brand-dark leading-tight">Consultorio Erique</span>
              <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Odontología Estética</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-teal hover:bg-brand-teal-light text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm shadow-brand-teal/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Agendar Cita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-teal text-white px-6 py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2 mt-2"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Cita por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 py-16" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">CE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-tight">Consultorio Erique</span>
                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">Odontología Estética</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Transformamos la ansiedad dental en tranquilidad y devolvemos la seguridad a través de una sonrisa perfecta en Santa Rosa, El Oro.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-heading font-semibold text-lg">Contacto</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-teal transition-colors">
                  <MessageCircle className="w-5 h-5 text-brand-teal" />
                  <span>{CONTACT.phoneDisplay} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-teal transition-colors">
                  <Instagram className="w-5 h-5 text-brand-teal" />
                  <span>{CONTACT.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-heading font-semibold text-lg">Horarios de Atención</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-teal shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">Lunes a Viernes</span>
                  <span className="text-sm">09:00 AM - 06:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-teal shrink-0" />
                <div className="flex flex-col">
                  <span className="text-white font-medium">Sábados</span>
                  <span className="text-sm">10:00 AM - 03:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Consultorio Erique. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all z-50 items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-medium px-4 py-2 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿En qué te ayudamos?
        </span>
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          Agendar por WhatsApp
        </a>
      </div>
    </>
  );
}
