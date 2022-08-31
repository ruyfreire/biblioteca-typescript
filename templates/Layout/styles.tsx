import styled, { css } from 'styled-components'

type ContainerProps = {
  hasSection?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, hasSection }) => css`
    --footer-height: 72px;
    --head-height: 64px;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 100vh;
    background-color: ${theme.colors.background.section};

    ${hasSection
      ? css`
          grid-template-rows: 64px min-content 1fr var(--footer-height);
          grid-template-areas:
            'head'
            'section'
            'main'
            'footer';
        `
      : css`
          grid-template-rows: 64px 1fr;
          grid-template-areas:
            'head'
            'main'
            'footer';
        `}

    header {
      grid-area: head;
      z-index: 10;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background-color: ${theme.colors.background.primary};
      padding: 8px 16px;
      height: var(--head-height);
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
      z-index: 10;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--footer-height);
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

export const LogoHeader = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  padding: 8px 0;
  gap: 8px;
`
