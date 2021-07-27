import { Story } from "@storybook/react";
import MDX from "../MDX";
import { SectionHeader, SectionHeaderProps } from "./SectionHeader";
import imageSrc from "./fixtures/red.png";
import getAddressImage from "utils/get-address-image";

const StoryComponent: Story<SectionHeaderProps> = (args) => (
  <MDX>
    <SectionHeader {...args} />
  </MDX>
);

export default {
  component: StoryComponent,
  title: "Site/SectionHeader",
};

export const Default = StoryComponent.bind({});

Default.args = {
  subtitle: "Access Plane",
  title: "Multi-Factor Authentication",
  description:
    "Easily implement Multi-Factor Authentication across your organization  without relying on device management systems. Teleport MFA is designed for distributed teams and comes with a self-enrollment MFA portal.",
  children: (
    <img
      alt=""
      src={getAddressImage(imageSrc)}
      style={{ maxWidth: "300px", width: "100%" }}
    />
  ),
};
