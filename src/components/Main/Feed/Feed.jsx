
import { AddContent } from './AddContent/AddContent'
import './Feed.css'
import { Stories } from './Stories/Stories'

export const Feed = () => {
  return (
    <section className="feed">
      <Stories />
      <AddContent />

    </section>
  )
}

