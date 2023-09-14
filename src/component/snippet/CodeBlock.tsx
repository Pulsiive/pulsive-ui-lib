import React from 'react';
import copy from "copy-to-clipboard";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {useTranslation} from 'react-i18next';

import IconTooltip from './IconTooltip';
import {TranslationLibFile, TranslationLibKey} from '../../utils/locale';

export enum CodeBlockLanguage {
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
    TYPESCRIPT = "typescript",
}

type CodeBlockProps = {
    code: string | undefined;
    language?: CodeBlockLanguage;
    header?: string;
    copiable?: boolean;
    showLineNumbers?: boolean;
    wrapLongLines?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({code, header, language = CodeBlockLanguage.MARKDOWN, copiable, showLineNumbers, wrapLongLines}) => {
    const {t} = useTranslation(TranslationLibFile.COMMON);
    const [isCopied, setCopied] = React.useState(false);

    if (!code) return null;

    const onCopy = () => {
        copy(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 500);
    };

    return (
        <div className="code-block">
            {(header || copiable) &&
                <div className="code-block__header">
                    <span dangerouslySetInnerHTML={{__html: header || ''}}/>
                    {copiable &&
                        <div>
                            {isCopied ?
                                <IconTooltip icon={{name: "done"}} text={t(TranslationLibKey.ACTION_COPIED)} onClick={() => {
                                }}/> :
                                <IconTooltip icon={{name: "content_copy"}} text={t(TranslationLibKey.ACTION_COPY)} onClick={onCopy}/>
                            }
                        </div>
                    }
                </div>
            }
            <SyntaxHighlighter
                customStyle={{padding: 'var(--spacing-md)'}}
                style={atomOneDark}
                language={language}
                showLineNumbers={showLineNumbers}
                wrapLongLines={wrapLongLines}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
};

export default CodeBlock;
