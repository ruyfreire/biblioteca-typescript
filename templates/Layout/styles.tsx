import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: 1fr;
    grid-template-areas:
      'head'
      'main'
      'footer';
    min-height: 100vh;
    background-color: ${theme.colors.background.section};

    header {
      grid-area: head;
      background-color: ${theme.colors.background.primary};
      padding: 8px 16px;
    }

    main {
      grid-area: main;
      padding: 8px;
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
