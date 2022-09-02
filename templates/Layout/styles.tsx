import styled, { css } from 'styled-components'

type ContainerProps = {
  hasSection?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, hasSection }) => css`
    --footer-height: 72px;
    --head-height: 64px;
    background-color: ${theme.colors.background.section};
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;

    ${hasSection
      ? css`
          grid-template-areas:
            'head'
            'section'
            'main'
            'footer';
          grid-template-rows: 64px min-content 1fr var(--footer-height);
        `
      : css`
          grid-template-areas:
            'head'
            'main'
            'footer';
          grid-template-rows: 64px 1fr var(--footer-height);
        `}

    header {
      align-items: center;
      background-color: ${theme.colors.background.primary};
      display: flex;
      grid-area: head;
      height: var(--head-height);
      left: 0;
      padding: 8px 16px;
      position: fixed;
      right: 0;
      top: 0;
      z-index: 10;
    }

    main {
      grid-area: main;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      max-width: 600px;
      padding: 16px;
      width: 100%;
    }

    nav {
      background-color: ${theme.colors.background.primary};
      bottom: 0;
      grid-area: footer;
      height: var(--footer-height);
      left: 0;
      padding: 8px 16px;
      position: fixed;
      right: 0;
      z-index: 10;
    }
  `}
`

export const TabLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  font: inherit;
  height: 100%;
  justify-content: center;
  width: 100%;

  &,
  :active,
  :visited {
    text-decoration: none;
  }
`

export const LogoHeader = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 8px 0;
  text-decoration: none;
`
