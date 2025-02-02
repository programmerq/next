import css from "@styled-system/css";
import capitalize from "utils/capitalize";
import Box from "components/Box";

const types = ["warning", "tip", "note", "danger"] as const;

export interface AdmonitionProps {
  type: typeof types[number];
  title: string;
  children: React.ReactNode;
}

const Admonition = ({
  type: baseType,
  title: baseTitle,
  children,
}: AdmonitionProps) => {
  const type = baseType && types.includes(baseType) ? baseType : "tip";
  const title = baseTitle || capitalize(type);

  return (
    <Box
      border="1px solid"
      bg="white"
      borderColor={type}
      borderRadius="default"
      mb="3"
      boxShadow="0 1px 4px rgba(0, 0, 0, 0.24)"
      css={css({
        "&:last-child": {
          mb: 0,
        },
      })}
    >
      <Box
        color={type === "warning" ? "black" : "white"}
        bg={type}
        height="24px"
        px={[2, 3]}
        text="text-sm"
        textTransform="uppercase"
      >
        {title}
      </Box>
      <Box px={[2, 3]} py={2} fontSize={["text-md", "text-lg"]}>
        {children}
      </Box>
    </Box>
  );
};

Admonition.defaultProps = {
  type: "tip",
};

export default Admonition;
