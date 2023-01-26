import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export function Main(props: MainProps) {
  return <main className="col-span-9 bg-slate-300">{props.children}</main>;
}
