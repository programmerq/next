import { Story } from "@storybook/react";
import Image from "next/image";
import getAddressImage from "utils/get-address-image";
import MDX from "../MDX";
import { SectionVisuals, SectionVisualsProps } from "./SectionVisuals";
import imageSrc from "./fixtures/red.png";

const StoryComponent: Story<SectionVisualsProps> = (args) => (
  <MDX>
    <SectionVisuals {...args} />
  </MDX>
);

export default {
  component: StoryComponent,
  title: "Site/SectionVisuals",
};

export const Default = StoryComponent.bind({});

Default.args = {
  subtitle: "Approve Access",
  title: "Leverage Existing Tools",
  description: (
    <>
      <p>
        Approve access requests using the tools you already have, such as Slack,
        PagerDuty, and others. This allows security teams to approve or deny
        requests quickly and avoids frustration for engineers who need to get
        the job done.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s.
      </p>
    </>
  ),
  children: (
    <Image
      src={getAddressImage(imageSrc)}
      placeholder="blur"
      width={400}
      height={400}
      layout="intrinsic"
      alt=""
    />
  ),
};
