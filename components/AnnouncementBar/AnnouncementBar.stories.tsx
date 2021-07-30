import { Story } from "@storybook/react";
import MDX from "../MDX";
import { AnnouncementBar, AnnouncementBarProps } from "./AnnouncementBar";

const StoryComponent: Story<AnnouncementBarProps> = (args) => (
  <MDX>
    <AnnouncementBar {...args} />
  </MDX>
);

export default {
  component: StoryComponent,
  title: "Site/AnnouncementBar",
};

export const Default = StoryComponent.bind({});

Default.args = {
  bar1: (
    <AnnouncementBar.Row
      logo1="google"
      logo2="nasdaq"
      logo3="samsung"
      logo4="hp"
      logo5="ibm"
    ></AnnouncementBar.Row>
  ),

  bar2: (
    <AnnouncementBar.Row
      logo1="carta"
      logo2="square"
      logo3="snowflake"
      logo4="sumologic"
      logo5="doordash"
    ></AnnouncementBar.Row>
  ),

  bar3: (
    <AnnouncementBar.Row
      logo1="dk"
      logo2="accenture"
      logo3="gitlab"
      logo4="freshworks"
      logo5="zynga"
    ></AnnouncementBar.Row>
  ),
};
