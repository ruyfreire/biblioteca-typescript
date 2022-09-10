import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    --footer-height: 72px;
    --head-height: 64px;
    background-color: ${theme.colors.background.section};
    display: grid;
    grid-template-areas:
      'head'
      'main'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr var(--footer-height);
    min-height: 100vh;

    .header {
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

    .main {
      display: flex;
      flex-direction: column;
      grid-area: main;
      margin: 0 auto;
      max-width: 600px;
      padding: 16px;
      width: 100%;
    }

    .nav {
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
