import css from "@styled-system/css";
import { Children, cloneElement, useMemo } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import Box from "components/Box";
import Flex from "components/Flex";

type AlignValue = "left" | "center" | "right";

const getAlignItems = (align?: AlignValue) => {
  switch (align) {
    case "right":
      return "flex-end";
    case "left":
      return "flex-start";
    default:
      return align;
  }
};

interface SharedProps {
  align?: AlignValue;
  bordered?: boolean;
  caption?: string;
}

export type ImageProps = SharedProps & NextImageProps;

const placeholderImage = {
  placeholder: "blur",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABOCAMAAADCUBLjAAABPGlDQ1BpY2MAACjPY2BgEkksKMhhYWBgyM0rKQpyd1KIiIxSYH/KwM4gw8DPoMYglphcXOAYEOADVMIAo1HBt2sMjCD6si7ILPVHhZkrwn/J3fQoDHb9FV7DgB9wpaQWJwPpP0CcnlxQVMLAwJgCZCuXlxSA2B1AtkgR0FFA9hwQOx3C3gBiJ0HYR8BqQoKcgewbQLZAckYi0AzGF0C2ThKSeDoSG2ovCPC6uPr4KAQbmRtauvgyUBmUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRgZMjCAwhyi+vMNcFgyinEgxAqDGBjM7wMFHRBiCTkMDPs3Ap0uhxBTFWdg4ChgYDhyriCxKBHuAMZvLMVpxkYQNvd2BgbWaf//fw5nYGDXZGD4e/3//9/b////u4yBgfkWA8OBbwCEeV+lnmMtSwAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEX////l4vVuYctCOrtjVsbY1PG/ueickdt4bM/y8ftYTMOont9NQr6Rhde0rOR5bc/MxuyFedJtYMqEeNK0q+RMQr5iVsbAuujNx+1XS8OQhNbCzIB8AAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UHHAw4Es+OIHEAAAF/elRYdFJhdyBwcm9maWxlIHR5cGUgaWNjAAA4y6VTWa7dIAz9ZxVdgmfDchIGqfvfQA0kV7l971ateqQocAz28UD6WWv6MaFMCSYIxdDBwSrIYsCadRcnJXEhAs1a9CAA7xpmB8Aa/xGXLdaWDI2dHQQVFKTChd/3f8KIqFMR3kRjarcy8k6OVo6sPg7srUh2VBYdh7p/CZD+JuIDh4mps/Gl5XJoniIxcPJdGbSrQsTuUSG4+Zw3j7Nqq1p7W+rNJ/On4YTbYG8XqjwcSTRgK8J2B4BQZNluJdgvA1X7cCECf3D0lvMLTURUqtRoPHNkysgluPapeP9a7I/4b0c+M8ouL0fCNqJLxcmKuYWJYij3TJnGulg3pk6RbKQ6vzV/98S/KRq8incPKKJBfj2NpwrURbC3cTUT0ncHbb65wDnO7bRh/+4caUieyL4VRXN6pICRFsJX4DCQ6Kxx9O/Jw3luR1osjQnWTTiVlWJrvvg4uP7tsGXntga0xjNNvwDnAuPIYQvKFgAAAAFvck5UAc+id5oAAAJ7SURBVGje7ZbdGqIgEIb5ERGzUjQL7/9Cl5kBxfKgrWfbk/lOSoR5B/gGFILFYrFYLBaLxWKx/q+k0lpX5tfYWoPsr7EWsc2Pqa5CbCvf6y6t/XJhXFudpO100llerp0sVyCpLwf1seE77EBRfe3iBo/0UP0b7KRUGUDrW50ezQ2fJ+rmo+At/O5M/hm22gY1iNliSuS2W19YiZcAH2FdMWh+rpsJZ+8OsZezOl922PtZDdRirRGXQVkaKU/x7x3/WVuLfrjKB2yntbSQDlbRCZ+3UIig9bxRC6xpaePdijXJ/wZ9oBQ+wNjkCjh+YtcWptInQJ5DA/8K7KJDQd2wMro9NDMajrAu5hFGakFQiCnrkR5uM+UAXaFORAMvvV9SXJvW2Kbwdr+XKza6fBaYYJ+wMTpk2IAFLRkRrOIkwQ1uH85ytCdKZotr9fIWNqZ8fjxgh2zCxskOuSXFhBc9rKkku1bYckqBS+z1CbfQ9rxgtxLO2K3F55jg1jrHx99+rfkS6xRaqsC25Joj7AwF7Jt+wwZs8X2OKd/EVmsBJSwWUHdQQKEoNMJG02SD5Jh1ucjohmPs83Fh8HQOx5bqDNRhLTZLdTGiO9UU08GO6RtOeSgt9YqlcurqHTUdjnusg/MLa9PkAgq5pcaYnWrJPwvUjqJjZ8PCIrR5hun0V/eY6z3dC/ORpYQJyT9uPS7mtWW9NkayJSoYUWAxy3zNuDDHi++WRy1yam7lrWvzeQb5NrHcIcZ6305jagFsP4LdUNJ6P04idU3x3OK93d3ojvIOb17zr9oX5V8N++aj5kPst59wH2IlXAbzzz9YWSwWi8VisVgsFut3+gNilh5QG7mRXwAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAAAwqADAAQAAAABAAAATgAAAABBU0NJSQAAAFNjcmVlbnNob3QjrKytAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA3LTI4VDEyOjU1OjUxKzAwOjAwch+wGgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNy0yOFQxMjo1NTo1MSswMDowMANCCKYAAAASdEVYdGV4aWY6RXhpZk9mZnNldAAyNlMbomUAAAAYdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADE5NJCdPz0AAAAXdEVYdGV4aWY6UGl4ZWxZRGltZW5zaW9uADc40YOSiAAAAFx0RVh0ZXhpZjpVc2VyQ29tbWVudAA2NSwgODMsIDY3LCA3MywgNzMsIDAsIDAsIDAsIDgzLCA5OSwgMTE0LCAxMDEsIDEwMSwgMTEwLCAxMTUsIDEwNCwgMTExLCAxMTZAuB9yAAAAKHRFWHRpY2M6Y29weXJpZ2h0AENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIxfb3uJgAAABx0RVh0aWNjOmRlc2NyaXB0aW9uAERFTEwgUzI3MTlETWyFkS0AAAAASUVORK5CYII=",
} as Record<string, string>;

