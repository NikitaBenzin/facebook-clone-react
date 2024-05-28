import profileImg from '../../../assets/profile.jpg'


export const ProfileSection = () => {
  return (
    <div className="profileSection">
      <ul>
        <li className="psItem">
          <span class="material-symbols-outlined">
            apps
          </span>
        </li>
        <li className="psItem">
          <span class="material-symbols-outlined">
            chat
          </span>
        </li>
        <li className="psItem">
          <span class="material-symbols-outlined">
            notifications
          </span>
        </li>
        <li className="psItem">
          <img src={profileImg} alt="User Profile" />
        </li>
      </ul>
    </div>
  )
}

