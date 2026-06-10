import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

// COLOR SYSTEM
const colors = {
  primary: '#1A1208',
  secondary: '#C9A84C',
  accent: '#52A870',
  neutral: '#F7F1E8',
  white: '#FFFFFF',
  dark: '#1A1208',
  text: '#1A1208',
  textLight: '#5C4A2A',
  border: 'rgba(201, 168, 76, 0.18)',
};

// NAVBAR
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: colors.border }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold" style={{ color: colors.primary }}>Adhara</div>
        <div className="hidden md:flex gap-6 items-center">
          <button className="text-sm font-medium" style={{ color: colors.secondary }}>Calcular ROI</button>
          <a href="https://wa.me/56949238584" className="px-6 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: colors.accent }}>Hablar con Soporte</a>
          <a href="https://somosadhara.cl" className="px-6 py-2 rounded-full text-white text-sm font-medium" style={{ backgroundColor: colors.primary }}>Comprar ahora</a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

// HERO
function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <div className="text-sm font-medium tracking-widest uppercase" style={{ color: colors.secondary }}>
            El alisado que tus clientas aspiracionalmente buscan
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: colors.primary }}>
            Sé el salón orgánico que aman.
            <br />
            Sin formol. Sin compromiso.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: colors.textLight, maxWidth: '500px' }}>
            Adhara es el alisado premium, limpio y efectivo que deja brillo 3+ meses SIN DAÑO. Tus clientas regresan 4 veces al año (no 2). Cada servicio es completo, no retoque. Tú ganas $90K+ por servicio. Y respiras tranquilo.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="btn-gold">Calcular mi ROI</button>
            <a href="https://wa.me/56949238584" className="btn-dark">Hablar con Soporte Pro</a>
          </div>
        </div>
        <div className="h-96 rounded-lg" style={{ backgroundColor: colors.neutral }}>
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Alisado en acción (sin humo tóxico)
          </div>
        </div>
      </div>
    </section>
  );
}

