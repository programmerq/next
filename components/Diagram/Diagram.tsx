import Flex from "components/Flex";
import Box from "components/Box";
import { Centrator } from "components/Layout";
import NextImage from "next/image";

/**
 * Re-usable component consisting of title, description, and
 * large centered image with optional caption below image.
 */

export interface DiagramProps {
  title: string;
  children: React.ReactNode;
  src: string;
  alt: string;
  width: string | number;
  height: string | number;
  caption?: string;
}

export const Diagram = ({
  title,
  children,
  src,
  alt,
  width,
  height,
  caption,
}: DiagramProps) => {
  return (
    <Centrator>
      <Flex flexDirection="column" pt={6}>
        <Box fontSize="text-xl">
          <Box as="h2" color="darkest" fontSize="header-1">
            {title}
          </Box>
          <Box pt={4}>{children}</Box>
        </Box>
        <Box my={[1, 4]}>
          <NextImage src={src} alt={alt} width={width} height={height} />
        </Box>
        {/**line below will need to be modified for style the first time caption
         * is used and this comment removed*/}
        {caption && <Box>{caption}</Box>}
      </Flex>
    </Centrator>
  );
};
