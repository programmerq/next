import { useMemo } from "react";
import { MDXProvider, Components } from "@mdx-js/react";
import Admonition from "components/Admonition";
import Box from "components/Box";
import Notice from "components/Notice";
import { Tabs, TabItem } from "components/Tabs";
import {
  Tile,
  TileSet,
  TileList,
  TileListItem,
  TileImage,
} from "components/Tile";
import Code from "./Code";
import { H1, H2, H3, H4, H5 } from "./Headers";
import { P, UL, OL, LI, Table, THead, TBody, TR, TH, TD, Video } from "./Tags";
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
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  pre: Pre,
  ul: UL,
  ol: OL,
  li: LI,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  th: TH,
  td: TD,
  video: Video,
  Admonition,
  Tabs,
  TabItem,
  Tile,
  TileSet,
  TileList,
  TileListItem,
  TileImage,
  Figure,
  Notice,
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
    <Box color="text" lineHeight="26px">
      <MDXProvider components={fullComponents}>{children}</MDXProvider>
    </Box>
  );
};

export default MDX;
