import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaSmile,
} from "react-icons/fa";

export default function LandingSection({
  programs,
}) {
  return (
    <main className="space-y-24">
      {/* Hero */}
      <section
        id="home"
        data-reveal
        className="reveal-up rounded-3xl bg-white grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[85vh]"
      >
        <div className="p-6 lg:col-span-5">
          <img
            src="/logo-newenche.png"
            alt="Logo Salud Mental Newenche"
            className="mb-8 ml-10 w-full max-w-md object-contain"
          />

          <p className="mb-6 ml-7 max-w-xl text-lg text-slate-600">
            Acompañamos la adolescencia en los lugares donde se construyen sus
            vínculos, sus conflictos y sus posibilidades de cambio.
          </p>

          <p className="mb-8 ml-7 max-w-xl font-bold text-2xl text-slate-600">
            Comprender antes de juzgar. Acompañar antes de etiquetar.
          </p>

          <div className="flex flex-wrap gap-4 ml-7 justify-center lg:justify-start">
            <button className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-300/40 transition hover:-translate-y-0.5 hover:bg-emerald-400">
              Comienza ahora
            </button>
            <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-emerald-600 transition hover:border-emerald-400 hover:bg-stone-50">
              Ver los programas
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
        className="reveal-up grid gap-8 lg:grid-cols-12 lg:gap-8 lg:items-stretch lg:min-h-[85vh]"
      >
        <div className="lg:col-span-6 mt-8 lg:mt-0 lg:min-h-[85vh] flex items-stretch">
          <img 
            src="/counseling.jpg" 
            alt="Fotografía de jovenes en terapia" 
            className="w-full h-full max-h-[75vh] md:max-h-[80vh] lg:max-h-[85vh] object-cover rounded-3xl shadow-[0_0_20px_10px_rgba(255,255,255,0.3)]" 
          />
        </div>
        <div className="p-4 lg:col-span-6 max-w-3xl mx-auto rounded-2xl bg-white text-center">
          <h2 className="mb-4 mt-6 text-xl font-semibold text-emerald-800 md:text-2xl">
            ¿Quienes somos?
          </h2>
          <p className="mb-4 ml-6 mr-6 text-lg text-slate-600 text-justify">
            Somos una institución orientada a la salud mental integral, el acompañamiento familiar y el trabajo comunitario con adolescentes.
          </p>
          <p className="mb-5 ml-6 mr-6 text-lg text-slate-600 text-justify">
            Entendemos que el malestar adolescente no ocurre de manera aislada. Muchas veces se expresa en la familia, el colegio, el barrio, el consumo, la soledad, la desmotivación o las dificultades para pedir ayuda.
          </p>
          <h2 className="mb-4 mt-6 text-xl font-semibold text-emerald-800 md:text-xl">
            ¿A quienes acompañamos?
          </h2>
          <p className="mb-4 ml-6 mr-6 text-lg text-slate-600 text-justify">
            A adolescentes y familias que enfrentan situaciones como:
            <ul className="list-disc pt-4 pl-5">
              <li className="text-lg text-slate-600">Ansiedad, estrés o desregulación emocional.</li>
              <li className="text-lg text-slate-600">Ánimo bajo, aislamiento o desmotivación.</li>
              <li className="text-lg text-slate-600">Conflictos familiares.</li>
              <li className="text-lg text-slate-600">Dificultades escolares.</li>
              <li className="text-lg text-slate-600">Problemas conductuales.</li>
              <li className="text-lg text-slate-600">Baja adherencia a tratamientos.</li>
              <li className="text-lg text-slate-600">Consumo problemático de alcohol, marihuana u otras drogas.</li>
              <li className="text-lg text-slate-600">Crisis emocionales o riesgo psicosocial.</li>
              <li className="text-lg text-slate-600">Familias que necesitan orientación para saber cómo actuar.</li>
            </ul>
          </p>
          <h2 className="mb-4 mt-6 text-xl font-semibold text-emerald-800 md:text-xl">
            No buscamos solo contener una crisis.<br /> Buscamos acompañar procesos.
          </h2>
            <div className="flex flex-wrap gap-4 ml-7 justify-center lg:justify-center">
              <button className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-300/40 transition hover:-translate-y-0.5 hover:bg-emerald-400">
                Comienza ahora
              </button>
              <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-emerald-600 transition hover:border-emerald-400 hover:bg-stone-50">
                Conocer más
              </button>
            </div>
        </div>
      </section>

      {/* Programs */}
      <section
        id="programas"
        data-reveal
        className="reveal-up grid gap-8 lg:grid-cols-2 lg:items-start"
      >
        {/* Left column: header */}
        <div className="relative flex flex-col justify-end rounded-3xl bg-emerald-900 p-8 min-h-[420px] overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-600 to-lime-700" />
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-semibold leading-snug text-white md:text-3xl">
              Programas especializados para el bienestar adolescente
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-emerald-200">
              Trabajamos con adolescentes, familias, colegios y comunidades
              desde un enfoque integral y territorial.
            </p>
            <a
              href="/programas"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Ver todos los programas
            </a>
          </div>
        </div>
 
        {/* Right column: programs */}
        <div className="flex flex-col gap-3">
          {programs.map((program) => (
            <a
              key={program.slug}
              href={"/programas/" + program.slug}
              className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:translate-x-1"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                {program.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold leading-snug text-slate-800">
                  {program.name}
                </p>
              </div>
              <span className="shrink-0 text-emerald-500 transition-transform group-hover:translate-x-0.5">
                &#8594;
              </span>
            </a>
          ))}
        </div>
      </section>


      {/* Contact Form */}
      <section
        id="contact"
        data-reveal
        className="reveal-up rounded-2xl border border-emerald-100 bg-white/50 p-8"
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
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700">
                  ✉
                </span>
                <span>contacto@tuempresa.cl</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700">
                  📞
                </span>
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-emerald-700">
                  📍
                </span>
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 0000 0000"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
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
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Asunto
                </label>
                <input
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <button className="w-full rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-300/40 transition hover:-translate-y-0.5 hover:bg-emerald-400">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
