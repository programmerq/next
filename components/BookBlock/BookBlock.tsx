import Image from "next/image";
import styled from "styled-components";
import { all, css, StyledSystemProps } from "components/system";
import Box from "components/Box";
import Flex from "components/Flex";
import { Centrator } from "components/Layout";
import Marketo from "components/Marketo";
import getAddressImage from "utils/get-address-image";
import shadowBg from "./assets/shadow.png";

export interface BookBlockProps {
  children: React.ReactNode;
  formId: string;
  src: string;
  title: string;
}

export const BookBlock = ({ children, title, src, formId }: BookBlockProps) => {
  return (
    <Flex overflow="hidden">
      <Centrator>
        <Box pt={[0, 6]} pb={[4, 6]}>
          <Box
            as="h1"
            fontSize={["header-1", "hero-header"]}
            lineHeight={["xl", "hero-header"]}
            fontWeight="black"
          >
            {title}
          </Box>
          <Box
            fontSize={["text-lg", "text-xl"]}
            lineHeight={["md", "lg"]}
            color="dark-gray"
            my={2}
          >
            {children}
          </Box>
          <Box maxWidth={["auto", "376px"]}>
            <Marketo id={formId} />
          </Box>
        </Box>

        <StyledWrapperImage pt={6} display={["none", "flex"]}>
          <StyledImage src={src} width={344} height={442} alt="" />
        </StyledWrapperImage>
      </Centrator>
    </Flex>
  );
};

const StyledWrapperImage = styled("div")<StyledSystemProps>(
  css({
    width: "496px",
    display: "flex",
    boxSizing: "border-box",
    minWidth: 0,
    marginRight: "-76px",
    alignSelf: "flex-start",
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${getAddressImage(shadowBg)})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "496px 113px",
    backgroundPosition: "bottom center",
    pb: "8",

    "> div:first-child": {
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.24)",
    },
  }),
  all
);

const StyledImage = styled(Image)<StyledSystemProps>(
  css({
    zIndex: "2",
  }),
  all
);
