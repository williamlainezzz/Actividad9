import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bell,
  BrainCircuit,
  CheckCircle2,
  Eye,
  GraduationCap,
  HeartHandshake,
  Home,
  HouseWifi,
  Layers3,
  Link,
  Lock,
  Network,
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

const revealUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: 'easeOut' },
}

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

function SectionTitle({ kicker, title, text }) {
  return (
    <motion.div className="section-copy" {...revealUp}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />

      <header className="hero" id="inicio">
        <motion.div className="hero-content" {...revealUp}>
          <p className="kicker">Cyberseguridad doméstica inteligente</p>
          <h1>CyberPet Home</h1>
          <h2>Tu guardián digital en casa</h2>
          <p>
            CyberPet Home es una mascota digital inteligente diseñada para proteger el
            hogar conectado. Detecta amenazas cibernéticas, alerta al usuario en tiempo
            real y traduce riesgos complejos en acciones simples y comprensibles para
            toda la familia.
          </p>
          <div className="hero-cta">
            <a href="#como-funciona" className="btn btn-primary">
              Explorar cómo funciona <ArrowRight size={18} />
            </a>
            <a href="#beneficios" className="btn btn-secondary">
              Ver beneficios
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual card-glass"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <img src={heroImage} alt="CyberPet Home - imagen principal del producto" />
          <span className="image-chip">/src/assets/cyberpet-hero.png</span>
        </motion.div>
      </header>

      <main>
        <section className="section" id="problema">
          <SectionTitle
            title="La seguridad digital del hogar se ha vuelto más compleja que nunca"
            text="Hoy en día, las amenazas digitales ya no afectan únicamente a empresas o expertos en informática. También están presentes en casas, celulares, computadoras, redes WiFi y dispositivos inteligentes de uso diario. Muchas personas se conectan, descargan aplicaciones o abren enlaces sin saber si realmente están seguros."
          />
          <motion.p className="section-paragraph" {...revealUp}>
            El problema es que la mayoría de las herramientas de ciberseguridad son
            difíciles de entender, poco amigables y demasiado técnicas para usuarios
            comunes. Como resultado, familias, estudiantes y trabajadores quedan
            expuestos a fraudes, accesos no autorizados, robo de datos y otros riesgos
            digitales.
          </motion.p>

          <div className="card-grid cols-4">
            {problemCards.map(({ icon: Icon, title }) => (
              <motion.article key={title} className="card-glass card" {...revealUp}>
                <Icon size={22} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="que-es">
          <div className="two-col">
            <div>
              <SectionTitle
                title="Una nueva forma de entender la ciberseguridad"
                text="CyberPet Home es un asistente inteligente de ciberseguridad representado como una mascota digital interactiva. Su función es acompañar al usuario dentro de su entorno digital, identificar amenazas cotidianas y ofrecer recomendaciones claras para proteger dispositivos, cuentas y redes del hogar."
              />
              <motion.p className="section-paragraph" {...revealUp}>
                A diferencia de las soluciones tradicionales, CyberPet Home no solo alerta
                sobre riesgos: también los explica en un lenguaje simple, visual y cercano,
                haciendo que la seguridad digital sea más accesible para cualquier persona.
              </motion.p>
            </div>

            <motion.figure className="card-glass media-card" {...revealUp}>
              <img
                src={deviceProtectionImage}
                alt="CyberPet Home protegiendo dispositivos del usuario"
              />
              <figcaption>/src/assets/cyberpet-device-protection.png</figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="section" id="como-funciona">
          <SectionTitle title="Protección inteligente en tres pasos" />

          <div className="card-grid cols-3">
            {steps.map(({ icon: Icon, title, text }) => (
              <motion.article key={title} className="card-glass card" {...revealUp}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>

          <motion.figure className="card-glass media-card" {...revealUp}>
            <img src={diagramImage} alt="Diagrama conceptual de funcionamiento" />
            <figcaption>/src/assets/cyberpet-diagram.png</figcaption>
          </motion.figure>
        </section>

        <section className="section" id="funciones">
          <SectionTitle title="Funciones diseñadas para cuidar tu hogar digital" />

          <div className="card-grid cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <motion.article key={title} className="card-glass card" {...revealUp}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="publico">
          <SectionTitle
            title="Pensado para personas reales, no solo para expertos"
            text="CyberPet Home está diseñado para usuarios cotidianos que utilizan tecnología todos los días, pero que no necesariamente tienen conocimientos avanzados en ciberseguridad. Su enfoque busca acercar la protección digital a quienes más la necesitan de una manera sencilla y amigable."
          />

          <div className="card-grid cols-5">
            {audience.map(({ icon: Icon, title }) => (
              <motion.article key={title} className="card-glass card compact" {...revealUp}>
                <Icon size={20} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section" id="beneficios">
          <SectionTitle title="Más que seguridad: tranquilidad, educación y prevención" />

          <div className="two-col">
            <motion.article className="card-glass card" {...revealUp}>
              <h3>Beneficios para el usuario</h3>
              <ul className="benefit-list">
                {[
                  'Reduce la exposición a amenazas digitales comunes',
                  'Facilita la comprensión de riesgos tecnológicos',
                  'Ofrece acompañamiento visual y amigable',
                  'Mejora hábitos de seguridad en el día a día',
                  'Hace que la ciberseguridad sea menos intimidante',
                ].map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 size={17} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article className="card-glass card" {...revealUp}>
              <h3>Impacto social</h3>
              <p>
                CyberPet Home promueve una cultura de prevención digital dentro del hogar,
                ayudando a que más personas comprendan la importancia de proteger su
                información y sus dispositivos. Su enfoque accesible puede contribuir a
                disminuir fraudes, engaños y malas prácticas tecnológicas en la vida
                cotidiana.
              </p>

              <h3>Impacto tecnológico</h3>
              <p>
                El producto propone una manera innovadora de integrar inteligencia
                artificial, monitoreo de riesgos y experiencia de usuario en un solo
                ecosistema. Su valor está en transformar la ciberseguridad en algo más
                humano, visual e interactivo.
              </p>
            </motion.article>
          </div>

          <motion.figure className="card-glass media-card" {...revealUp}>
            <img src={smartHomeImage} alt="Hogar digital protegido con CyberPet Home" />
            <figcaption>/src/assets/cyberpet-smart-home.png</figcaption>
          </motion.figure>
        </section>

        <section className="section" id="panel-visual">
          <SectionTitle
            title="Una experiencia visual de seguridad inteligente"
            text="La propuesta visual de CyberPet Home combina una mascota digital futurista con un entorno tecnológico moderno. A través de ilustraciones conceptuales, paneles interactivos y escenas de uso, el producto muestra cómo la ciberseguridad puede convertirse en una experiencia cercana, comprensible y atractiva."
          />

          <div className="gallery-grid">
            <motion.figure className="card-glass media-card" {...revealUp}>
              <img src={heroImage} alt="Imagen principal del producto" />
              <figcaption>Imagen principal</figcaption>
            </motion.figure>

            <motion.figure className="card-glass media-card" {...revealUp}>
              <img src={deviceProtectionImage} alt="Escena protegiendo dispositivos" />
              <figcaption>Escena de protección</figcaption>
            </motion.figure>

            <motion.figure className="card-glass media-card" {...revealUp}>
              <img src={dashboardImage} alt="Dashboard del sistema CyberPet Home" />
              <figcaption>Dashboard del sistema</figcaption>
            </motion.figure>

            <motion.figure className="card-glass media-card" {...revealUp}>
              <img src={diagramImage} alt="Diagrama de funcionamiento" />
              <figcaption>Diagrama de funcionamiento</figcaption>
            </motion.figure>
          </div>
        </section>

        <section className="section" id="ia">
          <SectionTitle title="Desarrollado con apoyo de inteligencia artificial" />

          <div className="card-grid cols-3">
            {aiTools.map(({ title, text }) => (
              <motion.article key={title} className="card-glass card" {...revealUp}>
                <p className="tool-title">{title}</p>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <motion.footer className="section footer-cta" {...revealUp}>
        <h2>El futuro de la ciberseguridad debe ser inteligente, visual y cercano</h2>
        <p>
          CyberPet Home redefine la forma en que las personas se relacionan con la
          seguridad digital. En lugar de alertas frías y difíciles de entender, propone
          una experiencia interactiva, educativa y accesible que protege el hogar
          conectado de una manera innovadora. Su visión es hacer que la ciberseguridad
          deje de ser complicada y se convierta en una herramienta cotidiana para todos.
        </p>
        <a href="#inicio" className="btn btn-primary">
          Descubrir el concepto <ArrowRight size={18} />
        </a>
      </motion.footer>
    </div>
  )
}

export default App