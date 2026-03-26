import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Bell,
  BrainCircuit,
  CheckCircle2,
  Eye,
  Fingerprint,
  GraduationCap,
  HeartHandshake,
  Home,
  HouseWifi,
  Layers3,
  Link,
  Lock,
  Network,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Users,
  Wifi,
} from 'lucide-react'

import heroImage from './assets/cyberpet-hero.png'
import deviceProtectionImage from './assets/cyberpet-device-protection.png'
import smartHomeImage from './assets/cyberpet-smart-home.png'
import dashboardImage from './assets/cyberpet-dashboard.png'
import diagramImage from './assets/cyberpet-diagram.png'
import './App.css'

const navLinks = [
  { href: '#problema', label: 'Problema' },
  { href: '#que-es', label: 'Qué es' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#panel-visual', label: 'Visual' },
  { href: '#ia', label: 'IA' },
]

const problemCards = [
  { icon: Link, title: 'Phishing y enlaces sospechosos' },
  { icon: Lock, title: 'Contraseñas débiles' },
  { icon: Wifi, title: 'Redes inseguras' },
  { icon: Smartphone, title: 'Aplicaciones sospechosas' },
]

const steps = [
  {
    icon: Eye,
    title: 'Detecta',
    text: 'CyberPet Home analiza de manera conceptual el entorno digital del usuario, incluyendo computadora, celular, red WiFi y dispositivos conectados. A partir de ello, identifica comportamientos inseguros, amenazas potenciales y señales de riesgo.',
  },
  {
    icon: Bell,
    title: 'Alerta',
    text: 'Cuando detecta un problema, la mascota digital se activa y muestra alertas visuales comprensibles. En lugar de usar mensajes técnicos complejos, presenta advertencias claras, amigables y fáciles de interpretar.',
  },
  {
    icon: BrainCircuit,
    title: 'Recomienda',
    text: 'CyberPet Home guía al usuario con acciones concretas para mejorar su seguridad digital, como cambiar contraseñas, evitar enlaces peligrosos, revisar permisos de aplicaciones o fortalecer la red doméstica.',
  },
]

const features = [
  {
    icon: ShieldAlert,
    title: 'Detección de enlaces peligrosos',
    text: 'Identifica patrones de riesgo en links y accesos para evitar fraudes digitales comunes.',
  },
  {
    icon: Lock,
    title: 'Análisis de contraseñas',
    text: 'Evalúa el nivel de fortaleza y recomienda mejoras accionables en segundos.',
  },
  {
    icon: Network,
    title: 'Monitoreo de red doméstica',
    text: 'Visualiza comportamientos atípicos de conexión dentro del ecosistema del hogar.',
  },
  {
    icon: ShieldCheck,
    title: 'Alertas sobre permisos inseguros',
    text: 'Advierte cuando una app solicita accesos sensibles o poco coherentes.',
  },
  {
    icon: HeartHandshake,
    title: 'Consejos personalizados',
    text: 'Traduce riesgos técnicos en recomendaciones simples y adaptadas a cada usuario.',
  },
  {
    icon: Layers3,
    title: 'Panel de seguridad visual',
    text: 'Centraliza estado, alertas y acciones clave en una interfaz clara y moderna.',
  },
]

const audience = [
  { icon: Home, title: 'Familias' },
  { icon: GraduationCap, title: 'Estudiantes' },
  { icon: HouseWifi, title: 'Trabajadores remotos' },
  { icon: Users, title: 'Adultos mayores' },
  { icon: Smartphone, title: 'Hogares inteligentes' },
]

const aiTools = [
  {
    title: 'ChatGPT',
    text: 'Generación de ideas, definición del producto, redacción y estructura conceptual.',
  },
  {
    title: 'IA generativa de imágenes',
    text: 'Creación de ilustraciones conceptuales del producto y escenas visuales premium.',
  },
  {
    title: 'Codex',
    text: 'Desarrollo de la landing page conceptual, diseño visual e implementación técnica.',
  },
]

function SectionHead({ kicker, title, text, motionProps }) {
  return (
    <motion.div className="section-head" {...motionProps}>
      {kicker && (
        <p className="kicker">
          <span className="kicker-dot" aria-hidden="true" />
          {kicker}
        </p>
      )}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  )
}

function App() {
  const reducedMotion = useReducedMotion()
  // ESLint (sin eslint-plugin-react) no detecta uso de `motion.*` o `<Icon />` en JSX.
  // Este alias evita falsos positivos de no-unused-vars sin cambiar el comportamiento.
  const Motion = motion

  const viewport = { once: true, amount: 0.25 }
  const revealIn = {
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : -10,
      filter: reducedMotion ? 'none' : 'blur(10px)',
    },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: reducedMotion ? 0 : 0.7, ease: 'easeOut' },
  }
  const revealUp = {
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 26,
      filter: reducedMotion ? 'none' : 'blur(10px)',
    },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport,
    transition: { duration: reducedMotion ? 0 : 0.7, ease: 'easeOut' },
  }

  const gridStagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: reducedMotion ? 0 : 0.09, delayChildren: reducedMotion ? 0 : 0.05 },
    },
  }

  const gridItem = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 22,
      filter: reducedMotion ? 'none' : 'blur(10px)',
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: reducedMotion ? 0 : 0.6, ease: 'easeOut' },
    },
  }

  const liftHover = reducedMotion ? {} : { y: -6 }

  return (
    <div className="page" id="inicio">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="bg" aria-hidden="true" />

      <header className="topbar">
        <div className="wrap topbar-inner">
          <motion.a className="brand" href="#inicio" {...revealIn}>
            <span className="brand-mark" aria-hidden="true">
              <Shield size={18} />
            </span>
            <span>
              <strong>CyberPet</strong> <em>Home</em>
            </span>
          </motion.a>

          <Motion.nav className="nav" aria-label="Secciones" {...revealIn}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="nav-cta" href="#como-funciona">
              Ver demo conceptual <ArrowRight size={16} />
            </a>
          </Motion.nav>
        </div>
      </header>

      <main id="contenido" className="wrap">
        <section className="hero" aria-label="Portada">
          <div className="hero-grid">
            <motion.div {...revealUp}>
              <p className="kicker">
                <span className="kicker-dot" aria-hidden="true" />
                Cyberseguridad doméstica inteligente
              </p>
              <h1>
                CyberPet <span>Home</span>
              </h1>
              <h2>Una mascota digital que convierte riesgos complejos en acciones simples.</h2>
              <p className="lede">
                Diseñado para hogares conectados: detecta amenazas conceptuales, alerta en
                tiempo real y guía con recomendaciones claras para proteger dispositivos,
                cuentas y redes sin lenguaje técnico intimidante.
              </p>

              <div className="cta-row">
                <a href="#como-funciona" className="btn btn-primary">
                  Explorar cómo funciona <ArrowRight size={18} />
                </a>
                <a href="#beneficios" className="btn btn-secondary">
                  Ver beneficios
                </a>
              </div>

              <div className="pill-row" aria-label="Puntos clave">
                <span className="pill">
                  <ShieldCheck size={18} />
                  Alertas claras
                </span>
                <span className="pill">
                  <Fingerprint size={18} />
                  Hábitos seguros
                </span>
                <span className="pill">
                  <BrainCircuit size={18} />
                  Guía inteligente
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reducedMotion ? 0 : 0.9, ease: 'easeOut' }}
            >
              <img src={heroImage} alt="CyberPet Home - visual conceptual del producto" />
              <span className="caption-chip">Vista conceptual</span>
            </motion.div>
          </div>
        </section>

        <section className="section" id="problema">
          <SectionHead
            kicker="Contexto"
            title="La seguridad digital del hogar se volvió demasiado difícil de leer"
            text="Las amenazas ya no viven solo en empresas: también aparecen en celulares, computadoras, redes WiFi y dispositivos inteligentes. Mucha gente navega, descarga y conecta sin saber cuándo algo es realmente peligroso."
            motionProps={revealUp}
          />

          <motion.p className="lede" {...revealUp}>
            El problema es que la mayoría de herramientas de ciberseguridad se sienten
            frías, técnicas o abrumadoras. Eso deja a familias, estudiantes y trabajadores
            expuestos a fraudes, accesos no autorizados, robo de datos y otros riesgos
            cotidianos.
          </motion.p>

          <motion.div
            className="grid cols-4"
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {problemCards.map((card) => {
              const Icon = card.icon
              return (
              <motion.article
                key={card.title}
                className="card"
                variants={gridItem}
                whileHover={liftHover}
              >
                <Icon size={22} />
                <h3>{card.title}</h3>
              </motion.article>
              )
            })}
          </motion.div>
        </section>

        <section className="section" id="que-es">
          <div className="two-col">
            <div>
              <SectionHead
                kicker="Propuesta"
                title="Ciberseguridad con lenguaje humano, visual y cercano"
                text="CyberPet Home es un asistente de ciberseguridad representado como una mascota digital interactiva. Acompaña al usuario, identifica señales de riesgo y recomienda acciones concretas para proteger dispositivos, cuentas y redes del hogar."
                motionProps={revealUp}
              />
              <motion.p className="lede" {...revealUp}>
                En vez de solo “asustar” con alertas, explica qué pasa y qué hacer después.
                El objetivo es convertir prevención en hábitos diarios, sin jerga técnica.
              </motion.p>
            </div>

            <motion.figure className="media" {...revealUp}>
              <img
                src={deviceProtectionImage}
                alt="CyberPet Home protegiendo dispositivos del usuario"
              />
              <figcaption>Protección de dispositivos</figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <SectionHead
            kicker="Flujo"
            title="Protección inteligente en tres pasos"
            text="Un ciclo corto, entendible y accionable: detectar, alertar y recomendar."
            motionProps={revealUp}
          />

          <motion.div
            className="grid cols-3"
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {steps.map((step) => {
              const Icon = step.icon
              return (
              <motion.article
                key={step.title}
                className="card"
                variants={gridItem}
                whileHover={liftHover}
              >
                <Icon size={22} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
              )
            })}
          </motion.div>

          <motion.figure className="media" {...revealUp}>
            <img src={diagramImage} alt="Diagrama conceptual de funcionamiento" />
            <figcaption>Diagrama conceptual</figcaption>
          </motion.figure>
        </section>

        <section className="section" id="funciones">
          <SectionHead
            kicker="Capacidades"
            title="Funciones diseñadas para cuidar tu hogar digital"
            text="Acciones enfocadas en lo que más expone a usuarios cotidianos."
            motionProps={revealUp}
          />

          <motion.div
            className="grid cols-3"
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
              <motion.article
                key={feature.title}
                className="card"
                variants={gridItem}
                whileHover={liftHover}
              >
                <Icon size={22} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.article>
              )
            })}
          </motion.div>
        </section>

        <section className="section" id="publico">
          <SectionHead
            kicker="Personas"
            title="Pensado para usuarios reales, no solo para expertos"
            text="Tecnología todos los días, seguridad sin esfuerzo: el enfoque es accesible, claro y con acompañamiento visual."
            motionProps={revealUp}
          />

          <motion.div
            className="grid cols-5"
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {audience.map((aud) => {
              const Icon = aud.icon
              return (
              <motion.article
                key={aud.title}
                className="card compact"
                variants={gridItem}
                whileHover={liftHover}
              >
                <Icon size={20} />
                <h3>{aud.title}</h3>
              </motion.article>
              )
            })}
          </motion.div>
        </section>

        <section className="section" id="beneficios">
          <SectionHead
            kicker="Resultado"
            title="Más que seguridad: tranquilidad, educación y prevención"
            text="Cuando la gente entiende el riesgo, toma mejores decisiones. CyberPet Home apunta a eso."
            motionProps={revealUp}
          />

          <div className="two-col">
            <motion.article className="card" {...revealUp}>
              <h3>Beneficios para el usuario</h3>
              <ul className="list">
                {[
                  'Reduce la exposición a amenazas digitales comunes',
                  'Facilita la comprensión de riesgos tecnológicos',
                  'Ofrece acompañamiento visual y amigable',
                  'Mejora hábitos de seguridad en el día a día',
                  'Hace que la ciberseguridad sea menos intimidante',
                ].map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article className="card" {...revealUp}>
              <h3>Impacto social</h3>
              <p>
                CyberPet Home promueve una cultura de prevención digital dentro del hogar,
                ayudando a que más personas comprendan la importancia de proteger su
                información y sus dispositivos.
              </p>
              <h3 style={{ marginTop: '1.1rem' }}>Impacto tecnológico</h3>
              <p>
                Integra IA, monitoreo conceptual de riesgos y UX en un ecosistema único:
                seguridad como algo visual, cotidiano e interactivo.
              </p>
            </motion.article>
          </div>

          <motion.figure className="media" {...revealUp}>
            <img src={smartHomeImage} alt="Hogar digital protegido con CyberPet Home" />
            <figcaption>Hogar conectado</figcaption>
          </motion.figure>
        </section>

        <section className="section" id="panel-visual">
          <SectionHead
            kicker="Interfaz"
            title="Una experiencia visual de seguridad inteligente"
            text="La propuesta combina una mascota futurista con un entorno moderno: paneles, escenas de uso y un lenguaje gráfico que guía sin saturar."
            motionProps={revealUp}
          />

          <motion.div
            className="gallery"
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {[
              { src: heroImage, alt: 'Imagen principal del producto', caption: 'Imagen principal' },
              {
                src: deviceProtectionImage,
                alt: 'Escena protegiendo dispositivos',
                caption: 'Protección',
              },
              { src: dashboardImage, alt: 'Dashboard del sistema', caption: 'Dashboard' },
              { src: diagramImage, alt: 'Diagrama de funcionamiento', caption: 'Diagrama' },
            ].map((item) => (
              <motion.figure key={item.caption} className="media" variants={gridItem}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </section>

        <section className="section" id="ia">
          <SectionHead
            kicker="Stack"
            title="Desarrollado con apoyo de inteligencia artificial"
            text="IA como copiloto creativo y técnico para acelerar el concepto y la implementación."
            motionProps={revealUp}
          />

          <motion.div
            className="grid cols-3"
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {aiTools.map(({ title, text }) => (
              <motion.article
                key={title}
                className="card"
                variants={gridItem}
                whileHover={liftHover}
              >
                <p className="tool-title">{title}</p>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <footer className="footer" aria-label="Cierre">
          <motion.div className="footer-card" {...revealUp}>
            <h2>La ciberseguridad del futuro debe sentirse simple</h2>
            <p>
              CyberPet Home propone una experiencia interactiva, educativa y accesible.
              Menos miedo, más claridad: detectar, entender y actuar con confianza dentro
              del hogar conectado.
            </p>
            <a href="#inicio" className="btn btn-primary">
              Volver arriba <ArrowRight size={18} />
            </a>
          </motion.div>
        </footer>
      </main>
    </div>
  )
}

export default App
