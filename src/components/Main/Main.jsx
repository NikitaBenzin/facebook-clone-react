
import { Feed } from './Feed/Feed'
import './Main.css'
import { Sidebar } from './Sidebar/Sidebar'

export const Main = () => {
  return (
    <main>
      <Sidebar />
      <Feed />
    </main>
  )
}
