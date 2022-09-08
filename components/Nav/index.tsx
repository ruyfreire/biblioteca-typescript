import { useRouter } from 'next/router'

import { Tabs, Tab } from 'ui-app'

import routes from 'utils/routes'

const tabs = Object.values(routes).filter((route) => route.showMenu)
const pathList = tabs.map((tab) => tab.path)

const Nav = ({ ...props }) => {
  const router = useRouter()

  const activeTab = (() =>
    pathList.findIndex((path) => {
      const basePath = path.split('/')[1]
      const baseActive = router.pathname.split('/')[1]

      return !baseActive || basePath === baseActive
    }))()

  return (
    <nav {...props} className="nav">
      <Tabs
        active={activeTab}
        onChange={(index) => router.push(pathList[index])}
      >
        {tabs.map((tab) => (
          <Tab key={tab.path}>{tab.name}</Tab>
        ))}
      </Tabs>
    </nav>
  )
}

export default Nav
