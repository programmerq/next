import webBackground from "./assets/newsletter_web@2x.png";
import mobBackground from "./assets/newsletter_mobile@2x.png";

import Box from "components/Box";
import Flex from "components/Flex";
import Background from "components/Newsletter/Background";
import Card from "components/Newsletter/Card";
import NewsHeader from "components/Newsletter/NewsHeader";
import ImageContainer from "components/Newsletter/ImageContainer";
import AccessPlane from "components/Newsletter/AccessPlane";
import EmailCTA from "components/Newsletter/EmailCTA";
import Caption from "components/Newsletter/Caption";
import Text from "components/Newsletter/Text";
import Copyright from "components/Newsletter/Copyright";
import TermsContainer from "components/Newsletter/TermsContainer";
import TermsText from "components/Newsletter/TermsText";
import Image from "components/Image";
import engineers from "./assets/engineers.png";
import whiteLogo from "./assets/white.png";
import { NewsletterEmailSubscribe } from "components/Newsletter/NewsletterEmailSubscribe";

const Newsletter = () => {
  return (
    <Flex
      backgroundImage={[`url(${mobBackground})`, `url(${webBackground})`]}
      display="flex"
      flexDirection="column"
      boxSizing="content-box"
      justifyContent="space-between"
      alignItems="center"
      backgroundSize="cover"
      backgroundPosition="center"
      width="100%"
      minHeight="100vh"
    >
      <NewsHeader>
        <Text as="h1" m={"0 0 0 0"}>
          <a href="/">
            <ImageContainer
              width={["193px", "321px"]}
              height={["24px", "40px"]}
            >
              <Image
                src={whiteLogo}
                alt="network infrastructure"
                width={"100%"}
              />
            </ImageContainer>
          </a>
        </Text>
      </NewsHeader>
      <Card>
        <AccessPlane order={[2, 1]}>
          <ImageContainer
            m={["20px 0 0 0", "65px 0 0 0"]}
            width={[282, 534]}
            height={[158, 300]}
          >
            <Image
              src={engineers}
              alt="network infrastructure"
              width={"100%"}
            />
          </ImageContainer>
          <Caption>
            <Text
              fontSize={["header-4", "header-3"]}
              lineHeight={["22px", "24px"]}
              fontWeight={"bold"}
              m={["6px 18px 10px 18px", "0 56px 14px 56px"]}
            >
              Access Plane
            </Text>
            <Text
              fontSize={["15px", "text-lg"]}
              lineHeight={["20px", "24px"]}
              fontWeight={"regular"}
              m={["0 18px 37px 18px", "0px 56px 59px 56px"]}
            >
              Teleport allows engineers and security professionals to unify
              access for SSH servers, Kubernetes clusters, web applications, and
              databases across all environments.
            </Text>
          </Caption>
        </AccessPlane>
        <EmailCTA>
          <Caption width={[343, 440]} height={[298, 392]}>
            <Box
              fontSize={["22px", "34px"]}
              lineHeight={["28px", "40px"]}
              margin={["44px 18px 10px 18px", "113px 80px 20px 51px"]}
              fontWeight={"bold"}
            >
              Subscribe to our newsletter!
            </Box>
            <Text
              margin={["0 18px 0 18px", "0 80px 10px 51px"]}
              fontSize={["17px", "18px"]}
            >
              We&apos;ll send you the best of our blog just once a month. We
              promise.
            </Text>
            <NewsletterEmailSubscribe />
          </Caption>
        </EmailCTA>
      </Card>
      <Box mb={5}>
        <Copyright display={["none", "block"]}>
          © 2021 GRAVITATIONAL, INC. ALL RIGHTS RESERVED
        </Copyright>
        <TermsContainer display={["none", "flex"]}>
          <a href="/tos/">
            <TermsText>TERMS OF SERVICE</TermsText>
          </a>
          <a href="/privacy/">
            <TermsText>PRIVACY POLICY</TermsText>
          </a>
        </TermsContainer>
      </Box>
    </Flex>
  );
};
export default Newsletter;
