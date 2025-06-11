"use client";

import {
  PayloadLexicalReact,
  PayloadLexicalReactContent,
} from "@zapal/payload-lexical-react";

interface RichTextRendererProps {
  content: PayloadLexicalReactContent; // Lexical state from Payload
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => (
  <article className="prose dark:prose-invert max-w-none">
    <PayloadLexicalReact
      content={content}
      // Optionally customize specific elements:
      // elements={{
      //   paragraph: props => <p className="my-4">{props.children}</p>,
      //   heading: props => <h2 className="mt-8 mb-4">{props.children}</h2>,
      // }}
      // mark={mark => { /* custom bold/italic rendering */ }}
      // blocks={{ /* custom block components */ }}
    />
  </article>
);

export default RichTextRenderer;
