import React from 'react'

type MainProps = {
  children: React.ReactNode
}

export function Main(props: MainProps) {
  return <main className="bg-slate-300 p-2">{props.children}</main>
}
