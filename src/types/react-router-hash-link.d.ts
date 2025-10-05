// src/react-router-hash-link.d.ts
declare module "react-router-hash-link" {
  import { LinkProps } from "react-router-dom";
  import { ForwardRefExoticComponent, RefAttributes } from "react";

  export const HashLink: ForwardRefExoticComponent<
    LinkProps & { smooth?: boolean } & RefAttributes<HTMLAnchorElement>
  >;
}
