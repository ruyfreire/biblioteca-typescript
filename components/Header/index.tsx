import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { FiArrowLeftCircle } from 'react-icons/fi'

import { IconButton } from 'ui-app'

import * as S from './styles'

export type LayoutProps = {
  header?: string
  title?: string
  backButton?: () => void
}

const Header = ({ header, title, backButton, ...props }: LayoutProps) => {
  const titleBase = 'Biblioteca Digital'
  let titleName = titleBase
  if (title) {
    titleName = `${titleBase} - ${title}`
  }

  return (
    <>
      <Head>
        <title>{titleName}</title>
        <meta name="description" content="Biblioteca Ruy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header {...props} className="header">
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
    </>
  )
}

export default Header
