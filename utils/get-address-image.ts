interface IPath {
  src: string;
}

export default function getAddressImage(path: string | IPath): string {
  if (typeof path === "string") {
    return path;
  }

  return path.src;
}
