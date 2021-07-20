import { useContext } from "react";
import Box, { BoxProps } from "components/Box";
import Flex from "components/Flex";
import Icon, { IconName } from "components/Icon";
import { Dropdown } from "components/Dropdown";
import { DocsContext, ScopeType } from "./context";

interface Option {
  value: ScopeType;
  icon: IconName;
  title: string;
}

const options: Option[] = [
  {
    icon: "code",
    value: "oss",
    title: "OpenSource",
  },
  {
    icon: "building",
    value: "enterprise",
    title: "Enterprise",
  },
  {
    icon: "clouds",
    value: "cloud",
    title: "Cloud",
  },
];

interface ScopesItemProps {
  icon: IconName;
  children: React.ReactNode;
}

const ScopesItem = ({ icon, children }: ScopesItemProps) => {
  return (
    <Flex alignItems="center">
      <Icon
        display={["none", "block"]}
        name={icon}
        opacity="0.56"
        width="20px"
        height="20px"
        mr={2}
        mt="-2px"
      />
      {children}
    </Flex>
  );
};

const renderScope = (scope: Option) => (
  <ScopesItem icon={scope.icon}>{scope.title}</ScopesItem>
);

const pickValue = ({ value }: Option) => value;

const pickOption = (value: ScopeType): Option =>
  options.find((option) => option.value === value);

export const Scopes = ({ ...props }: BoxProps) => {
  const { scope, setScope } = useContext(DocsContext);

  return (
    <Box {...props}>
      <Dropdown
        width={["auto", "150px"]}
        value={pickOption(scope)}
        options={options}
        onChange={setScope}
        renderOption={renderScope}
        pickValue={pickValue}
        icon={<Icon name="arrow" size="sm" />}
      />
    </Box>
  );
};
