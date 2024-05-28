import logo from '../../assets/logo.png'
import './Header.css'
import { NavigationBar } from './NavigationBar/NavigationBar'
import { ProfileSection } from './ProfileSeaction/ProfileSection'
import { SearchBar } from './SerachBar/SearchBar'

export const Header = () => {
  return (
    <header className="AppHeader">
      <img src={logo} alt="Facebook logo" />
      <SearchBar />
      <NavigationBar />
      <ProfileSection />
    </header>
  )
}

