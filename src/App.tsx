import { useState } from "react";
import { motion } from "motion/react";
import { FadingVideo } from "./components/FadingVideo";
import { BlurText } from "./components/BlurText";
import { CategoryGrid } from "./components/CategoryGrid";
import { CtaButton } from "./components/CtaButton";

export default function App() {
  const [logoError, setLogoError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black select-none text-white overflow-x-hidden font-body">
      
      {/* Navbar - Fixed globally, z-50 */}
      <nav id="navbar" className="fixed top-4 left-0 right-0 px-4 md:px-8 lg:px-16 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: 48x48 rounded-full bg-white circle with S monogram or image logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer relative overflow-hidden p-1.5"
            id="nav-logo"
          >
            {!logoError ? (
              <img
                src="/logo.png"
                alt="Sofisticada"
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-heading italic text-2xl text-black select-none">S</span>
            )}
          </button>

          {/* Center (desktop only): liquid-glass pill */}
          <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1.5 gap-2" id="nav-center-menu">
            <div className="flex items-center gap-1" id="nav-links">
              {[
                { label: "Inicio", target: "hero" },
                { label: "Colección", target: "categories-section" },
                { label: "Nosotras", target: "capabilities" },
                { label: "Contacto", target: "capabilities" }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.target)}
                  className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer"
                  id={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            {/* White pill button: Escríbenos + ArrowUpRight */}
            <button
              onClick={() => scrollToSection("capabilities")}
              className="bg-white text-black px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1 hover:bg-white/90 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              id="nav-claim-btn"
            >
              Escríbenos
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </button>
          </div>

          {/* Right: 48x48 invisible spacer to balance logo centering */}
          <div className="w-12 h-12 opacity-0 pointer-events-none" aria-hidden="true"></div>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section
        id="hero"
        className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-end pb-24 md:pb-32"
      >
        <div className="star-field"></div>
        <div className="nebula"></div>
        {/* Background Image (High-fashion Boutique Campaign) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="/images/boutique_hero_bg_1782789403863.jpg"
            alt="Sofisticada Boutique Campaign"
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] h-[120%] object-cover object-top opacity-65"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlay to make text highly readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/90 pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full">

          {/* Headline - BlurText word-by-word animation */}
          <div className="w-full" id="hero-heading-container">
            <BlurText
              text="Viste Como La Mujer Que Quieres Llegar A Ser"
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] max-w-3xl mx-auto tracking-[-4px] select-none"
            />
          </div>

          {/* Subheading (delay 0.8s) */}
          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-6 text-sm md:text-base text-white/70 max-w-md font-body font-light leading-relaxed mx-auto"
            id="hero-subheading"
          >
            Boutique de moda femenina en Envigado.
          </motion.p>

          {/* CTAs (delay 1.1s) - Single, elegant minimalist CTA */}
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            className="flex flex-row items-center justify-center mt-8"
            id="hero-ctas"
          >
            <CtaButton
              onClick={() => scrollToSection("categories-section")}
              id="hero-primary-cta"
            >
              Ver Colección
            </CtaButton>
          </motion.div>

        </div>

      </section>

      {/* CATEGORIES SECTION (Visually clear Awwwards white break) */}
      <CategoryGrid />

      {/* SECTION 2: ELEGANCIA EXCLUSIVA */}
      <section
        id="capabilities"
        className="relative min-h-[85vh] md:min-h-screen w-full bg-black overflow-hidden flex flex-col justify-end pb-24 md:pb-32"
      >
        <div className="star-field"></div>
        <div className="nebula"></div>
        {/* Background Image (High-fashion Boutique Interior) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src="/images/boutique_campaign_bg_1782794841206.jpg"
            alt="Sofisticada Boutique Experience"
            className="absolute inset-0 w-full h-full object-cover opacity-65"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlay to make text highly readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 pointer-events-none" />
        </div>

        {/* Content Centered Over Background Image */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-heading italic font-light text-white text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-none mb-8 select-none"
            id="capabilities-campaign-title"
          >
            Sofisticada Women
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            id="capabilities-campaign-cta-container"
          >
            <CtaButton
              onClick={() => scrollToSection("categories-section")}
              id="capabilities-campaign-cta"
            >
              Ver Colección
            </CtaButton>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2.5: LOCATION & BRAND MESSAGE (Inspired by image 2 / MADE IN ITALY) */}
      <section className="bg-white text-black py-16 md:py-24 px-4 flex flex-col items-center justify-center border-t border-neutral-100" id="location-branding-section">
        <div className="max-w-2xl mx-auto text-center" id="location-branding-container">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-900 uppercase mb-4"
          >
            Mall Distrito Avignon, Envigado
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-sm md:text-base text-neutral-500 font-light leading-relaxed font-body"
          >
            Boutique de moda femenina con las mejores prendas de Medellín. Piezas exclusivas, asesoría personalizada y atención directa para la mujer que busca inspirar y destacar con elegancia.
          </motion.p>
        </div>
      </section>

    </div>
  );
}
