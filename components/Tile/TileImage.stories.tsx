import { Story } from "@storybook/react";
import TileImageComponent, { TileImageProps } from "./TileImage";
import TileSet from "./TileSet";

import imageSrc from "./fixtures/image.png";

export default {
  component: TileImageComponent,
  subcomponents: { TileSet },
  title: "Docs/Tile/TileImage",
};

const TileImageComponentWrapper: Story<TileImageProps> = (args) => (
  <TileImageComponent {...args} />
);

export const TileImage = TileImageComponentWrapper.bind({});

TileImage.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed dui consequat, sagittis.",
  href: "https://goteleport.com/",
  img: imageSrc,
  title: "Teleport in the Terminal (tsh)",
  buttonLabel: "Get Started",
};

export const TileImageGroup = () => {
  return (
    <TileSet>
      <TileImageComponent
        title="Teleport in the Terminal (tsh) and other text to make this header miltiline"
        img={imageSrc}
        href="https://goteleport.com/"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed dui
        consequat, sagittis.
      </TileImageComponent>
      <TileImageComponent
        title="Cluster Management & Maintenance "
        img={imageSrc}
        href="https://goteleport.com/"
        buttonLabel="Custom Label"
      >
        Lorem ipsum dolor sit amet.
      </TileImageComponent>
      <TileImageComponent
        title="SSH & Nodes"
        img={imageSrc}
        href="https://goteleport.com/"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed dui
        consequat, sagittis.
      </TileImageComponent>
    </TileSet>
  );
};
