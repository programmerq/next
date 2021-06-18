import { useMemo } from "react";
import css from "@styled-system/css";
import { MDXProvider, Components } from "@mdx-js/react";
import Admonition from "components/Admonition";
import Box from "components/Box";
import { Tabs, TabItem } from "components/Tabs";
import {
  Tile,
  TileSet,
  TileList,
  TileListItem,
  TileImage,
} from "components/Tile";
import Code from "./Code";
import { Header, StyledHeader } from "./Headers";
import { Image, Figure } from "./Image";
import IFrame from "./IFrame";
import Link from "./Link";
import Pre from "./Pre";

export const components = {
  a: Link,
  code: Code,
  inlineCode: Code,
  img: Image,
  iframe: IFrame,
  h1: function H1(props) {
    return <Header as="h1" {...props} />;
  },
  h2: function H2(props) {
    return <Header as="h2" {...props} />;
  },
  h3: function H3(props) {
    return <Header as="h3" {...props} />;
  },
  h4: function H4(props) {
    return <Header as="h4" {...props} />;
  },
  h5: function H5(props) {
    return <Header as="h5" {...props} />;
  },
  pre: Pre,
  Admonition,
  Tabs,
  TabItem,
  Tile,
  TileSet,
  TileList,
  TileListItem,
  TileImage,
  Figure,
};

export interface MDXProps {
  children: React.ReactNode;
  components?: Components;
}

const MDX = ({ children, components: customComponents = {} }: MDXProps) => {
  const fullComponents = useMemo(() => {
    return { ...components, ...customComponents };
  }, [customComponents]);

  return (
    <Box
      css={css({
        lineHeight: ["26px"],
        color: "text",
        "& > *:first-child": {
          mt: 0,
        },
        "& > *:last-child": {
          mb: 0,
        },
        "& p:not([class])": {
          mt: 0,
          mb: 3,
          fontSize: ["text-lg", "text-lg"],
          lineHeight: ["26px"],
        },
        "& video:not([class])": {
          mb: 3,
          maxWidth: "100%",
        },
        "& ul:not([class]), & ol:not([class])": {
          mt: 0,
          mb: 3,
          pl: "24px",
        },
        "& li:not([class])": {
          fontSize: ["text-lg", "text-lg"],
          lineHeight: "26px",
          mb: 2,
        },
        [`& h1${StyledHeader}`]: {
          fontSize: ["header-1", "40px"],
          lineHeight: ["48px", "52px"],
          fontWeight: "black",
          mt: 4,
          mb: 3,
        },
        [`& h2${StyledHeader}`]: {
          fontSize: ["header-2", "header-1"],
          lineHeight: ["32px", "48px"],
          fontWeight: "bold",
          mt: 3,
          mb: 2,
        },
        [`& h3${StyledHeader}`]: {
          fontSize: ["header-4", "header-3"],
          lineHeight: ["md", "32px"],
          fontWeight: "bold",
          mt: 3,
          mb: 2,
        },
        [`& h4${StyledHeader}`]: {
          fontSize: ["text-xl", "text-xl"],
          lineHeight: "32px",
          fontWeight: "bold",
          mt: 3,
          mb: 2,
        },
        [`& h5${StyledHeader}`]: {
          fontSize: "text-md",
          lineHeight: "lg",
          mt: 3,
          mb: 2,
          textTransform: "uppercase",
        },
        "& table:not([class])": {
          mb: 4,
          bg: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,.24)",
          borderRadius: "default",
          borderCollapse: "collapse",
          boxSizing: "border-box",
          width: "100%",
        },
        "& thead:not([class])": {
          borderBottom: "1px solid #D2DBDF",
        },
        "& th:not([class])": {
          fontSize: ["text-md", "text-lg"],
          lineHeight: "26px",
          fontWeight: "bold",
          textAlign: "left",
          px: 3,
          py: 2,
        },
        "& td:not([class])": {
          color: "text",
          fontSize: ["text-md", "text-lg"],
          lineHeight: "md",
          p: 3,
        },
        "& tbody tr:not([class]):nth-child(even)": {
          bg: "lightest-gray",
        },
        "tr:not([class]):last-child": {
          borderBottomLeftRadius: "default",
          borderBottomRightRadius: "default",
        },
      })}
    >
      <MDXProvider components={fullComponents}>{children}</MDXProvider>
    </Box>
  );
};

export default MDX;
