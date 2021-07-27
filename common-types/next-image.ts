interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
}

interface StaticRequire {
  default: StaticImageData;
}

export type NextImageType = StaticRequire | StaticImageData;
