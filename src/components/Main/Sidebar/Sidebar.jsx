import { useState } from 'react'
import profileImg from '../../../assets/profile.jpg'
import './Sidebar.css'

export const Sidebar = () => {
  const [isBurger, setIsBurger] = useState(false)



  return (
    <section className='sidebar'>
      <div className='burgerMenuLayout'>
        <span id='burgerMenu' class="material-symbols-outlined" onClick={() => setIsBurger(!isBurger)}>
          menu
        </span>
      </div>
      <div className={isBurger ? "sidebarNav open" : "sidebarNav"}>
        <ul>
          <li className="sidebarItem profileImgLayout">
            <img className='profileImg' src={profileImg} alt="User Profile" />
            <h4>Mykyta Benzin</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              group
            </span>
            <h4>Друзья</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              history
            </span>
            <h4>Воспоминания</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              bookmark
            </span>
            <h4>Сохраненное</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              groups
            </span>
            <h4>Группы</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              live_tv
            </span>
            <h4>Видео</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              store
            </span>
            <h4>Marketplace</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              feed
            </span>
            <h4>Ленты</h4>
          </li>
          <li className="sidebarItem">
            <span class="material-symbols-outlined">
              event
            </span>
            <h4>Мероприятия</h4>
          </li>
          <li id='showMore' className="sidebarItem">
            <span class="material-symbols-outlined">
              keyboard_arrow_down
            </span>
            <h4>Показать больше</h4>
          </li>
        </ul>
      </div>
    </section>
  )
}

