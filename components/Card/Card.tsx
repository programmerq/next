import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";
import Button from "components/Button";
import enterprise from "pages/features/assets/enterprise-bg.png";
import core from "pages/features/assets/core-bg.png";

export interface CardProps {
  children: React.ReactNode;
  title: string;
  src: string;
  href?: string;
  cardBG: string;
}

const cardBackgrounds = {
  enterprise,
  core,
};

const Card = ({ children, src, title, cardBG, href }: CardProps) => {
  //add additional backgrounds to cardBackgrounds
  const backgroundImage = cardBackgrounds[cardBG];
  return (
    <StyledWrapper>
      {/* top half */}
      <Flex
        flexDirection="column"
        alignItems="center"
        py={3}
        px={4}
        backgroundImage={`url("${backgroundImage}")`}
        backgroundPosition="center"
        backgroundSize="cover"
        borderRadius="8px 8px 0 0"
      >
        <NextImage src={src} alt={title} height={193} width={282} />
      </Flex>

      {/* bottom half */}
      <Flex
        flexDirection="column"
        flexGrow={1}
        alignItems="stretch"
        pb={4}
        pt={3}
        px={4}
        borderRadius="0 0 8px 8px"
      >
        <Box fontSize="text-md" lineHeight="md" color="black" fontWeight="bold">
          {title}
        </Box>
        <Box fontSize="13px" lineHeight="md" color="gray" pb={3}>
          {children}
        </Box>
        {href && (
          <Button
            variant="secondary"
            mt="auto"
            shape="outline"
            as="a"
            href={href}
            width="100%"
          >
            Learn More
          </Button>
        )}
      </Flex>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Flex)(
  css({
    flexDirection: "column",
    maxWidth: "calc((100% - 100px) / 4)",
    minWidth: ["340px", "280px", "180px"],
    borderRadius: "md",
    textDecoration: "none",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.24)",
    mr: 4,
    mt: 4,
    bg: "white",
  })
);

export default Card;
