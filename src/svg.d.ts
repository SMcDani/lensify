//necessary so ts knows how to handle svg imports

declare module "*.svg" {
  const src: string;
  export default src;
}
