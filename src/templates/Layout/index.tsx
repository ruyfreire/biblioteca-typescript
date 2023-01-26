import { ReactNode } from "react";
import { Aside } from "../Aside";
import { Main } from "../Main";

type LayoutProps = {
  children: ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <div className="grid h-screen grid-cols-12 grid-rows-1">
      <Aside />

      <Main>{props.children}</Main>
    </div>
  );
}
