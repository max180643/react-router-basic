import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      {/* <Switch> */}
      <Route path="/" exact component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
      {/* </Switch> */}
    </div>
  )
}

export default App
