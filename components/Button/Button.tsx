import styled from "styled-components";
import css from "@styled-system/css";
import { all, StyledSystemProps, transition, variant } from "components/system";

export type ButtonVariant = "primary" | "secondary" | "secondary-white";
export type ButtonShape = "sm" | "md" | "lg" | "outline";

interface ButtonProps extends StyledSystemProps {
  variant?: ButtonVariant | ButtonVariant[];
  shape?: ButtonShape | ButtonShape[];
}

const Button = styled("button")<ButtonProps>(
  css({
    appearance: "none",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    borderStyle: "solid",

    borderRadius: "default",
    overflow: "hidden",
    fontWeight: 600,
    whiteSpace: "nowrap",
    textDecoration: "none",
    cursor: "pointer",
    transition: transition([
      ["background", "interaction"],
      ["color", "interaction"],
    ]),
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      transitionDuration: "0s",
      opacity: "0.56",
    },
    "&:disabled": {
      backgroundColor: "lightest-gray",
      borderColor: "lightest-gray",
      color: "dark-gray",
      cursor: "default",
    },
  }),
  all,

  variant({
    variants: {
      primary: {
        backgroundColor: "dark-purple",
        borderColor: "dark-purple",
        color: "white",
        "&:focus, &:hover": {
          backgroundColor: "light-purple",
          borderColor: "light-purple",
          color: "white",
        },
      },
      secondary: {
        backgroundColor: "white",
        borderColor: "dark-purple",
        color: "dark-purple",
        "&:focus, &:hover": {
          backgroundColor: "white",
          borderColor: "light-purple",
          color: "light-purple",
        },
      },
      "secondary-white": {
        backgroundColor: "transparent",
        borderColor: "white",
        color: "white",
        "&:focus, &:hover": {
          borderColor: "light-gray",
          color: "light-gray",
        },
      },
    },
  }),
  variant({
    prop: "shape",
    variants: {
      sm: {
        height: "24px",
        px: 2,
        fontSize: "text-xs",
        textTransform: "uppercase",
        borderWidth: "1px",
      },
      md: {
        height: "32px",
        px: 4,
        fontSize: "text-md",
        borderWidth: "1px",
      },
      lg: {
        height: "48px",
        px: 7,
        fontSize: "text-lg",
        borderWidth: "2px",
      },
      outline: {
        height: "48px",
        px: 7,
        fontSize: "text-lg",
        fontWeight: "bold",
        borderWidth: "1px",
      },
    },
  })
);

Button.defaultProps = {
  variant: "primary",
  shape: "md",
};

export default Button;
