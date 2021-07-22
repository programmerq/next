import { Story } from "@storybook/react";
import Flex from "../Flex";
import { Dropdown as Component, DropdownProps } from "./Dropdown";

interface Item {
  id: string;
  title: string;
}

const StoryComponent: Story<DropdownProps<string | Item>> = (args) => (
  <Flex
    bg="dark-purple"
    width="100%"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <Component width={["100%", "33%"]} {...args} />
  </Flex>
);

export default {
  component: Component,
  title: "Dropdown",
  argTypes: { onChange: { action: "change" } },
};

export const BaseDropdown = StoryComponent.bind({});

BaseDropdown.args = {
  options: ["Hey", "How", "Are", "You"],
};

export const OptionsAreObjects = StoryComponent.bind({});

OptionsAreObjects.args = {
  options: [
    {
      id: "1",
      title: "Title 1",
    },
    {
      id: "2",
      title: "Title 2",
    },
    {
      id: "3",
      title: "Title 3",
    },
    {
      id: "4",
      title: "Title 4",
    },
  ],
  variant: "dark",
  pickId: (item) => item.id,
  pickOption: (options, currentId) =>
    options.find(({ id }) => id === currentId),
  renderOption: (item) => item.title,
};
