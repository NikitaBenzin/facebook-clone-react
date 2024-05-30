import postImg from '../../../../assets/postImg.jpg'
import profileImg from '../../../../assets/profile.jpg'
import './Post.css'

export const Post = () => {
  return (
    <div className="post">
      <header className='postHeader'>
        <div className="profile">
          <img src={profileImg} alt="User Profile" className="profileImg" />
          <div className="profileInfo">
            <div className="profileName">
              <h4>Mykyta Benzin</h4>
              <a className='link' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Подписаться</a>
            </div>
            <div className="postDate">
              <span className="postInfo cursor-pointer hover:underline">4 д.</span>
              <span class="material-symbols-outlined">
                public
              </span>
            </div>
          </div>
        </div>
        <div className="postMenu">
          <span class="material-symbols-outlined">
            more_horiz
          </span>
          <span class="material-symbols-outlined">
            close
          </span>
        </div>
      </header>

      <div className="postDescription">
        <p>How old do you think Arnold is here?</p>
        <span className="hashtags link">#arnoldschwarzenegger</span>
      </div>

      <img className="postImg" src={postImg} alt="Post" />

      <footer className="postFooter">
        <div className="postRating">
          <div className="postRatingLikes">
            <span class="material-symbols-outlined text-blue-500">
              thumb_up
            </span>
            <span className="postInfo cursor-pointer hover:underline">1,3 тыс.</span>
          </div>
          <div className="postShares">
            <span className="postInfo cursor-pointer hover:underline">209 комментариев</span>
            <span className="postInfo cursor-pointer hover:underline">Поделились: 26</span>
          </div>
        </div>
        <div className="postInteraction">
          <div className="interactionOption">
            <span class="material-symbols-outlined">
              thumb_up
            </span>
            <span className="postInfo">Нравится</span>
          </div>
          <div className="interactionOption">
            <span class="material-symbols-outlined">
              mode_comment
            </span>
            <span className="postInfo">Комментировать</span>
          </div>
          <div className="interactionOption">
            <span class="material-symbols-outlined">
              share
            </span>
            <span className="postInfo">Поделиться</span>
          </div>
        </div>
      </footer>
    </div>

  )
}
