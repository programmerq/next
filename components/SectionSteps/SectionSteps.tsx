import css from "@styled-system/css";
import Image from "next/image";
import Box from "components/Box";
import { Centrator } from "components/Layout";
import Flex from "components/Flex";
import { NextImageType } from "common-types/next-image";

interface SectionStepsItemProps {
  title: string;
  children: React.ReactNode;
  img: NextImageType;
  width: number;
  height: number;
}

const SectionStepsItem = ({
  title,
  children,
  img,
  width,
  height,
}: SectionStepsItemProps) => {
  return (
    <Flex
      flex={["0 1 auto", `0 1 ${width}px`]}
      width="100%"
      flexDirection="column"
      alignItems={["center", "flex-start"]}
      css={css({ "& + &": { ml: [0, 6], mt: [6, 0] } })}
    >
      <Flex alignItems="center" mb={4} maxWidth={width} flexGrow={1}>
        <Box boxShadow="0 4px 32px rgba(0, 0, 0, 0.24)" lineHeight="0">
          <Image
            src={img}
            placeholder="blur"
            width={width}
            height={height}
            alt=""
          />
        </Box>
      </Flex>
      <Box fontSize="header-4" fontWeight="black" color="dark-purple">
        {title}
      </Box>
      <Box
        mt={2}
        fontSize="text-lg"
        lineHeight="md"
        color="darkest"
        minHeight={["auto", "72px", "48px"]}
      >
        {children}
      </Box>
    </Flex>
  );
};

export interface SectionStepsProps {
  children: React.ReactNode;
  description: React.ReactNode;
  title: string;
}

export const SectionSteps = ({
  children,
  description,
  title,
}: SectionStepsProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" py={[3, 11]}>
      <Centrator
        flexDirection="column"
        alignItems="center"
        textAlign={["center", "left"]}
      >
        <Box
          fontSize="banner"
          lineHeight="xxl"
          fontWeight="black"
          color="black"
        >
          {title}
        </Box>
        <Box color="darkest" fontSize="text-xl" lineHeight="lg" mt={3}>
          {description}
        </Box>
        <Flex
          mt={[5, 9]}
          width="100%"
          justifyContent="space-between"
          alignItems={["flex-start", "stretch"]}
          flexDirection={["column", "row"]}
        >
          {children}
        </Flex>
      </Centrator>
    </Flex>
  );
};

SectionSteps.Item = SectionStepsItem;
