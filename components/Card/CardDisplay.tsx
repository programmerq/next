import { Flex, Section, Icon, Box, Card } from "components";
import { IconProps, IconName } from "components/Icon";
import { Centrator } from "components/Layout";
import type { BGColor } from "components/Section/Section";

/**
 * Card display component with integral background, icon and title element,
 * and centralizer for large screen sizes
 */

type CardType = React.ReactElement<typeof Card>;

export interface CardDisplayProps {
  children: CardType;
  bg: BGColor;
  title: string;
  iconName?: IconName;
  iconSize?: IconProps["size"];
}

export function CardDisplay({
  children,
  bg,
  title,
  iconName,
  iconSize,
}: CardDisplayProps) {
  return (
    <Section bg={bg}>
      <Centrator>
        <Flex flexDirection="column">
          {/** Icon and Title elements */}
          <Flex flexDirection="row" pt={[4, 7, 9]}>
            {iconName && (
              <Icon color="dark-purple" name={iconName} size={iconSize}></Icon>
            )}
            <Box fontSize="header-3" color="darkest" lineHeight="lg" pl={3}>
              {title}
            </Box>
          </Flex>
          {/** Card display logic */}
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent={["center", "flex-start"]}
            alignItems="stretch"
            mt={4}
            mb={6}
            ml={[4, 0, 0]}
          >
            {children}
          </Flex>
        </Flex>
      </Centrator>
    </Section>
  );
}
