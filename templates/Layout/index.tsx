import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'

import { Tabs, Tab } from 'ui-app'

import { Section } from 'components'
import routes from 'utils/routes'

import * as S from './styles'

const tabs = Object.values(routes)

type LayoutProps = {
  children: ReactNode
  title?: string
  header?: ReactNode
}

const Layout = ({ children, title, header, ...props }: LayoutProps) => {
  const router = useRouter()
  const [pathActive, setPathActive] = useState(router.pathname)
  const pathList = tabs.map((tab) => tab.path)

  const handleTab = (tabIndex: number) => {
    setPathActive(pathList[tabIndex])
  }

  const titleBase = 'Biblioteca Digital'
  let titleName = titleBase
  if (title) {
    titleName = `${titleBase} - ${title}`
  }

  const sectionChildren: ReactNode[] = []
  const bodyChildren: ReactNode[] = []

  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Section) {
        sectionChildren.push(child)
      } else {
        bodyChildren.push(child)
      }
    }
  })

  return (
    <S.Container {...props} hasSection={sectionChildren.length > 0}>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="Biblioteca Ruy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>{<h1>{header || titleBase}</h1>}</header>

      {sectionChildren}

      <main>{bodyChildren}</main>

      <nav>
        <Tabs
          active={pathList.findIndex((path) => path === pathActive)}
          onChange={handleTab}
        >
          {tabs.map((tab) => (
            <Tab key={tab.path}>
              <Link href={tab.path} passHref>
                <S.TabLink>{tab.name}</S.TabLink>
              </Link>
            </Tab>
          ))}
        </Tabs>
      </nav>
    </S.Container>
  )
}

export default Layout
