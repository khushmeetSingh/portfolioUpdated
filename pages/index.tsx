import BannerMain from './landing-page'
import DrawerMenu from './landing-page/drawer-menu'
import GlobalStyle from './landing-page/global-style'

export default function Home() {
  return (<>
  <GlobalStyle/>
    {/* <BannerMain /> */}
    <DrawerMenu></DrawerMenu>
    </>
  )
}
