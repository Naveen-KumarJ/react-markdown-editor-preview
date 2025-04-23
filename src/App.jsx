import React, { useState } from "react";
import WritingComponent from "./components/WritingComponent";
import PreviewComponent from "./components/PreviewComponent";

const App = () => {
  const [context, setContext] = useState('');
  return (
    <main className="container mx-auto max-w-7xl p-2">
      <h1 className="text-center font-semibold underline">Markdown Editor</h1>
      <div className="flex flex-col sm:flex-row gap-2.5 min-h-[95vh] p-4">
        <WritingComponent context={context} setContext={setContext} />
        <PreviewComponent context={context} />
      </div>
    </main>
  );
};

export default App;
