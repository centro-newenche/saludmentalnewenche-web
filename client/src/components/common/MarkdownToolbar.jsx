import {
  FaBold,
  FaItalic,
  FaQuoteRight,
  FaListUl,
  FaListOl,
  FaLink,
  FaImage,
  FaVideo,
  FaTable,
  FaCode,
  FaMinus,
} from "react-icons/fa";

const buttons = [
  {
    text: "H1",
    label: "Título principal",
    action: (ctx) => ctx.wrap("# ", "", "Título principal"),
  },
  {
    text: "H2",
    label: "Subtítulo",
    action: (ctx) => ctx.wrap("## ", "", "Subtítulo"),
  },
  {
    icon: <FaBold />,
    label: "Negrita",
    action: (ctx) => ctx.wrap("**", "**", "texto en negrita"),
  },
  {
    icon: <FaItalic />,
    label: "Cursiva",
    action: (ctx) => ctx.wrap("*", "*", "texto en cursiva"),
  },
  {
    icon: <FaQuoteRight />,
    label: "Cita",
    action: (ctx) => ctx.wrap("> ", "", "Cita destacada"),
  },
  {
    icon: <FaListUl />,
    label: "Lista",
    action: (ctx) =>
      ctx.prefixLines(
        () => "- ",
        ["Elemento uno", "Elemento dos", "Elemento tres"],
      ),
  },
  {
    icon: <FaListOl />,
    label: "Lista numerada",
    action: (ctx) =>
      ctx.prefixLines(
        (i) => `${i + 1}. `,
        ["Elemento uno", "Elemento dos", "Elemento tres"],
      ),
  },
  {
    icon: <FaLink />,
    label: "Enlace",
    action: (ctx) => ctx.wrap("[", "](https://)", "texto del enlace"),
  },
  {
    icon: <FaImage />,
    label: "Imagen",
    action: (ctx) => ctx.insert("\n![Descripción de la imagen](https://)\n"),
  },
  {
    icon: <FaVideo />,
    label: "Video",
    action: (ctx) =>
      ctx.insert(
        '\n<iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO" allowfullscreen></iframe>\n',
      ),
  },
  {
    icon: <FaTable />,
    label: "Tabla",
    action: (ctx) =>
      ctx.insert(
        "\n| Columna 1 | Columna 2 | Columna 3 |\n| --- | --- | --- |\n| Texto | Texto | Texto |\n| Texto | Texto | Texto |\n\n",
      ),
  },
  {
    icon: <FaCode />,
    label: "Código",
    action: (ctx) => ctx.wrap("`", "`", "código"),
  },
  {
    icon: <FaMinus />,
    label: "Separador",
    action: (ctx) => ctx.insert("\n---\n"),
  },
];

export default function MarkdownToolbar({ wrap, prefixLines, insert }) {
  const ctx = { wrap, prefixLines, insert };

  return (
    <div
      className="mb-2 flex flex-wrap gap-1 rounded-lg border p-1.5"
      style={{ borderColor: "var(--line)", background: "var(--paper)" }}
    >
      {buttons.map((btn) => (
        <button
          key={btn.label}
          type="button"
          title={btn.label}
          aria-label={btn.label}
          onClick={() => btn.action(ctx)}
          className="flex h-8 min-w-8 items-center justify-center rounded-md px-1.5 text-sm font-semibold transition hover:bg-[var(--sand)]"
          style={{ color: "var(--pine)" }}
        >
          {btn.text || btn.icon}
        </button>
      ))}
    </div>
  );
}
