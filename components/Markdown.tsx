import React from "react";

// Very small, safe markdown-lite renderer: paragraphs, bullet lists,
// **bold**, *italic*, `code`. No raw HTML is interpreted.

function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Tokenise on **bold**, *italic*, `code`
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(regex).filter((p) => p !== "");
  parts.forEach((part, i) => {
    const key = `${keyBase}-${i}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(<strong key={key}>{part.slice(2, -2)}</strong>);
    } else if (part.startsWith("`") && part.endsWith("`")) {
      nodes.push(<code key={key}>{part.slice(1, -1)}</code>);
    } else if (part.startsWith("*") && part.endsWith("*")) {
      nodes.push(<em key={key}>{part.slice(1, -1)}</em>);
    } else {
      nodes.push(<React.Fragment key={key}>{part}</React.Fragment>);
    }
  });
  return nodes;
}

export default function Markdown({ text, className = "" }: { text: string; className?: string }) {
  const blocks = text.split(/\n\n+/);
  return (
    <div className={`proselite ${className}`}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => /^\s*[-*]\s+/.test(l));
        if (isList) {
          return (
            <ul key={bi}>
              {lines.map((l, li) => (
                <li key={li}>{renderInline(l.replace(/^\s*[-*]\s+/, ""), `${bi}-${li}`)}</li>
              ))}
            </ul>
          );
        }
        return <p key={bi}>{renderInline(block.replace(/\n/g, " "), `${bi}`)}</p>;
      })}
    </div>
  );
}
