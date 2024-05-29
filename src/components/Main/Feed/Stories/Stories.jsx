import profileImg from '../../../../assets/profile.jpg'
import storiesImg from '../../../../assets/stories.jpg'
import './Stories.css'

export const Stories = () => {
  return (
    <section className="stories">
      <ul>
        <li id='createStories' className='storiesItem'>
          <img className='storiesPreview' src={profileImg} alt="Stories preview" />
          <div className='addStories index1'>
            <button id='addStoriesBtn'>
              <span class="material-symbols-outlined">
                add
              </span>
            </button>
            <h4 className='index1'>Создать историю</h4>
          </div>
        </li>

        <li className="storiesItem">
          <img className='storiesPreview' src={storiesImg} alt="Stories preview" />
          <div className='storiesProfileLayout index1'>
            <img src={profileImg} alt="User profile" className="profileImg" />
          </div>
          <h4 className='index1'>Mykyta Benzin</h4>
        </li>
        <li className="storiesItem">
          <img className='storiesPreview' src={storiesImg} alt="Stories preview" />
          <div className='storiesProfileLayout index1'>
            <img src={profileImg} alt="User profile" className="profileImg" />
          </div>
          <h4 className='index1'>Mykyta Benzin</h4>
        </li>
      </ul>
    </section>
  )
}

