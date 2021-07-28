import { existsSync, readFileSync } from "fs";
import probe from "probe-image-size";
import { Transformer } from "unified";
import { Element, Root } from "hast";
import visit from "unist-util-visit-parents";
import { RehypeNode } from "./unist-types";
import { isExternalLink, isHash } from "./url";

const isLocalImg = (node: RehypeNode): boolean =>
  node.type === "element" &&
  node.tagName === "img" &&
  typeof node.properties.src === "string" &&
  !isExternalLink(node.properties.src) &&
  !isHash(node.properties.src);

const isParagraphWithImageInside = (node: RehypeNode) =>
  node.type === "element" &&
  node.tagName === "p" &&
  node.children.some(isLocalImg);

const imgSizeRegExp = /@([0-9.]+)x/; // E.g. image@2x.png

const getScaleRatio = (src: string) => {
  if (imgSizeRegExp.test(src)) {
    const match = src.match(imgSizeRegExp);

    return parseFloat(match[1]);
  } else {
    return 1;
  }
};

interface RehypeImagesProps {
  destinationDir: string;
  staticPath: string;
}

interface ImageElement extends Element {
  properties: {
    src: string;
    width?: number;
    height?: number;
    placeholder?: string;
    blurDataURL?: string;
  };
}

export default function rehypeImages({
  destinationDir,
  staticPath,
}: RehypeImagesProps): Transformer {
  return (root: Root) => {
    visit<ImageElement>(root, [isLocalImg], (node) => {
      const src = node.properties.src.replace(staticPath, `${destinationDir}/`);

      if (existsSync(src)) {
        const file = readFileSync(src);

        try {
          const { width, height } = probe.sync(file);
          const scaleRatio = getScaleRatio(src);

          node.properties.width = width / scaleRatio;
          node.properties.height = height / scaleRatio;
        } catch {}
      }
    });

    /*
      We will use next/image on the client that will wrap image inside <div>,
      and placing <div> inside <p> will cause css bugs, so we remove this <p> here
    */

    visit<Element>(
      root,
      [isParagraphWithImageInside],
      (paragraphNode, ancestors) => {
        const parent = ancestors[ancestors.length - 1] as Element;
        const paragraphIndex = parent.children.indexOf(paragraphNode);

        if (paragraphNode.children.length === 1) {
          parent.children[paragraphIndex] = paragraphNode.children[0];
        } else {
          const newNodes = [];
          let currentParagraph: Element | undefined;

          paragraphNode.children.forEach((node, index) => {
            if (isLocalImg(node)) {
              if (currentParagraph) {
                newNodes.push(currentParagraph);
                currentParagraph = undefined;
              }

              newNodes.push(node);
            } else {
              if (!currentParagraph) {
                currentParagraph = {
                  type: "element",
                  tagName: "p",
                  children: [node],
                };
              } else {
                currentParagraph.children.push(node);
              }

              if (index === paragraphNode.children.length - 1) {
                newNodes.push(currentParagraph);
              }
            }
          });

          parent.children.splice(paragraphIndex, 1, ...newNodes);

          return [visit.SKIP, paragraphIndex + newNodes.length];
        }
      }
    );
  };
}
