import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import styled from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";
import { useMarketo } from "utils/marketo";

const { NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID } = process.env;

export function NewsletterEmailSubscribe({ ...props }: FlexProps) {
  const formLoaded = useMarketo({
    formId: NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID,
  });

  return (
    <Flex
      backgroundColor="white"
      justifyContent="center"
      alignItems={["stretch", "center"]}
      flexDirection={["column", "row"]}
      {...props}
    >
      <Box
        ml={[0, 2]}
        mt={[4, 0]}
        minHeight="44px"
        minWidth="340px"
        bg={formLoaded ? "transparent" : "lightest-gray"}
        transition={transition([["backgroundColor", "interaction"]])}
      >
        <StyledFormFormWrapper
          id={`mktoForm_${NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID}`}
        />
      </Box>
    </Flex>
  );
}

const StyledFormFormWrapper = styled("form")(
  css({
    px: ["16px !important", "0 !important"],
    width: "auto !important",
    ".mktoButton": {
      alignItems: "center",
      justifyContent: "center",
      appearance: "none",
      bg: "dark-purple",
      border: "none",
      borderRadius: "default",
      boxSizing: "border-box",
      color: "white",
      cursor: "pointer",
      display: "inlineFlex",
      fontWeight: "black",
      fontSize: "text-sm",
      width: "100%",
      minHeight: "40px",
      mt: "16px !important",
      overflow: "hidden",
      px: 5,
      position: "relative",
      textDecoration: "none",
      textAlign: "center",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      transition: transition([["opacity", "interaction"]]),
      "&:hover, &:focus": {
        opacity: 0.8,
      },
    },
    label: {
      display: "none",
    },
    ".mktoButtonRow": {
      width: "100%",
    },
    ".mktoButtonWrap": {
      m: "0 !important",
    },
    ".mktoFieldWrap, & .mktoFormCol": {
      float: "none !important" as "none",
    },
    input: {
      width: "100% !important",
      p: "0 8px !important",
      border: "1px solid",
      borderColor: "light-gray",
      bg: "lightest-gray",
      boxSizing: "border-box",
      color: "darkest",
      display: "block",
      fontSize: "text-md",
      fontWeight: "regular",
      height: "40px !important",
      outline: "none",
      margin: "0 !important",
      borderRadius: "sm",
      transition: transition([
        ["borderColor", "interaction"],
        ["backgroundColor", "interaction"],
      ]),
      "&::placeholder": {
        color: "gray",
      },
      "&:hover, &:focus": {
        borderColor: "light-blue",
      },
    },
  })
);
