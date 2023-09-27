import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName, withThemeByDataAttribute } from "@storybook/addon-styling";
import { ThemeProvider } from "../src/components/theme-provider";
import "../src/index.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        withThemeByClassName({
            themes: {
                light: "light",
                dark: "dark"
            },
            defaultTheme: "dark"
        }),
        (Story, context) => {
            return (
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Story />
                </ThemeProvider>
            );
        },
    ],
};

export default preview;
