import Image from "next/image";
import MDX from "../MDX";
import { SectionTabs } from "./SectionTabs";
import blueImg from "./fixtures/blue.png";
import greenImg from "./fixtures/green.png";
import redImg from "./fixtures/red.png";
import getAddressImage from "utils/get-address-image";

export default {
  component: SectionTabs,
  title: "Site/SectionTabs",
};

export const Default = () => {
  return (
    <MDX>
      <SectionTabs subtitle="Core Features">
        <SectionTabs.Item
          src={greenImg}
          title="Move away from roots and admins"
          description="Access requests implement the principle of least privilege, which states that a client should be given only those privileges needed for it to complete the task at hand. This removes the need for super-privileged accounts."
        >
          <Image
            src={getAddressImage(greenImg)}
            width={400}
            height={400}
            layout="intrinsic"
            alt=""
          />
        </SectionTabs.Item>
        <SectionTabs.Item
          src={redImg}
          title="Dual Authorization"
          description="Critical actions must be approved by multiple authorized team members as required by FedRamp AC-3. This prevents one successful phishing attack from compromising your system."
        >
          <Image
            src={getAddressImage(redImg)}
            width={400}
            height={400}
            layout="intrinsic"
            alt=""
          />
        </SectionTabs.Item>
        <SectionTabs.Item
          src={blueImg}
          title="Customize to fit your needs"
          description="The Teleport API allows developers to define custom access workflows using a programming language they are familiar with. Teleport follows the “access as code” philosophy instead of “access as configuration”."
        >
          <Image
            src={getAddressImage(blueImg)}
            width={400}
            height={400}
            layout="intrinsic"
            alt=""
          />
        </SectionTabs.Item>
      </SectionTabs>
    </MDX>
  );
};
