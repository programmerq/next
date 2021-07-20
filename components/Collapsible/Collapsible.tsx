import { css } from "@styled-system/css";
import { useContext, useEffect, useState } from "react";
import Box from "components/Box";
import HeadlessButton from "components/HeadlessButton";
import Icon from "components/Icon";
import { transition } from "components/system";
import { DocsContext, ScopeType } from "components/DocsPage/context";

export interface CollapsibleProps {
  scope?: ScopeType;
  title: string;
  children: React.ReactNode;
}

export const Collapsible = ({ scope, title, children }: CollapsibleProps) => {
  const { scope: currentScope, isCurrentVersion } = useContext(DocsContext);
  const [isOpened, setIsOpened] = useState(scope === currentScope);

  useEffect(() => {
    setIsOpened(scope === currentScope);
  }, [scope, currentScope]);

  if (scope === "cloud" && !isCurrentVersion) {
    return;
  }

  return (
    <Box
      bg="white"
      boxShadow={isOpened ? "0 1px 4px rgba(0, 0, 0, 0.24)" : "none"}
      borderRadius="default"
      mb={3}
      css={css({
        "&:last-child": {
          mb: 0,
        },
      })}
    >
      <HeadlessButton
        onClick={() => setIsOpened((value) => !value)}
        width="100%"
        textAlign="left"
        fontSize="text-md"
        fontWeight="bold"
        lineHeight="lg"
        color="darkest"
        display="flex"
        alignItems="center"
        cursor="pointer"
        bg={isOpened ? "lightest-gray" : "none"}
        transition={transition([["backgroundColor", "interaction"]])}
        borderTopLeftRadius="default"
        borderTopRightRadius="default"
        css={css({
          "&:hover": {
            color: "light-purple",
          },
        })}
      >
        <Icon
          name="arrow"
          size="sm"
          m={2}
          transition={transition([["transform", "fast"]])}
          transform={isOpened ? "rotate(180deg)" : "rotate(0deg)"}
        />
        {title}
      </HeadlessButton>
      <Box display={isOpened ? "block" : "none"} p={[2, 3]} overflowX="auto">
        {children}
      </Box>
    </Box>
  );
};
