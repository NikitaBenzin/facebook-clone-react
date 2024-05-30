
import { AddContent } from './AddContent/AddContent'
import './Feed.css'
import { Post } from './Post/Post'
import { Stories } from './Stories/Stories'

export const Feed = () => {
  return (
    <section className="feed">
      <Stories />
      <AddContent />
      <Post />
    </section>
  )
}

