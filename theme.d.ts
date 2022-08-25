import 'styled-components'
import { theme } from 'ui-app'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
