import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  const addToCart =(product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  // State for category filtering
  const [category, setCategory] = useState('all')

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
       darkMode={darkMode}
       setDarkMode={setDarkMode}
       />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
       value={category}
       onChange={(event) => setCategory(event.target.value)}
       >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
       category={category} 
       addToCart={addToCart}
       />

      <Cart cart={cart} />
    </div>
  )
}

export default App
