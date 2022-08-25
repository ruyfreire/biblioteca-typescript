import styled, { css } from 'styled-components'

type ContainerProps = {
  hasSection?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, hasSection }) => css`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: 1fr;
    ${hasSection
      ? css`
          grid-template-areas:
            'head'
            'section'
            'main'
            'footer';
        `
      : css`
          grid-template-areas:
            'head'
            'main'
            'footer';
        `}
    min-height: 100vh;
    background-color: ${theme.colors.background.section};

    header {
      grid-area: head;
      background-color: ${theme.colors.background.primary};
      padding: 8px 16px;
      height: 64px;
      display: flex;
      align-items: center;
    }

    main {
      grid-area: main;
      padding: 16px;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    nav {
      grid-area: footer;
      background-color: ${theme.colors.background.primary};
      padding: 8px 16px;
    }
  `}
`

export const TabLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: inherit;
  color: inherit;

  &,
  :active,
  :visited {
    text-decoration: none;
  }
`
