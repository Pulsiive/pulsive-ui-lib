import React from 'react';
import {ComponentStory} from '@storybook/react';

import {Box, BoxRadius, CodeBlock, CodeBlockLanguage} from '../../src/component/snippet';

export default {
    title: 'Styles/Code',
};

// const Template: ComponentStory<typeof Box> = () => {
//     const code = "Hello <span class=\"code\">world</span> !";

//     return (
//         <>
//             <h1 style={{marginBottom: 'var(--spacing-sm)'}}>La class .code</h1>
//             <CodeBlock language={CodeBlockLanguage.HTML} code={code}/>
//             <p>Résultat :</p>
//             <Box radius={BoxRadius.MD}><span dangerouslySetInnerHTML={{__html: code}}/></Box>
//         </>
//     );
// };

export const Default = Template.bind({});
