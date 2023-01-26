import Link from "next/link";
import React from "react";

const aside = [
  {
    path: "/",
    name: "Início",
    icon: null,
  },
  {
    path: "/autores",
    name: "Autores",
    icon: null,
  },
  {
    path: "/livros",
    name: "Livros",
    icon: null,
  },
];

export function Aside() {
  return (
    <aside className="col-span-3 bg-cyan-800">
      <ul>
        {aside.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
