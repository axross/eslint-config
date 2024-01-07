import { type Meta, type StoryObj } from "@storybook/react";
import { SomeComponent } from "./react-component";

const meta = {
  id: "user-edit-form",
  component: SomeComponent,
  argTypes: {},
  args: {
    "data-testid": "self",
  },
} satisfies Meta<typeof SomeComponent>;

type Story = StoryObj<typeof meta>;

export const Plain: Story = {};

export default meta;
