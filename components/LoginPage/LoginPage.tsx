import { useCallback, useState } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";
import getAddressImage from "utils/get-address-image";
import { ReactComponent as Logo } from "./assets/logo-medallion.svg";
import bgImage from "./assets/cloud-city.png";

const LoginPage = () => {
  const [value, setValue] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsErrorVisible(false);
    setValue(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();

      if (!value.trim()) {
        setIsErrorVisible(true);

        return;
      }

      try {
        const url = new URL(`https://${value.trim()}.teleport.sh`);

        window.location.href = url.href;
      } catch {
        setIsErrorVisible(true);
      }
    },
    [value]
  );

  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      overflow="auto"
      background={`#162352 url(${getAddressImage(bgImage)}) top no-repeat`}
      backgroundSize="cover"
    >
      <Box as="header" pt={[6, "88px"]} pb={[5, 7]}>
        <Flex as="h1" justifyContent="center" m={0}>
          <Link href="/" display="block" title="Teleport">
            <Logo display="block" width="104px" height="104px" />
          </Link>
        </Flex>
      </Box>
      <Box
        boxSizing="content-box"
        maxWidth="1240px"
        mx="auto"
        px={[3, 10]}
        py={[5, 10]}
      >
        <Box
          as="form"
          onSubmit={handleSubmit}
          width={["auto", "50%"]}
          mx="auto"
          px={["12px", 7]}
          pb={["12px", 7]}
          pt={[2, 5]}
          borderRadius="md"
          bg="rgba(12,20,61,0.56)"
          boxShadow="0 8px 64px rgb(0 0 0 / 24%)"
        >
          <Box
            as="h2"
            mt={0}
            mb={[0, 3]}
            fontSize={["text-md", "text-xl"]}
            fontWeight="bold"
            textAlign="center"
            lineHeight={["lg", "xxl"]}
            color="white"
          >
            Sign in to Teleport
          </Box>
          {isErrorVisible && (
            <Box
              mb={4}
              px={3}
              py={2}
              border="2px solid"
              borderColor="red"
              borderRadius="sm"
              fontSize="text-md"
              lineHeight="md"
              color="white"
              boxShadow="0 1px 4px rgb(0 0 0 / 24%)"
              bg="rgba(245,0,87,.12)"
            >
              Please enter your Teleport workspace name
            </Box>
          )}
          <Box
            as="label"
            htmlFor="subdomain"
            display="block"
            fontSize="text-xs"
            fontWeight="bold"
            textTransform="uppercase"
            lineHeight="md"
            color="white"
          >
            Teleport Workspace Name
          </Box>
          <Box display="flex" mb={[3, 6]} height="48px" alignItems="stretch">
            <Box
              as="input"
              id="subdomain"
              value={value}
              onChange={handleChange}
              placeholder="my-company"
              flexGrow={2}
              px={["12px", 3]}
              border="1px solid rgba(55,71,79,0.24)"
              borderTopLeftRadius="sm"
              borderBottomLeftRadius="sm"
              fontSize={["text-lg", "text-xl"]}
              textAlign="right"
              color="darkest"
              css={css({
                "&:focus, &:active": {
                  borderColor: "light-blue",
                  outline: "none",
                },
                "&::placeholder": {
                  color: "inherit",
                  opacity: 0.5,
                },
              })}
            />
            <Flex
              flexGrow={[0, 1]}
              alignItems="center"
              px={["12px", 3]}
              pb="1px"
              borderTopRightRadius="sm"
              borderBottomRightRadius="sm"
              fontSize={["text-lg", "text-xl"]}
              color="dark-gray"
              background="linear-gradient(180deg, #fff, #d2dbdf)"
            >
              .teleport.sh
            </Flex>
          </Box>
          <Button type="submit" shape="lg" width="100%">
            continue
          </Button>
        </Box>
      </Box>

      <Box
        as="footer"
        mx={[0, 11]}
        mb={9}
        fontSize="text-xs"
        lineHeight="md"
        textAlign="center"
        textTransform="uppercase"
        color="white"
      >
        <Box as="p" opacity={0.5}>
          &copy; Gravitational, Inc. All Rights Reserved
        </Box>
        <nav>
          <StyledLink href="/tos/">Terms of Service</StyledLink>
          <StyledLink href="/privacy/">Privacy Policy</StyledLink>
        </nav>
      </Box>
    </Box>
  );
};

const StyledLink = styled(Link)(
  css({
    color: "white",
    mx: [1, 2],
    opacity: 0.5,
    "&:hover, &:active, &:focus": {
      opacity: 1,
    },
  })
);

export default LoginPage;
