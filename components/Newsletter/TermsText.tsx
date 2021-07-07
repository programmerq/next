import { ComponentProps } from "react";
import styled from "styled-components";
import { css, StyledSystemProps } from "components/system";

const TermsText = styled("div")<StyledSystemProps>(
  css({
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "400",
    textAlign: "center",
    textDecoration: "underline",
    textTransform: "uppercase",
    margin: "12px 5px 0 5px",
  })
);

export type TermsTextProps = ComponentProps<typeof TermsText>;

export default TermsText;
