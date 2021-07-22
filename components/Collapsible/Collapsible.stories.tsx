import { Story } from "@storybook/react";
import { Collapsible as Component, CollapsibleProps } from "./Collapsible";

const ComponentStory: Story<CollapsibleProps> = (args) => (
  <Component {...args} />
);

export default {
  component: Component,
  title: "Collapsible",
};

export const Collapsible = ComponentStory.bind({});

Collapsible.args = {
  title: "Collapsible title",
  opened: true,
  children: (
    <>
      <p>Pragraph 1</p>
      <p>Pragraph 2</p>
    </>
  ),
};
