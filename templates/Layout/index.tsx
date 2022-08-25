import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode, useState } from 'react'

import { Tabs, Tab } from 'ui-app'

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

  const titleName = title ? `Biblioteca - ${title}` : 'Biblioteca'

  return (
    <S.Container {...props}>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="Biblioteca Ruy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>{<h1>{header || 'Biblioteca'}</h1>}</header>

      <main>{children}</main>

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
