import { useState } from 'react'
import Categories from './components/Categories'
import GifsExpo from './components/GifsExpo'
import DeleteCategoriesList from './components/Categories/DeleteCategoriesList'

function App() {
  const [categories, setCategories] = useState(["Robotech","Mazinger Z"])

  return (
    <div className='m-5'>
      <h3>Gif Demo App</h3>
      <hr/>
      <Categories 
        categories={categories}
        setCategories={setCategories}
      />
      {
        categories.length === 0 && (
          <div>
          <h3 className="text-danger">The list is empty...</h3>
          Add a category to search for gifs.
          </div>
        )
      }
      <hr/>
      <GifsExpo categories={categories}/>
    </div>
  )
}

export default App