export const Image = ({ align, bordered, caption, ...props }: ImageProps) => {
  const imageProps = useMemo((): NextImageProps => {
    return {
      ...placeholderImage,
      ...props,
      layout: "intrinsic",
      sizes: "(min-width: 1460px) 900px, 100vw",
      width: props.width ? parseFloat(props.width as string) : "auto",
      height: props.height ? parseFloat(props.height as string) : "auto",
    };
  }, [props]);

  return (
    <Flex
      as="figure"
      my={3}
      flexDirection="column"
      alignItems={getAlignItems(align)}
      css={css({
        "&:fisrt-child": {
          mt: 0,
        },
        "&:last-child": {
          mb: 0,
        },
      })}
    >
      {bordered ? (
        <Box as="span" boxShadow="0 1px 4px rgba(0, 0, 0, 0.24)">
          <NextImage {...imageProps} />
        </Box>
      ) : (
        <NextImage {...imageProps} />
      )}
      {caption && (
        <Box as="figcaption" mt="2" color="gray" fontStyle="italic">
          {caption}
        </Box>
      )}
    </Flex>
  );
};

Image.defaultProps = {
  align: "left",
};

type ImageComponent = React.ReactElement<typeof Image>;

export type FigureProps = ImageProps & {
  children: ImageComponent;
};

export const Figure = ({ children, ...rest }: FigureProps) => {
  const image = Children.only<ImageComponent>(children);

  return cloneElement(image, rest);
};
