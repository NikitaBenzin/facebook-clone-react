import './NavigationBar.css'

export const NavigationBar = () => {


  return (
    <nav className='headerNav'>
      <ul>
        <li className="hnItem activeMenu">
          <span class="material-symbols-outlined">
            home
          </span>
        </li>
        <li className="hnItem">
          <span class="material-symbols-outlined">
            group
          </span>
        </li>
        <li className="hnItem">
          <span class="material-symbols-outlined">
            live_tv
          </span>
        </li>
        <li className="hnItem">
          <span class="material-symbols-outlined">
            store
          </span>
        </li>
        <li className="hnItem">
          <span class="material-symbols-outlined">
            groups
          </span>
        </li>
      </ul>
    </nav>
  )
}
