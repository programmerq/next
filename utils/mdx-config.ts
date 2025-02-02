import { PluggableList } from "unified";
import rehypeFixTags from "./rehype-fix-tags";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from "remark-frontmatter";
import remarkImportFrontmatter from "./remark-import-frontmatter";
import remarkCopyLinkedFiles from "remark-copy-linked-files";
import { staticPath, destinationDir } from "./mdx-paths";

const DEFAULT_RENDERER = `
/** @jsxRuntime classic */

import { mdx } from "@mdx-js/react";
import { SitePage } from "components";

const Wrapper = (props) => (
  <SitePage meta={meta}>
    <MDXContent ssData={props} />
  </SitePage>
);

export default Wrapper;
`;

interface MdxConfig {
  rehypePlugins: PluggableList;
  remarkPlugins: PluggableList;
  renderer: string;
  skipExport?: boolean;
}

const config: MdxConfig = {
  remarkPlugins: [
    remarkFrontmatter,
    remarkImportFrontmatter,
    [
      remarkCopyLinkedFiles,
      {
        destinationDir,
        staticPath,
        ignoreFileExtensions: [".md", ".mdx"],
      },
    ],
  ],
  rehypePlugins: [rehypeFixTags, rehypeHighlight],
  skipExport: true,
  renderer: DEFAULT_RENDERER,
};

export default config;
