import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";
import Head from "components/Head";
import Link from "components/Link";
import Box from "components/Box";
import Flex from "components/Flex";
import { NewsletterEmailSubscribe } from "components/Newsletter/NewsletterEmailSubscribe";
import getAddressImage from "utils/get-address-image";
import Logo from "components/Logo";
import { transition } from "components/system";

import engineers from "./assets/engineers.png";
import webBackground from "./assets/newsletter_web.png";
import mobBackground from "./assets/newsletter_mob.png";

const Newsletter = () => {
  return (
    <>
      <Head title="Newsletter" description="Subsribe to our Newsletter!" />
      <StyledBackground
        backgroundImage={[
          `url(${getAddressImage(mobBackground)})`,
          `url(${getAddressImage(webBackground)})`,
        ]}
        minHeight={["stretch", "100vh"]}
        backgroundColor="light-purple"
        backgroundSize="cover"
        pl={[2, 4]}
        pr={[2, 4]}
      >
        <Box as="header" mt={[5, 9]} mb={[5, 5]} color="white">
          <Logo width={["120px", "180px"]} height={["24px", "38px"]} />
        </Box>

        <StyledCard as="section">
          <StyledAccessPlane order={[2, 1]}>
            <BoxWrapperStyled>
              <StyledBackground
                alignSelf={["center", "initial"]}
                backgroundImage={`url(${getAddressImage(engineers)})`}
                backgroundSize="100%"
                width={[282, "auto"]}
                height={[158, 300]}
                mt={[4, 8]}
              />
              <Box
                fontSize={["header-4", "header-3"]}
                lineHeight="md"
                fontWeight="bold"
                px={[3, 8]}
                py={[2, 3]}
              >
                Access Plane
              </Box>
              <Box
                fontSize="text-lg"
                lineHeight="md"
                fontWeight="regular"
                px={[3, 8]}
                pb={[5, 8]}
              >
                Teleport allows engineers and security professionals to unify
                access for SSH servers, Kubernetes clusters, web applications,
                and databases across all environments.
              </Box>
            </BoxWrapperStyled>
          </StyledAccessPlane>
          <StyledEmailCTA>
            <Flex
              flexDirection="column"
              justifyContent="space-betweem"
              alignItems="center"
              px={[3, 9]}
            >
              <Box justifyContent="center">
                <Box
                  as="h1"
                  fontSize={["header-3", "header-1"]}
                  lineHeight={["lg", "xl"]}
                  pt={[6, "120px"]}
                  pb={[2, 3]}
                  fontWeight={"bold"}
                >
                  Subscribe to our newsletter!
                </Box>
                <Box fontSize="text-xl" pb={[0, 3]}>
                  We&apos;ll send you the best of our blog and industry news.
                </Box>
              </Box>
              <NewsletterEmailSubscribe />
            </Flex>
          </StyledEmailCTA>
        </StyledCard>

        <Box as="footer" mb={9}>
          <StyledCopyright>
            © 2021 GRAVITATIONAL, INC. ALL RIGHTS RESERVED
          </StyledCopyright>
          <Box
            display={["none", "flex"]}
            flexDirection="row"
            justifyContent="center"
          >
            <StyledLink href="/tos/">TERMS OF SERVICE</StyledLink>
            <StyledLink href="/privacy/">PRIVACY POLICY</StyledLink>
          </Box>
        </Box>
      </StyledBackground>
    </>
  );
};

const StyledAccessPlane = styled(Flex)(
  css({
    backgroundImage: [
      "linear-gradient(141deg, #eff1fe 0%, #ffffff 100%)",
      "linear-gradient(-68deg, #eff1fe 0%, #ffffff 100%, #ffffff 100%)",
    ],
    borderTopLeftRadius: [0, "md"],
    borderBottomLeftRadius: "md",
    borderBottomRightRadius: ["md", 0],
    justifyContent: "center",
  })
);

const BoxWrapperStyled = styled(Flex)(
  css({
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: ["420px", "initial"],
  })
);

const StyledCard = styled(Flex)(
  css({
    maxWidth: "944px",
    width: "100%",
    backgroundColor: "white",
    flexDirection: ["column", "row-reverse"],
    borderRadius: "md",
    marginBottom: [8, 5],
    boxShadow: "0 0 64px rgba(0, 0, 0, 0.32)",
  })
);

const StyledCopyright = styled("div")(
  css({
    display: ["none", "block"],
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textTransform: "uppercase",
  })
);

const StyledEmailCTA = styled("div")<StyledSystemProps>(
  css({
    display: "flex",
    justifyContent: ["center", "start"],
    background: "white",
    borderRadius: "md",
    boxSizing: "border-box",
  })
);

const StyledBackground = styled(Flex)({
  display: "flex",
  flexDirection: "column",
  boxSizing: "content-box",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundRepeat: "no-repeat",
});

const StyledLink = styled(Link)(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "uppercase",
    mx: 1,
    mt: 2,
    padding: 1,
    cursor: "pointer",
    transition: transition([["color", "interaction"]]),
    "&:hover": {
      color: "white",
    },
    "&:focus, &:active": {
      color: "white",
      outline: "none",
    },
  })
);

export default Newsletter;
