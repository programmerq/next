import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";
import Head from "components/Head";
import Link from "components/Link";
import Box from "components/Box";
import Flex from "components/Flex";
import Image from "components/Image";
import { NewsletterEmailSubscribe } from "components/Newsletter/NewsletterEmailSubscribe";
import getAddressImage from "utils/get-address-image";

import webBackground from "./assets/newsletter_web.png";
import mobBackground from "./assets/newsletter_mob.png";
import engineers from "./assets/engineers.png";
import whiteLogo from "./assets/white_logo@1x.png";

const Newsletter = () => {
  return (
    <>
      <Head title="Newsletter" description="Subsribe to our Newsletter!" />
      <StyledBackground
        backgroundImage={[
          `url(${getAddressImage(mobBackground)})`,
          `url(${getAddressImage(webBackground)})`,
        ]}
        height="100vh"
      >
        <Box mt={[9, 7]} mb={[5, 5]}>
          <Box as="h1" m={0}>
            <StyledLink href="/">
              <Flex
                justifyContent="center"
                alignItems="top"
                height={["24px", "auto"]}
                width={["120px", "auto"]}
                css={css({
                  "&:hover": {
                    opacity: 0.8,
                  },
                })}
              >
                <Image
                  src={whiteLogo}
                  alt="network infrastructure"
                  width="100%"
                />
              </Flex>
            </StyledLink>
          </Box>
        </Box>
        <StyledCard>
          <StyledAccessPlane order={[2, 1]}>
            <StyledBackground
              backgroundImage={`url(${getAddressImage(engineers)})`}
              backgroundSize="100%"
              width={[282, 534]}
              height={[158, 300]}
              backgroundRepeat="no-repeat"
              ml={[5, -3]}
              mt={[4, 8]}
            />
            <Box>
              <Box
                fontSize={["header-4", "header-3"]}
                lineHeight="md"
                fontWeight="bold"
                p={["8px 16px 10px 16px", "12px 56px 16px 56px"]}
              >
                Access Plane
              </Box>
              <Box
                fontSize="text-lg"
                lineHeight={["20px", "md"]}
                fontWeight="regular"
                px={[3, 8]}
                pb={[5, 8]}
              >
                Teleport allows engineers and security professionals to unify
                access for SSH servers, Kubernetes clusters, web applications,
                and databases across all environments.
              </Box>
            </Box>
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
                  fontSize={["header-3", "header-1"]}
                  lineHeight={["28px", "xl"]}
                  pt={[7, "120px"]}
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
        <Box mb={5}>
          <StyledCopyright>
            © 2021 GRAVITATIONAL, INC. ALL RIGHTS RESERVED
          </StyledCopyright>
          <Box
            display={["none", "flex"]}
            flexDirection="row"
            justifyContent="center"
          >
            <StyledLink href="/tos/">
              <StyledTermsText>TERMS OF SERVICE</StyledTermsText>
            </StyledLink>
            <StyledLink href="/privacy/">
              <StyledTermsText>PRIVACY POLICY</StyledTermsText>
            </StyledLink>
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
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: ["0 0 8px 8px", "8px 0 0 8px"],
  })
);

const StyledCard = styled(Flex)(
  css({
    background: "white",
    flexDirection: ["column", "row-reverse"],
    borderRadius: "md",
    marginBottom: [8, 5],
    boxShadow: "0 0 64px rgba(0, 0, 0, 0.32)",
    width: [343, 944],
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
});

const StyledLink = styled(Link)({
  "&:focus, &:active": {
    opacity: "0.8",
    outline: "none",
  },
});

const StyledTermsText = styled("div")(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "text-sm",
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "uppercase",
    margin: "16px 8px 64px 8px",
    "&:hover, &:active, &:focus": {
      color: "dark-purple",
    },
  })
);

export default Newsletter;
