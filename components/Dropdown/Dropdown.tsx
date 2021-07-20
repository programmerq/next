import { ReactNode } from "react";
import css from "@styled-system/css";
import styled from "styled-components";
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";
import Box, { BoxProps } from "components/Box";
import { all, variant, transition } from "components/system";

type Variant = "light" | "dark";

export type DropdownProps<T> = {
  options: T[];
  value?: T;
  pickValue?: (item: T) => string;
  renderOption?: (option: T) => ReactNode;
  onChange: (selected: string) => void;
  variant?: Variant;
  icon?: ReactNode;
} & BoxProps;

const echo = <T extends unknown>(thing: T): string => thing.toString();

export function Dropdown<T>({
  value,
  icon,
  options,
  onChange,
  variant,
  renderOption = echo,
  pickValue = echo,
  ...props
}: DropdownProps<T>) {
  const currentValue = pickValue(value);

  return (
    <Box {...props}>
      <StyledListboxInput
        value={currentValue}
        onChange={onChange}
        variant={variant}
      >
        <StyledListboxButton arrow={icon}>
          {renderOption(value)}
        </StyledListboxButton>
        <StyledListboxPopover>
          <ListboxList>
            {options.map((option) => {
              const value = pickValue(option);

              return (
                <StyledListboxOption key={value} value={value}>
                  {renderOption(option)}
                </StyledListboxOption>
              );
            })}
          </ListboxList>
        </StyledListboxPopover>
      </StyledListboxInput>
    </Box>
  );
}

const StyledListboxInput = styled(ListboxInput)<{ variant: Variant }>(
  css({
    display: "inline-flex",
    width: "100%",
    border: "1px solid",
    borderColor: "rgba(255, 255, 255, 0.24)",
    borderRadius: "default",
    color: "white",
    cursor: "pointer",
    bg: "transparent",
    whiteSpace: "nowrap",
    transition: transition([
      ["background", "interaction"],
      ["borderColor", "interaction"],
    ]),
    "&:focus-within, &:hover, &:active, &:focus": {
      borderColor: "white",
    },
    "&:hover": {
      bg: "rgba(255, 255, 255, 0.12)",
    },
  }),
  all,
  variant({
    variants: {
      dark: {
        color: "black",
        borderColor: "transparent",
        "&:focus-within, &:focus, &:hover": {
          bg: "light-purple",
          borderColor: "light-purple",
          color: "white",
        },
      },
    },
  })
);

const StyledListboxButton = styled(ListboxButton)(
  css({
    display: "flex",
    alignItems: "center",
    fontSize: ["text-md", "text-sm"],
    fontWeight: "bold",
    lineHeight: "30px",
    cursor: "pointer",
    border: "none",
    px: 2,
    py: 0,
    width: "100%",
    "&:focus": {
      outline: "none",
    },
    "& [data-reach-listbox-arrow]": {
      width: "16px",
      height: "16px",
      ml: 3,
      transition: transition([["transform", "interaction"]]),
      transform: "rotate(0deg)",
    },
    [`& [data-reach-listbox-arrow][data-expanded]`]: {
      transform: "rotate(180deg)",
    },
  }),
  all
);

const StyledListboxPopover = styled(ListboxPopover)(
  css({
    p: "1px",
    ml: "-1px",
    border: "none",
    borderRadius: "sm",
    boxShadow: "0 4px 16px rgba(0,0,0,.24) !important",
    "&:focus-within": {
      outline: "none",
    },
  })
);

const StyledListboxOption = styled(ListboxOption)(
  css({
    fontSize: ["text-md", "text-sm"],
    fontWeight: "bold",
    lineHeight: "30px",
    px: 2,
    cursor: "pointer",
    transition: transition([["background", "interaction"]]),
    "&:hover, &:focus, &:active, &[aria-selected='true']": {
      color: "black",
      bg: "lightest-gray",
    },
    "&[data-current]": {
      bg: "lightest-gray",
      color: "dark-purple",
    },
    "&:first-child": {
      borderTopLeftRadius: "sm",
      borderTopRightRadius: "sm",
    },
    "&:last-child": {
      borderBottomLeftRadius: "sm",
      borderBottomRightRadius: "sm",
    },
  })
);
