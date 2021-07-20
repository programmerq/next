declare module "*.svg" {
  export const ReactComponent: React.StatelessComponent<
    React.SVGAttributes<SVGElement>
  >;

  export default string;
}

declare module "*.png" {
  const value: {
    src: string;
    weight: number;
    height: number;
    blurDataURL: string;
  };
  export default value;
}

declare module "*.jpg" {
  const value: {
    src: string;
    weight: number;
    height: number;
    blurDataURL: string;
  };
  export default value;
}

declare module "*.md" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}

declare module "md-import-mapping" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;

  export default value;
}

declare module "*.yaml" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: { [key: string]: any };
  export default content;
}
