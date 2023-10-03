import React, { Suspense } from "react";
import { I18nextProvider } from 'react-i18next';
import { addDecorator } from "@storybook/react";
import i18n from './i18n';
import "../.stories/page.css";
import "../src/scss/main.scss";

export const parameters = {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'centered',
    backgrounds: {
        default: 'Light',
        values: [
            {
                name: 'Light',
                value: 'white',
            },
            {
                name: 'Dark',
                value: '#121725',
            },
        ],
    },
}

addDecorator(storyFn => (
    <Suspense fallback={<></>}>
        <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
    </Suspense>
));
