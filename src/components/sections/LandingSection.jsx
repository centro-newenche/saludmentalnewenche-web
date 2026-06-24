import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaSmile,
} from "react-icons/fa";

export default function LandingSection({
  stats,
  workflowSteps,
  services,
  showcases,
  activeShowcase,
  setActiveShowcase,
  features,
  testimonials,
  activeTestimonial,
  setActiveTestimonial,
  integrations,
  pricing,
  annualBilling,
  setAnnualBilling,
  team,
  faqs,
  openFaq,
  setOpenFaq,
}) {
  return (
    <main className="space-y-24">
      {/* Hero */}
      <section
        data-reveal
        className="reveal-up rounded-3xl border border-sky-100 bg-sky-50 grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[85vh]"
      >
        <div className="p-6 lg:col-span-5">
          <h1 className="mb-2 bg-gradient-to-r from-slate-800 to-sky-500 bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-5xl">
            Salud Mental Newenche
          </h1>
          <p className="mb-8 inline-flex rounded-full border border-sky-300 bg-sky-100 px-4 py-1 text-sm text-sky-600">
            Salud mental especializada en adolescencia, familia y comunidad
          </p>

          <p className="mb-6 max-w-xl text-lg text-slate-600">
            Acompañamos la adolescencia en los lugares donde se construyen sus
            vínculos, sus conflictos y sus posibilidades de cambio.
          </p>

          <p className="mb-8 max-w-xl font-bold text-2xl text-slate-600">
            Comprender antes de juzgar. Acompañar antes de etiquetar.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-300/40 transition hover:-translate-y-0.5 hover:bg-sky-400">
              Comienza ahora
            </button>
            <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-sky-600 transition hover:border-sky-400 hover:bg-sky-50">
              Ver el programa
            </button>
          </div>
        </div>
        <div className="lg:col-span-7 mt-8 lg:mt-0 lg:min-h-[85vh] flex items-stretch">
          <img
            src="/landing-image.png"
            alt="Fotografía de un padre con sus hijos"
            className="w-full h-full min-h-[50vh] lg:min-h-[85vh] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* About */}
      <section
        data-reveal
        className="reveal-up rounded-2xl border border-sky-100 bg-sky-50 p-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-2xl font-semibold text-slate-800 md:text-3xl">
            ¿Quienes somos?
          </h2>
          <p className="mb-6 text-lg text-slate-600">
            No buscamos solo contener una crisis. Buscamos acompañar procesos.
          </p>
          <a
            href="/about"
            className="inline-block rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-300/40 transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Conocer más
          </a>
        </div>
      </section>

      {/* Workflow */}
      <section
        data-reveal
        className="reveal-up rounded-2xl border border-sky-100 bg-sky-50 p-8"
      >
        <h2 className="mb-8 text-2xl font-semibold text-slate-800 md:text-3xl">
          Procedimiento
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-xl border border-sky-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100"
            >
              <p className="mb-3 text-sm font-semibold tracking-widest text-sky-500">
                {item.step}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-500">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" data-reveal className="reveal-up">
        <h2 className="mb-8 text-2xl font-semibold text-slate-800 md:text-3xl">
          Servicios
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100"
            >
              <service.icon className="mb-3 text-xl text-sky-400" />
              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                {service.name}
              </h3>
              <p className="text-slate-500">{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Showcase Slider */}
      <section
        data-reveal
        className="reveal-up rounded-2xl border border-sky-100 bg-sky-50 p-8"
      >
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-slate-800 md:text-3xl">
            Exhibición Slider
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setActiveShowcase(
                  (prev) => (prev - 1 + showcases.length) % showcases.length,
                )
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 text-sm transition hover:border-sky-400 hover:text-sky-500"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() =>
                setActiveShowcase((prev) => (prev + 1) % showcases.length)
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 text-sm transition hover:border-sky-400 hover:text-sky-500"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-sky-100">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeShowcase * 100}%)` }}
          >
            {showcases.map((item) => (
              <article key={item.title} className="min-w-full bg-white p-8">
                <p className="mb-3 inline-flex rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs text-sky-600">
                  {item.metric}
                </p>
                <item.icon className="mb-4 text-2xl text-sky-400" />
                <h3 className="mb-3 text-2xl font-semibold text-sky-600">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-slate-500">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {showcases.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setActiveShowcase(index)}
              className={`h-2.5 rounded-full transition-all ${activeShowcase === index ? "w-8 bg-sky-400" : "w-2.5 bg-sky-200"}`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" data-reveal className="reveal-up">
        <h2 className="mb-8 text-2xl font-semibold text-slate-800 md:text-3xl">
          Características
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100"
            >
              <feature.icon className="mb-3 text-xl text-sky-400" />
              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                {feature.title}
              </h3>
              <p className="text-slate-500">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        data-reveal
        className="reveal-up rounded-2xl border border-sky-100 bg-sky-50 p-8"
      >
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold text-slate-800 md:text-3xl">
            Testimonios
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 text-sm transition hover:border-sky-400 hover:text-sky-500"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 text-slate-600 text-sm transition hover:border-sky-400 hover:text-sky-500"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="min-w-full rounded-xl border border-sky-100 bg-white p-8"
              >
                <p className="mb-6 text-xl leading-relaxed text-slate-700">
                  {item.quote}
                </p>
                <p className="font-medium text-sky-500">{item.author}</p>
                <p className="text-sm text-slate-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.author}
              onClick={() => setActiveTestimonial(index)}
              className={`h-2.5 rounded-full transition-all ${activeTestimonial === index ? "w-8 bg-sky-400" : "w-2.5 bg-sky-200"}`}
            />
          ))}
        </div>
      </section>      

      {/* Team */}
      <section
        id="about"
        data-reveal
        className="reveal-up grid gap-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-8 md:grid-cols-2"
      >
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-slate-800 md:text-3xl">
            Equipo
          </h2>
          <p className="text-slate-500">Descripción del equipo</p>
        </div>

        <div className="space-y-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-sm"
            >
              <p className="font-medium text-slate-800">{member.name}</p>
              <p className="text-sm text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        data-reveal
        className="reveal-up rounded-2xl border border-sky-100 bg-sky-50 p-8"
      >
        <h2 className="mb-6 text-2xl font-semibold text-slate-800 md:text-3xl">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={item.q}
                className="rounded-lg border border-slate-200 bg-white transition-colors duration-300 hover:border-sky-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-700 transition-colors duration-300 hover:text-sky-500"
                >
                  <span className="font-medium">{item.q}</span>
                  <span
                    className={`text-sky-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`faq-content px-4 text-slate-500 ${isOpen ? "faq-open pb-4" : ""}`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        data-reveal
        className="reveal-up rounded-2xl border border-sky-100 bg-sky-50 p-8"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left: info */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-slate-800 md:text-3xl">
              Contáctanos
            </h2>
            <p className="mb-6 text-slate-500">
              Envíanos un mensaje y te responderemos a la brevedad. Estamos
              dispuestos para ayudarte en cada momento.
            </p>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                  ✉
                </span>
                <span>contacto@tuempresa.cl</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                  📞
                </span>
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                  📍
                </span>
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 0000 0000"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <button className="w-full rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-300/40 transition hover:-translate-y-0.5 hover:bg-sky-400">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
