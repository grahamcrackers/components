import type { Meta, StoryObj } from "@storybook/react";

import { AccordionDemo } from "./accordion.preview";

const meta = {
    title: "Examples/Accordion",
    component: AccordionDemo,
    parameters: {
        // layout: "centered",
    },
} satisfies Meta<typeof AccordionDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
