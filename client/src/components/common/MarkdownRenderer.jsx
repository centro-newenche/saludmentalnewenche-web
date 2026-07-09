import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), "iframe", "video", "source"],
  attributes: {
    ...defaultSchema.attributes,
    iframe: [
      "src",
      "width",
      "height",
      "allow",
      "allowFullScreen",
      "frameBorder",
      "title",
    ],
    video: [
      "src",
      "controls",
      "width",
      "height",
      "autoPlay",
      "muted",
      "loop",
      "poster",
    ],
    source: ["src", "type"],
    img: [
      ...(defaultSchema.attributes?.img || []),
      "src",
      "alt",
      "title",
      "width",
      "height",
    ],
  },
};

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose prose-slate max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
