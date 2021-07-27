import styled from "styled-components";
import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import Icon from "components/Icon";
import { variant, css } from "components/system";

const types = ["warning", "tip", "note", "danger"] as const;

const typeIcons = {
  note: "note",
  tip: "success",
  warning: "warning",
  danger: "error",
} as const;

type NoticeType = typeof types[number];

export interface NoticeProps {
  type: NoticeType;
  children: React.ReactNode;
}

const Notice = ({
  type: baseType,
  children,
  ...props
}: NoticeProps & FlexProps) => {
  const type = baseType && types.includes(baseType) ? baseType : "tip";
  const iconName = typeIcons[type];

  return (
    <StyledWrapper type={type} {...props}>
      <Icon name={iconName} mr={2} color={type} flexShrink="0" />
      <Box fontSize="text-lg" lineHeight="md">
        {children}
      </Box>
    </StyledWrapper>
  );
};

export default Notice;

const StyledWrapper = styled(Flex)<{ type: NoticeType }>(
  css({
    p: 2,
    borderRadius: "default",
    border: "1px solid",
    alignItems: "center",
    mb: 3,
    "&:last-child": {
      mb: 0,
    },
  }),
  variant({
    prop: "type",
    variants: {
      warning: {
        borderColor: "warning",
        bg: "rgba(255, 180, 0, 0.12)",
      },
      tip: {
        borderColor: "tip",
        bg: "rgba(0, 199, 174, 0.06)",
      },
      note: {
        borderColor: "note",
        bg: "rgba(0, 156, 241, 0.12)",
      },
      danger: {
        borderColor: "danger",
        bg: "rgba(248, 0, 97, 0.06)",
      },
    },
  })
);
