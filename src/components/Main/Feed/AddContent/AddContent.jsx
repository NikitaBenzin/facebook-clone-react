import profileImg from '../../../../assets/profile.jpg'
import './AddContent.css'

export const AddContent = () => {
  return (
    <section className="addContent">
      <section className="contentDescription">
        <img src={profileImg} alt="User profile" className="profileImg size-10" />
        <input id='contentDescriptionInput' type="text" placeholder='Что у вас нового, Mykyta?' />
      </section>
      <section className="addMedia">
        <ul>
          <li className='mediaItem'>
            <span class="material-symbols-outlined text-red-500">
              video_call
            </span>
            <h5 className='text-zinc-200'>Прямой эфир</h5>
          </li>
          <li className='mediaItem'>
            <span class="material-symbols-outlined text-green-500">
              photo_library
            </span>
            <h5 className='text-zinc-200'>Фото/видео</h5>
          </li>
          <li className='mediaItem'>
            <span class="material-symbols-outlined text-yellow-500">
              sentiment_very_satisfied
            </span>
            <h5 className='text-zinc-200'>Чувства/действия</h5>
          </li>
        </ul>
      </section>
    </section>
  )
}
