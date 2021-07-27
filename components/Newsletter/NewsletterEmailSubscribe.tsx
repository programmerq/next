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
      alignItems="stretch"
      flexDirection="column"
      mb={[5, 0]}
      mt={[4, 0]}
      width="100%"
      minHeight="44px"
      minWidth={["auto", "304px"]}
      bg={formLoaded ? "transparent" : "lightest-gray"}
      transition={transition([["backgroundColor", "interaction"]])}
      {...props}
    >
      <StyledFormFormWrapper
        id={`mktoForm_${NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID}`}
      />
    </Flex>
  );
}

const StyledFormFormWrapper = styled("form")(
  css({
    width: "auto !important",
    padding: "0px !important",

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
      fontWeight: "bold",
      fontSize: ["text-lg", "header-4"],
      minHeight: "44px",
      mt: "16px !important",
      overflow: "hidden",
      position: "relative",
      textDecoration: "none",
      textAlign: "center",
      whiteSpace: "nowrap",
      width: "100%",
      transition: transition([["backgroundColor", "interaction"]]),
      "&:hover, &:focus": {
        backgroundColor: "light-purple",
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
      fontSize: ["14px !important", "18px !important"],
      fontWeight: "regular",
      height: "44px !important",
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
