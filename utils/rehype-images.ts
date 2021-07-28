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
          node.properties.placeholder = "blur";
          node.properties.blurDataURL =
            "data:image/png;base64,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";
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
