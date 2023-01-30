import React from 'react'

type MainProps = {
  children: React.ReactNode
}

export function Main(props: MainProps) {
  return <main className="flex bg-slate-300 p-6">{props.children}</main>
}
