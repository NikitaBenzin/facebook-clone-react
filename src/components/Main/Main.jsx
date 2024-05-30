
import { Feed } from './Feed/Feed'
import './Main.css'
import { RightSideBar } from './RightSideBar/RightSideBar'
import { Sidebar } from './Sidebar/Sidebar'

export const Main = () => {
  return (
    <main>
      <Sidebar />
      <Feed />
      <RightSideBar />
    </main>
  )
}
