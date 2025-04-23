import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function PreviewComponent({ context }) {
  return (
    <section className="min-h-[50vh] sm:w-1/2 sm:min-h-full bg-neutral-100 relative">
      <div className="w-full h-full px-2 py-8 text-sm prose prose-black max-w-none overflow-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{context}</ReactMarkdown>
      </div>
      <span className="text-white absolute top-0 right-0 text-xs bg-amber-500 px-4 py-0.5 ">
        Live Preview
      </span>
    </section>
  );
}

export default PreviewComponent;
