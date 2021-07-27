import { Story } from "@storybook/react";
import MDX from "../MDX";
import { SectionSteps, SectionStepsProps } from "./SectionSteps";
import imageBlueSrc from "./fixtures/blue.png";
import imageRedSrc from "./fixtures/red.png";

const StoryComponent: Story<SectionStepsProps> = (args) => (
  <MDX>
    <SectionSteps {...args} />
  </MDX>
);

export default {
  component: StoryComponent,
  title: "Site/SectionSteps",
};

export const Default = StoryComponent.bind({});

Default.args = {
  title: "Access Requests Flow",
  description:
    "To learn more about Access Workflows, take a look at Teleport Documentation.",
  children: (
    <>
      <SectionSteps.Item
        title="STEP 1"
        img={imageRedSrc}
        width={363}
        height={293}
      >
        Bob can create an access request for the `dbadmin` role in the Web UI or
        CLI.
      </SectionSteps.Item>
      <SectionSteps.Item
        title="STEP 2"
        img={imageBlueSrc}
        width={457}
        height={228}
      >
        Chatbot will notify both Alice and Ivan.
      </SectionSteps.Item>
      <SectionSteps.Item
        title="STEP 3"
        img={imageRedSrc}
        width={363}
        height={293}
      >
        Alice and Ivan can review and approve request using Web UI or CLI.
      </SectionSteps.Item>
    </>
  ),
};
