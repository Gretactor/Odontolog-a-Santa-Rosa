import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Smile, Stethoscope, ChevronDown, MessageCircle } from 'lucide-react';
import { CONTACT, SERVICES, FAQS } from '../constants';

// Helper to map icon strings to components
const IconMap: Record<string, React.ElementType> = {
  Sparkles, ShieldCheck, Smile, Stethoscope
};

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-brand-dark">
              Odontología de Excelencia en <span className="text-brand-teal">Santa Rosa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
              Recupera la salud y belleza de tu sonrisa con tratamientos sin dolor, tecnología moderna y atención humana personalizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-teal hover:bg-brand-teal-light text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors shadow-lg shadow-brand-teal/25 flex items-center justify-center gap-2"
              >
                Agendar Cita
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#servicios"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium text-lg transition-colors flex items-center justify-center"
              >
                Ver Tratamientos
              </a>
            </div>
            
            <div className="flex items-center gap-6 mt-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                Atención sin dolor
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                Tecnología moderna
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-slate-100">
              <img 
                src="/doctor.jpg?v=2" 
                alt="Dr. Julio Erique con paciente" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-heading font-semibold text-xl">Dr. Julio Erique</p>
                <p className="text-white/80">Odontólogo</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-3">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
            Tratamientos diseñados para ti
          </h3>
          <p className="text-slate-600 text-lg">
            Desde limpiezas preventivas hasta diseño de sonrisa completo. Utilizamos materiales de primera calidad para resultados duraderos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-brand-teal" />
                </div>
                <h4 className="text-xl font-heading font-bold text-brand-dark mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <a 
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-teal font-medium hover:text-brand-teal-light transition-colors"
                >
                  Saber más <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  return (
    <section id="resultados" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              No ocultes más tu sonrisa. Con nuestros tratamientos de carillas y diseño de sonrisa, logramos resultados naturales, estéticos y funcionales en tiempo récord.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-teal-light" />
                Materiales biocompatibles de alta resistencia
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-teal-light" />
                Diseño personalizado a tu rostro
              </li>
              <li className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-brand-teal-light" />
                Procedimiento rápido y sin dolor
              </li>
            </ul>
            <a 
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-dark hover:bg-slate-100 px-8 py-4 rounded-xl font-medium text-lg transition-colors w-fit flex items-center gap-2"
            >
              Quiero una sonrisa así
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Caso 1 */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden aspect-square relative bg-slate-800 shadow-lg">
                  <img 
                    src="/antes.jpg?v=2" 
                    alt="Antes del tratamiento 1" 
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Antes
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative bg-slate-800 shadow-lg">
                  <img 
                    src="/antes1.jpg?v=2" 
                    alt="Antes del tratamiento 2" 
                    className="w-full h-full object-cover grayscale opacity-80"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    Antes
                  </div>
                </div>
              </div>
              
              {/* Caso 2 */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden aspect-square relative shadow-2xl shadow-brand-teal/20 border-2 border-brand-teal/30 bg-slate-800">
                  <img 
                    src="/despues.jpeg?v=2" 
                    alt="Después del tratamiento 1" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Después
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative shadow-2xl shadow-brand-teal/20 border-2 border-brand-teal/30 bg-slate-800">
                  <img 
                    src="/despues1.jpeg?v=2" 
                    alt="Después del tratamiento 2" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-brand-teal text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Después
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
            ¿Miedo al dentista? Aquí te cuidamos
          </h2>
          <p className="text-slate-600 text-lg">
            Entendemos la ansiedad que puede generar ir al dentista. Por eso, hemos diseñado una experiencia enfocada en tu tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Atención sin dolor",
              desc: "Utilizamos técnicas modernas y anestesia de alta calidad para que no sientas molestias durante tu tratamiento.",
              icon: Smile
            },
            {
              title: "Higiene y Seguridad",
              desc: "Contamos con protocolos estrictos de esterilización en todos nuestros instrumentos y áreas de trabajo.",
              icon: ShieldCheck
            },
            {
              title: "Trato Humano",
              desc: "Te explicamos cada paso con paciencia. Tú tienes el control y avanzamos a tu ritmo.",
              icon: Stethoscope
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-brand-blue" />
              </div>
              <h4 className="text-xl font-heading font-bold text-brand-dark mb-3">{item.title}</h4>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal font-semibold tracking-wider uppercase text-sm mb-3">Resolvemos tus dudas</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
            Preguntas Frecuentes
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-heading font-semibold text-brand-dark text-lg pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-teal shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 rounded-3xl p-8">
          <h4 className="font-heading font-bold text-brand-dark text-xl mb-2">¿Tienes otra duda?</h4>
          <p className="text-slate-600 mb-6">Escríbenos directamente y te responderemos de inmediato.</p>
          <a 
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chatear con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-brand-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          ¿Listo para sonreír con confianza?
        </h2>
        <p className="text-teal-50 text-xl mb-10 max-w-2xl mx-auto">
          Escríbenos hoy y da el primer paso hacia tu nueva sonrisa. Evaluación personalizada en Santa Rosa.
        </p>
        <a 
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-brand-teal px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-xl shadow-brand-dark/10"
        >
          <MessageCircle className="w-6 h-6" />
          Escribir al WhatsApp
        </a>
      </div>
    </section>
  );
}
