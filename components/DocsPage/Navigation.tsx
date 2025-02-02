import { useRouter } from "next/router";
import { Fragment, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";
import Flex from "components/Flex";
import HeadlessButton from "components/HeadlessButton";
import Search from "components/Search";
import Link from "components/Link";
import Icon from "components/Icon";
import { NavigationItem, NavigationCategory } from "./types";
import { getPath } from "utils/url";

interface DocsNavigationItemsProps {
  entries: NavigationItem[];
  onClick: () => void;
}

const DocsNavigationItems = ({
  entries,
  onClick,
}: DocsNavigationItemsProps) => {
  const router = useRouter();

  return (
    <>
      {!!entries.length &&
        entries.map((entry) => (
          <Fragment key={entry.slug}>
            <NavigationLink
              href={entry.slug}
              active={entry.slug === getPath(router.asPath)}
              onClick={onClick}
            >
              {entry.title}
            </NavigationLink>
            {!!entry.entries?.length && (
              <Box ml="2">
                <DocsNavigationItems
                  entries={entry.entries}
                  onClick={onClick}
                />
              </Box>
            )}
          </Fragment>
        ))}
    </>
  );
};

interface DocNavigationCategoryProps extends NavigationCategory {
  id: number;
  opened: boolean;
  onToggleOpened: (value: number) => void;
  onClick: () => void;
}

const DocNavigationCategory = ({
  id,
  opened,
  onToggleOpened,
  onClick,
  icon,
  title,
  entries,
}: DocNavigationCategoryProps) => {
  const toggleOpened = useCallback(
    () => onToggleOpened(opened ? null : id),
    [id, opened, onToggleOpened]
  );

  return (
    <Box as="nav" key={title}>
      <CategoryButton active={opened} onClick={toggleOpened}>
        <Icon name={icon} ml="12px" mr={2} />
        <Box text="text-md">{title}</Box>
      </CategoryButton>
      {opened && (
        <Box
          bg="lightest-gray"
          px={2}
          py={1}
          boxShadow="inset 0 1px 2px rgba(0, 0, 0, 0.24)"
        >
          <DocsNavigationItems entries={entries} onClick={onClick} />
        </Box>
      )}
    </Box>
  );
};

const hasSlug = (items: NavigationItem[], href: string) => {
  return items.some(({ slug, entries }) => {
    return slug === href || (!!entries && hasSlug(entries, href));
  });
};

export const getCurrentCategoryIndex = (
  categories: NavigationCategory[],
  href: string
) => {
  const index = categories.findIndex(({ entries }) => hasSlug(entries, href));

  return index !== -1 ? index : null;
};

interface DocNavigationProps {
  section?: boolean;
  data: NavigationCategory[];
}

const DocNavigation = ({ data, section }: DocNavigationProps) => {
  const router = useRouter();
  const route = getPath(router.asPath);

  const [openedId, setOpenedId] = useState<number>(
    getCurrentCategoryIndex(data, route)
  );
  const [visible, setVisible] = useState<boolean>(false);
  const toggleMenu = useCallback(() => setVisible((visible) => !visible), []);

  useEffect(() => {
    setOpenedId(getCurrentCategoryIndex(data, route));
  }, [data, route]);

  return (
    <Box
      width={["auto", "240px"]}
      height={["48px", "100%"]}
      position="relative"
      zIndex={1000}
      boxShadow={section ? ["none", "1px 0 4px rgba(0,0,0,.12)"] : "none"}
      borderRight={section ? "none" : ["none", "1px solid"]}
      borderColor={["none", "lightest-gray"]}
    >
      <Flex height="48px" py={2} bg="light-gray" alignItems="center">
        <Search id="mobile" mx={2} width="100%" />
        <HeadlessButton
          onClick={toggleMenu}
          mr={3}
          color="gray"
          display={["block", "none"]}
          css={css({
            "&:focus": {
              outline: "none",
            },
          })}
        >
          <Icon name={visible ? "close" : "hamburger"} size="md" />
        </HeadlessButton>
      </Flex>
      <Box
        position={["absolute", "static"]}
        display={[visible ? "block" : "none", "block"]}
        top="48px"
        bg="white"
        width="100%"
        overflow={["none", "auto"]}
      >
        {data.map((props, index) => (
          <DocNavigationCategory
            key={index}
            id={index}
            opened={index === openedId}
            onToggleOpened={setOpenedId}
            onClick={toggleMenu}
            {...props}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DocNavigation;

const CategoryButton = styled(HeadlessButton)(
  ({ active }: { active?: boolean }) =>
    css({
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "56px",
      borderBottom: "1px solid",
      borderBottomColor: "lightest-gray",
      borderLeft: "4px solid",
      borderLeftColor: active ? "light-purple" : "white",
      color: active ? "dark-purple" : "gray",
      "&:focus, &:hover, &:active": {
        cursor: "pointer",
        outline: "none",
        color: "light-purple",
      },
    })
);

const NavigationLink = styled(Link)(({ active }: { active?: boolean }) =>
  css({
    display: "block",
    width: "100%",
    px: 2,
    borderRadius: "default",
    fontSize: "text-md",
    lineHeight: "lg",
    color: active ? "dark-purple" : "gray",
    fontWeight: active ? "bold" : "regular",
    textDecoration: "none",
    "&:focus, &:hover, &:active": {
      outline: "none",
      bg: "white",
    },
  })
);
