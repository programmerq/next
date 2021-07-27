import css from "@styled-system/css";
import styled from "styled-components";
import { Property } from "csstype";
import { transition, all, StyledSystemProps } from "components/system";
import Image from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import Link from "components/Link";
import { TileWrapper } from "./TileSet";
import { NextImageType } from "common-types/next-image";

export interface TileImageProps {
  alt: string;
  buttonLabel: string;
  children: React.ReactNode;
  href: string;
  img: NextImageType;
  title: string;
}

const TileImage = ({
  alt,
  buttonLabel,
  children,
  href,
  img,
  title,
}: TileImageProps) => {
  return (
    <TileWrapper>
      <Flex
        borderRadius="default"
        width="100%"
        bg="white"
        boxShadow="0 1px 4px rgba(0, 0, 0, 0.24)"
        flexDirection="column"
      >
        <Link
          href={href}
          css={css({
            transition: transition([["opacity", "interaction"]]),
            "&:hover, &:active, &:focus": { opacity: "0.9" },
          })}
        >
          <StyledImageWrap>
            <StyledImage src={img} placeholder="blur" alt={alt} layout="fill" />
          </StyledImageWrap>
        </Link>
        <Flex
          px="4"
          pt="3"
          pb="4"
          flexGrow={1}
          flexDirection="column"
          alignItems="flex-start"
        >
          <Box
            as="h3"
            fontSize="text-xl"
            lineHeight="md"
            mb="2"
            fontWeight="regular"
          >
            <Link
              href={href}
              color="dark-purple"
              textDecoration="none"
              css={css({
                transition: transition([["color", "interaction"]]),
                "&:hover, &:active, &:focus": { color: "light-purple" },
              })}
            >
              {title}
            </Link>
          </Box>
          <Box color="darkest" fontSize="text-md" lineHeight="md" flexGrow={1}>
            {children}
          </Box>
          <Link
            href={href}
            mt="3"
            px="4"
            borderRadius="default"
            border="1px solid"
            color="gray"
            borderColor="light-gray"
            fontSize="text-sm"
            lineHeight="md"
            textTransform="uppercase"
            textDecoration="none"
            css={css({
              transition: transition([
                ["borderColor", "interaction"],
                ["color", "interaction"],
              ]),
              "&:hover, &:active, &:focus": {
                color: "dark-purple",
                borderColor: "dark-purple",
              },
            })}
          >
            {buttonLabel}
          </Link>
        </Flex>
      </Flex>
    </TileWrapper>
  );
};

const StyledImageWrap = styled("div")(
  css({
    position: "relative",
    borderTopLeftRadius: "default",
    borderTopRightRadius: "default",

    "& > div:first-child": {
      position: "static !important" as Property.Position,
    },
  })
);

const StyledImage = styled(Image)<StyledSystemProps>(
  css({
    position: "static !important" as Property.Position,
    width: "100% !important",
    height: "auto !important",
  }),
  all
);

TileImage.defaultProps = {
  buttonLabel: "Get Started",
  alt: "",
};

export default TileImage;
