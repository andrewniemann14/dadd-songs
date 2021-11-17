// https://www.google.com/search?q=react+accordion

import {topics} from '../data/topics'

const Category = () => {
  return (
    <div>
      <h1 className="text-6xl">{topics[0].category}</h1>
    </div>
  )
}

export default Category
