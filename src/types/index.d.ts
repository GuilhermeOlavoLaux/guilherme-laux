declare module "*.module.css";

declare module "react/jsx-runtime" {
  const content: string;
  export default content;
}
