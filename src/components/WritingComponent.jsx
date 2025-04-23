import React, { useRef } from "react";
import { FaBold, FaItalic, FaHeading, FaImage } from "react-icons/fa";

function WritingComponent({ context, setContext }) {
  const textareaRef = useRef();

  const insertMarkdown = (syntax) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = context.slice(start, end);

    let newText = "";

    switch (syntax) {
      case "bold":
        newText = `**${selected || "bold"}**`;
        break;
      case "italic":
        newText = `*${selected || "italic"}*`;
        break;
      case "heading":
        newText = `# ${selected || "Heading"}`;
        break;
      case "image":
        newText = `![alt text](image-url)`;
        break;
      default:
        return;
    }

    const updated = context.slice(0, start) + newText + context.slice(end);
    setContext(updated);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + newText.length;
    }, 0);
  };

  return (
    <section className="min-h-[50vh] sm:w-1/2 sm:min-h-full bg-black text-neutral-200 relative">
      <div className="flex gap-6 p-2 border-b sticky top-0 z-10">
        <button onClick={() => insertMarkdown("heading")} title="Heading">
          <FaHeading className="text-white hover:text-blue-400 text-sm cursor-pointer" />
        </button>
        <button onClick={() => insertMarkdown("bold")} title="Bold">
          <FaBold className="text-white hover:text-blue-400 text-sm cursor-pointer" />
        </button>
        <button onClick={() => insertMarkdown("italic")} title="Italic">
          <FaItalic className="text-white hover:text-blue-400 text-sm cursor-pointer" />
        </button>
        <button onClick={() => insertMarkdown("image")} title="Image">
          <FaImage className="text-white hover:text-blue-400 text-sm cursor-pointer" />
        </button>
      </div>

      <textarea
        ref={textareaRef}
        value={context}
        placeholder="Enter Markdown Text Here..."
        className="w-full h-full resize-none outline-none px-2 py-8 text-sm placeholder:text-sm bg-black"
        onChange={(e) => setContext(e.target.value)}
      />

      <span className="text-white absolute top-0 right-0 z-50 text-xs bg-blue-500 px-4 py-0.5">
        Editor
      </span>
    </section>
  );
}

export default WritingComponent;
