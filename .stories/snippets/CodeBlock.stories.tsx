// import React from 'react';
// import {ComponentStory, ComponentMeta} from '@storybook/react';

// import {CodeBlock, CodeBlockLanguage} from '../../src/component/snippet';

// const CodeSnippetMarkdown = `# CodeBlock
// By default, markdown language is syntax highlighted

// ## Props available
// \`\`\`ts
// type CodeBlockProps = {
//     code?: string;
//     language?: string;
//     header?: string;
//     copiable?: boolean;
//     showLineNumbers?: boolean;
//     wrapLongLines?: boolean;
// }
// \`\`\``;

// const CodeSnippetHTML = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script type="text/javascript" src="https://tag.analytics-helper.com/ans/ga?pa=29726&c=877"></script>
// </body>
// </html>`;

// export default {
//     title: 'Snippets/CodeBlock',
//     component: CodeBlock,
// } as ComponentMeta<typeof CodeBlock>;

// const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;

// export const Default: ComponentStory<typeof CodeBlock> = Template.bind({});
// Default.args = {
//     code: CodeSnippetMarkdown,
// };

// export const Copiable: ComponentStory<typeof CodeBlock> = Template.bind({});
// Copiable.args = {
//     code: CodeSnippetMarkdown,
//     copiable: true
// };

// export const WithHeader: ComponentStory<typeof CodeBlock> = Template.bind({});
// WithHeader.args = {
//     header: 'Code snippet',
//     code: CodeSnippetMarkdown,
//     copiable: true
// };

// export const WithLineNumbers: ComponentStory<typeof CodeBlock> = Template.bind({});
// WithLineNumbers.args = {
//     header: 'Code snippet',
//     code: CodeSnippetMarkdown,
//     copiable: true,
//     showLineNumbers: true
// };

// export const WithHTML: ComponentStory<typeof CodeBlock> = Template.bind({});
// WithHTML.args = {
//     header: 'HTML snippet',
//     code: CodeSnippetHTML,
//     language: CodeBlockLanguage.HTML,
//     copiable: true,
//     showLineNumbers: true,
// };

// export const WithJavascript: ComponentStory<typeof CodeBlock> = Template.bind({});
// WithJavascript.args = {
//     header: 'TS snippet',
//     language: CodeBlockLanguage.TYPESCRIPT,
//     code: `export class Formatter {
//     static formatNumber(value: number | undefined, format?: string): string {
//         if (value === undefined) return "";
//         return numeral(value).format(format || \`0,0.[00]a\`).toUpperCase();
//     }

//     static formatDate(value?: MomentInput, format?: string): string {
//         format = format || FormatterFormat.DATE;
//         return moment(value).format(format);
//     }

//     static formatUTCDate(value?: MomentInput, format?: string): string {
//         format = format || FormatterFormat.DATE;
//         return moment.utc(value).local().format(format);
//     }
// }`,
//     showLineNumbers: true,
//     copiable: true
// };

// export const WrapLongLines: ComponentStory<typeof CodeBlock> = Template.bind({});
// WrapLongLines.args = {
//     header: 'Code snippet',
//     code: `Afin d'établir des analyses statistiques relatives à l’usage de notre site sous une forme ne permettant pas de vous identifier nominativement, nous collectons des données relatives à votre navigation sur notre site web, telles que l'horodatage, votre adresse IP, des données techniques relatives à votre équipement et à votre navigateur). Ces données sont pseudonymisées et votre adresse IP est anonymisée avant d'être transférée à notre outil d'analyse (remplacement du dernier octet des adresses IPv4 et des 80 derniers bits des adresses IPv6 par des zéros). Nous réalisons ce traitement sur la base de notre intérêt légitime (Article 6§1f. du RGPD), qui réside dans la nécessité de mieux connaître notre audience afin d’adapter notre contenu, nos fonctionnalités et nos offres. Vous pouvez bien entendu vous opposer à ces traitements en cliquant ici.`,
//     copiable: true,
//     wrapLongLines: true
// };
