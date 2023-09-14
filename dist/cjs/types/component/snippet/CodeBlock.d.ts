import React from 'react';
export declare enum CodeBlockLanguage {
    BASH = "bash",
    CSS = "css",
    GO = "go",
    HTML = "htmlbars",
    JAVASCRIPT = "javascript",
    JSON = "json",
    MARKDOWN = "markdown",
    NODE = "node-repl",
    SCSS = "scss",
    SQL = "sql",
    TYPESCRIPT = "typescript"
}
declare type CodeBlockProps = {
    code: string | undefined;
    language?: CodeBlockLanguage;
    header?: string;
    copiable?: boolean;
    showLineNumbers?: boolean;
    wrapLongLines?: boolean;
};
declare const CodeBlock: React.FC<CodeBlockProps>;
export default CodeBlock;
