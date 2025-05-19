import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeViewer = ({ code, language }) => {
    return (
        <div className="code-viewer">
            <SyntaxHighlighter language={language} style={materialDark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeViewer;