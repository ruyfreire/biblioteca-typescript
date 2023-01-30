import React from 'react'

import clsx from 'clsx'

import * as ScrollArea from '@radix-ui/react-scroll-area'

const Thumb = () => (
  <ScrollArea.Thumb className="relative flex-1 rounded bg-slate-500  before:absolute  before:top-1/2 before:left-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-[50%] before:-translate-y-[50%] before:content-['']" />
)

type ScrollbarProps = {
  children: React.ReactNode
  orientation: 'vertical' | 'horizontal'
}

const Scrollbar = (props: ScrollbarProps) => (
  <ScrollArea.Scrollbar
    className={
      'flex select-none bg-slate-200 p-0.5 transition-colors hover:bg-slate-300 ' +
      clsx({
        'w-2': props.orientation === 'vertical',
        'h-2': props.orientation === 'horizontal'
      })
    }
    orientation={props.orientation}
  >
    {props.children}
  </ScrollArea.Scrollbar>
)

type ChildrenGenericProps = {
  children: React.ReactNode
}

const THead = (
  props: ChildrenGenericProps & React.HTMLAttributes<HTMLTableSectionElement>
) => <thead {...props}>{props.children}</thead>

const TrTHread = (
  props: ChildrenGenericProps & React.HTMLAttributes<HTMLTableRowElement>
) => (
  <tr
    {...props}
    className="bg-gray-200 text-sm uppercase leading-normal text-gray-600"
  >
    {props.children}
  </tr>
)

const TBody = (
  props: ChildrenGenericProps & React.HTMLAttributes<HTMLTableSectionElement>
) => (
  <tbody {...props} className="text-sm font-light text-gray-600">
    {props.children}
  </tbody>
)

const TrTBody = (
  props: ChildrenGenericProps & React.HTMLAttributes<HTMLTableRowElement>
) => (
  <tr {...props} className="border-b border-gray-200 hover:bg-gray-100">
    {props.children}
  </tr>
)

const Th = (
  props: ChildrenGenericProps & React.HTMLAttributes<HTMLTableCellElement>
) => (
  <th {...props} className="py-3 px-6 text-left">
    <div className="flex items-center">
      <span>{props.children}</span>
    </div>
  </th>
)

const Td = (
  props: ChildrenGenericProps & React.HTMLAttributes<HTMLTableCellElement>
) => (
  <td {...props} className="py-3 px-6 text-left">
    <div className="flex items-center">
      <span>{props.children}</span>
    </div>
  </td>
)

type TableProps = {
  children: React.ReactNode
}

function Table(props: TableProps) {
  return (
    <ScrollArea.Root className="h-full overflow-hidden bg-white">
      <ScrollArea.Viewport className="h-full">
        <table className="w-full min-w-max">{props.children}</table>
      </ScrollArea.Viewport>

      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>

      <Scrollbar orientation="horizontal">
        <Thumb />
      </Scrollbar>

      <ScrollArea.Corner className="bg-slate-200" />
    </ScrollArea.Root>
  )
}

Table.THead = THead
Table.TBody = TBody
Table.TrTHead = TrTHread
Table.TrTBody = TrTBody
Table.Td = Td
Table.Th = Th

export { Table }
