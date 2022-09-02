import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'

import { Tabs, Tab, IconButton } from 'ui-app'

import { Section } from 'components'
import routes from 'utils/routes'

import * as S from './styles'

const tabs = Object.values(routes).filter((route) => route.showMenu)

type LayoutProps = {
  children: ReactNode
  title?: string
  header?: ReactNode
  backButton?: () => void
}

const Layout = ({
  children,
  title,
  header,
  backButton,
  ...props
}: LayoutProps) => {
  const router = useRouter()
  const pathList = tabs.map((tab) => tab.path)

  const activeTab = (() =>
    pathList.findIndex((path) => {
      const basePath = path.split('/')[1]
      const baseActive = router.pathname.split('/')[1]

      return !baseActive || basePath === baseActive
    }))()

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

      <header>
        {
          <S.LogoHeader>
            {backButton && (
              <IconButton onClick={backButton}>
                <FiArrowLeftCircle />
              </IconButton>
            )}

            <Image src="/icon.svg" alt="Logo" width={32} height={32} />

            <h1>{header || titleBase}</h1>
          </S.LogoHeader>
        }
      </header>

      {sectionChildren}

      <main>{bodyChildren}</main>

      <nav>
        <Tabs
          active={activeTab}
          onChange={(index) => router.push(pathList[index])}
        >
          {tabs.map((tab) => (
            <Tab key={tab.path}>
              <S.TabLink>{tab.name}</S.TabLink>
            </Tab>
          ))}
        </Tabs>
      </nav>
    </S.Container>
  )
}

export default Layout
