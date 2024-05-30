import profileImg from '../../../assets/profile.jpg'

export const RightSideBar = () => {
  return (
    <section className="sidebar">
      <header className='ml-4 mr-4 flex items-center'>
        <h3 className='text-zinc-300 font-semibold w-2/3'>Контакты</h3>
        <span class="material-symbols-outlined w-1/6 flex justify-end">
          search
        </span>
        <span class="material-symbols-outlined w-1/6 flex justify-end">
          more_horiz
        </span>
      </header>

      <ul className="sidebarNav">
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>
        <li className="sidebarItem">
          <img className='profileImg' src={profileImg} alt="User Profile" />
          <h4>Mykyta Benzin</h4>
        </li>

      </ul>
    </section>
  )
}