// COMPARATIVA
function Comparativa() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: colors.primary }}>
          Con formol pierdes dinero (aunque no lo ves)
        </h2>
        <p className="text-center text-lg mb-12" style={{ color: colors.textLight, maxWidth: '600px', margin: '0 auto 48px' }}>
          Cada cliente que no regresa es dinero que nunca ganas.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: `2px solid ${colors.border}` }}>
                <th className="text-left py-4 px-4 font-bold" style={{ color: colors.primary }}>Aspecto</th>
                <th className="text-left py-4 px-4 font-bold" style={{ color: colors.primary }}>FORMOL (Actual)</th>
                <th className="text-left py-4 px-4 font-bold" style={{ color: colors.primary }}>ADHARA (Nuevo)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Daño capilar', 'Sí, permanente', 'No, repara'],
                ['Servicios/año cliente', '2 máximo', '4 posibles'],
                ['Tipo 2do servicio', 'Retoque parchado', 'Servicio completo'],
                ['Margen/año por cliente', '$180K', '$360K'],
                ['Cliente regresa', '50% abandona', '95% regresa'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${colors.border}` }}>
                  <td className="py-4 px-4 font-medium" style={{ color: colors.primary }}>{row[0]}</td>
                  <td className="py-4 px-4" style={{ color: colors.textLight }}>{row[1]}</td>
                  <td className="py-4 px-4 font-bold" style={{ color: colors.accent }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-6 rounded-lg text-center" style={{ backgroundColor: colors.neutral }}>
          <div className="text-3xl font-bold" style={{ color: colors.accent }}>+$180K/año</div>
          <div className="text-sm text-gray-600">por cliente en diferencia de margen</div>
        </div>
      </div>
    </section>
  );
}

// DIFERENCIALES (3 COLUMNAS)
function Diferenciales() {
  const features = [
    {
      title: 'Brillo sin daño',
      description: 'Con Adhara, el brillo ES REPARACIÓN. Cada alisado deja el cabello más saludable, no menos. Cliente que regresa porque AMA su cabello, no porque necesita repararlo.',
      cita: '"Deja un brillo intenso, visiblemente más reparado" — Lorena I.'
    },
    {
      title: 'Hasta 4 servicios/año',
      description: 'Con Adhara, cliente pide 3-4 servicios/año sin culpa. Resultado GRADUAL en todo el cabello. MARGEN: 4 servicios × $90K = $360K/cliente/año',
      cita: '"Se mantiene intacto varias semanas" — Sandro O.'
    },
    {
      title: 'Experiencia premium',
      description: 'SIN humo tóxico, SIN picazón ocular. Cliente cómoda, brillo inmediato, se desvanece GRADUAL = cliente vuelve sin presión.',
      cita: '"Fácil de aplicar, sin olor tóxico" — Guiselle U.'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.primary }}>
          Lo que el formol no te da (y Adhara sí)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-lg border" style={{ borderColor: colors.border, backgroundColor: colors.neutral }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>{f.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: colors.textLight }}>{f.description}</p>
              <p className="text-xs italic" style={{ color: colors.secondary }}>{f.cita}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CALCULADORA ROI
function Calculadora() {
  const [precio, setPrecio] = useState(100000);
  const costoServicio = 9749;
  const ganancia = precio - costoServicio;
  const revenueFormol = ganancia * 2;
  const revenueAdhara = ganancia * 4;
  const diferencia = revenueAdhara - revenueFormol;

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: colors.primary }}>
          Mueve el slider: ¿Cuánto ganas realmente?
        </h2>
        <p className="text-center text-lg mb-12" style={{ color: colors.textLight }}>
          Cada estilista cobra diferente. Mueve el slider con tu precio real.
        </p>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-medium" style={{ color: colors.primary }}>Tu precio por alisado</label>
            <div className="text-3xl font-bold" style={{ color: colors.secondary }}>
              ${precio.toLocaleString('es-CL')}
            </div>
          </div>
          <input
            type="range"
            min="80000"
            max="150000"
            step="5000"
            value={precio}
            onChange={(e) => setPrecio(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{ background: colors.secondary }}
          />
          <div className="flex justify-between text-xs mt-2" style={{ color: colors.textLight }}>
            <span>$80.000</span>
            <span>$150.000</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 rounded-xl border-2 transition-all hover:shadow-lg" style={{ borderColor: '#ddd', backgroundColor: colors.neutral }}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ color: colors.textLight, fontSize: '24px' }}>📉</div>
              <h3 className="text-lg font-bold" style={{ color: colors.primary }}>CON FORMOL</h3>
            </div>
            <div className="space-y-4">
              <div className="pb-4 border-b" style={{ borderColor: colors.border }}>
                <span className="text-xs font-semibold uppercase" style={{ color: colors.textLight }}>Servicios/año</span>
                <div className="text-3xl font-black mt-2" style={{ color: colors.primary }}>2×</div>
              </div>
              <div className="pb-4 border-b" style={{ borderColor: colors.border }}>
                <span className="text-xs font-semibold uppercase" style={{ color: colors.textLight }}>Revenue anual</span>
                <div className="text-2xl font-bold mt-2" style={{ color: colors.textLight }}>${revenueFormol.toLocaleString('es-CL')}</div>
              </div>
              <div className="text-xs italic" style={{ color: colors.textLight }}>Por cliente</div>
            </div>
          </div>

          <div className="p-8 rounded-xl border-2 transition-all hover:shadow-xl" style={{ borderColor: colors.secondary, backgroundColor: 'rgba(201, 168, 76, 0.05)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ fontSize: '24px' }}>📈</div>
              <h3 className="text-lg font-bold" style={{ color: colors.primary }}>CON ADHARA</h3>
            </div>
            <div className="space-y-4">
              <div className="pb-4 border-b" style={{ borderColor: colors.border }}>
                <span className="text-xs font-semibold uppercase" style={{ color: colors.secondary }}>Servicios/año</span>
                <div className="text-3xl font-black mt-2" style={{ color: colors.secondary }}>4×</div>
              </div>
              <div className="pb-4 border-b" style={{ borderColor: colors.border }}>
                <span className="text-xs font-semibold uppercase" style={{ color: colors.secondary }}>Revenue anual</span>
                <div className="text-2xl font-bold mt-2" style={{ color: colors.accent }}>${revenueAdhara.toLocaleString('es-CL')}</div>
              </div>
              <div className="text-xs font-bold" style={{ color: colors.secondary }}>+${diferencia.toLocaleString('es-CL')} diferencia</div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-8 rounded-lg text-center" style={{ backgroundColor: colors.accent + '20' }}>
          <div className="text-4xl font-bold" style={{ color: colors.accent }}>+${diferencia.toLocaleString('es-CL')}</div>
          <div className="text-sm" style={{ color: colors.textLight }}>Diferencia anual por cliente</div>
        </div>

        <div className="flex gap-4 justify-center mt-12">
          <a href="https://wa.me/56949238584" className="btn-gold">Quiero este margen</a>
          <a href="https://somosadhara.cl" className="btn-dark">Comprar ahora</a>
        </div>
      </div>
    </section>
  );
}

// SOCIAL PROOF
function SocialProof() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12" style={{ color: colors.primary }}>
          1.030+ reseñas verificadas. Estilistas que volvieron.
        </h2>

        <div className="p-8 rounded-lg mb-12" style={{ backgroundColor: colors.neutral }}>
          <p className="text-xl leading-relaxed mb-6" style={{ color: colors.primary, fontStyle: 'italic' }}>
            "Trabajo en peluquería 15+ años. Con formol, mis clientas regresaban porque NECESITABAN reparación, no porque AMABAN su cabello.
            <br /><br />
            Con Adhara, cambió TODO. Regresan porque aman el brillo, porque el cabello se REPARA, porque pueden venir 4 veces sin miedo.
            <br /><br />
            Y yo? Gano el doble. 4 servicios × $90K {'>'} 2 servicios × $80K."
          </p>
          <p className="font-bold" style={{ color: colors.secondary }}>— Maritza A., peluquería, 15+ años</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { name: 'Claudia R.', role: 'Dueña de salón', text: 'Mis clientas regresaban obligadas con formol. Con Adhara, felices.' },
            { name: 'Ana María Z.', role: 'Academia', text: 'El margen es casi doble. Porque frecuencia = revenue.' },
            { name: 'Guiselle U.', role: 'Estilista', text: 'Sin olor tóxico, super recomendable para mis colegas.' },
          ].map((t, i) => (
            <div key={i} className="p-4 rounded-lg border" style={{ borderColor: colors.border }}>
              <p className="text-sm mb-2" style={{ color: colors.textLight }}>"{t.text}"</p>
              <p className="font-bold text-xs" style={{ color: colors.secondary }}>{t.name}</p>
              <p className="text-xs" style={{ color: colors.textLight }}>{t.role}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { number: '1.030+', label: 'Reseñas verificadas' },
            { number: '25.350+', label: 'Tratamientos aplicados' },
            { number: '6+', label: 'Años de pionería' },
            { number: '65%+', label: 'Prefieren orgánico' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold" style={{ color: colors.accent }}>{stat.number}</div>
              <div className="text-xs" style={{ color: colors.textLight }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// PASOS DE APLICACIÓN
function PasosAplicacion() {
  const pasos = [
    { num: '1', titulo: 'Lava con kit', descripcion: 'Lava con el Shampoo y quita el exceso de agua', icon: '🧴' },
    { num: '2', titulo: 'Aplica el alisado Adhara', descripcion: 'Deja actuar 60 minutos', icon: '⏰' },
    { num: '3', titulo: 'Retira producto', descripcion: 'Aplica máscara 3 minutos y enjuaga', icon: '✨' },
    { num: '4', titulo: 'Seca y plancha', descripcion: 'Seca al 100% y plancha 10 a 15 veces por mechón', icon: '💨' }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4" style={{ color: colors.primary }}>
          Cómo aplicar: Simple y rápido
        </h2>
        <p className="text-center text-lg mb-16" style={{ color: colors.textLight }}>
          4 pasos fáciles. Sin complicaciones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {pasos.map((paso, i) => (
            <div key={i} className="p-8 rounded-lg border-2 text-center" style={{ borderColor: colors.secondary, backgroundColor: 'white' }}>
              <div className="text-5xl mb-4">{paso.icon}</div>
              <div className="text-4xl font-bold mb-3" style={{ color: colors.secondary }}>{paso.num}</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>{paso.titulo}</h3>
              <p className="text-sm" style={{ color: colors.textLight }}>{paso.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-8 rounded-lg border-2" style={{ borderColor: colors.accent, backgroundColor: colors.neutral }}>
            <div className="text-3xl font-bold mb-2" style={{ color: colors.accent }}>⏳</div>
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>60 min activo</div>
          </div>
          <div className="p-8 rounded-lg border-2" style={{ borderColor: colors.accent, backgroundColor: colors.neutral }}>
            <div className="text-3xl font-bold mb-2" style={{ color: colors.accent }}>🔄</div>
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>Hasta 20 alisados</div>
          </div>
          <div className="p-8 rounded-lg border-2" style={{ borderColor: colors.accent, backgroundColor: colors.neutral }}>
            <div className="text-3xl font-bold mb-2" style={{ color: colors.accent }}>✨</div>
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>3 a 4 meses</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ ACCORDION
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { pregunta: '¿Dura realmente 3-4 meses?', respuesta: 'Sí, si sigues el protocolo correcto (shampoo neutro, mascarilla semanal, protector térmico). El resultado se desvanece GRADUAL, no de repente. Cliente regresa elegida cada 6-8 semanas, no obligada por frizz horrible.' },
    { pregunta: '¿Funciona en TODO tipo de cabello?', respuesta: 'Adhara está pensado para cabello con VOLUMEN Y RIZO (crespo, grueso, ondulado fuerte). En ondulado fino, reduce frizz pero no alisa 100%. En cabello decolorado, testea primero en mechita.' },
    { pregunta: '¿Mis clientas van a venir 4 veces al año?', respuesta: 'Sí. Porque: 1) Sin culpa de daño. 2) Resultado desvanece GRADUAL (no de repente). 3) Es trending: 65%+ buscan orgánico. Tus clientas dirán: Por fin encontré el salón donde puedo alisar sin culpa.' },
    { pregunta: '¿Tiene olor tóxico?', respuesta: 'NO. Adhara tiene un AROMA AGRADABLE durante todo el proceso. La diferencia: Formol HUELE A HUMO TÓXICO. Adhara HUELE A AROMA profesional. Una cliente sin ardor ocular es cliente recurrente.' },
    { pregunta: '¿Cuál es el costo real por servicio?', respuesta: 'Costo por servicio: $9.749 (Kit $194.990 ÷ 20 alisados). Si cobras $100K, tu ganancia es $90.251. Margen: 90%. Revenue por cliente/año: $360K (4 servicios).' }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.primary }}>
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg" style={{ borderColor: colors.border }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between hover:bg-opacity-50 transition"
                style={{ backgroundColor: openIndex === i ? colors.neutral : '#fff' }}
              >
                <h3 className="font-bold text-left" style={{ color: colors.primary }}>
                  {faq.pregunta}
                </h3>
                <ChevronDown
                  size={20}
                  style={{
                    color: colors.secondary,
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 300ms'
                  }}
                />
              </button>
              {openIndex === i && (
                <div className="p-6 border-t" style={{ borderColor: colors.border, backgroundColor: colors.neutral }}>
                  <p style={{ color: colors.textLight, lineHeight: '1.7' }}>
                    {faq.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA FINAL
function CTAFinal() {
  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: colors.primary }}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Eres a una decisión de ser "el salón orgánico" que tus clientas buscan
        </h2>
        <p className="text-lg leading-relaxed mb-8 opacity-90 max-w-2xl mx-auto">
          Con formol: cliente insatisfecha, baja frecuencia, margen bajo.
          <br /><br />
          Con Adhara: cliente feliz, 4 servicios/año, margen premium.
          <br /><br />
          Los números: +$180K/año por cliente. En 10 clientes = +$1.8M/año.
          <br /><br />
          Tu salón no es solo negocio. Es donde tus clientas AMAN su cabello.
          <br /><br />
          <strong>Elige.</strong>
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="https://wa.me/56949238584" className="btn-gold text-lg">
            Quiero este margen →
          </a>
          <button className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-primary transition">
            Comprar kit ahora
          </button>
        </div>

        <div className="mt-12 text-xs opacity-70">
          <p>ISP Reg. 3135C-1/23 | Premio DBS 2024 | 1.030+ reseñas verificadas</p>
        </div>
      </div>
    </section>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-4" style={{ borderColor: colors.border }}>
      <div className="max-w-7xl mx-auto text-center text-sm" style={{ color: colors.textLight }}>
        <p>© 2026 Adhara Professional. Todos los derechos reservados.</p>
        <p className="mt-2">hola@somosadhara.cl | +56 9 4923 8584</p>
      </div>
    </footer>
  );
}

// MAIN APP
export default function App() {
  return (
    <div style={{ fontFamily: 'Rubik, sans-serif', color: colors.text }}>
      <Navbar />
      <Hero />
      <Comparativa />
      <Diferenciales />
      <Calculadora />
      <SocialProof />
      <PasosAplicacion />
      <CTAFinal />
      <FAQ />
      <Footer />
    </div>
  );
}
