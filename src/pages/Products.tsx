import react from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import Product from '../components/Product'

export interface ProductType {
  id: number
  name: string
  desctiption: string
  status: 'Available' | 'Out of Stock'
}

const Products: react.FC = () => {
  const productData: ProductType[] = [
    {
      id: 1,
      name: 'Nike',
      desctiption:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores aut nesciunt enim dolorem veritatis itaque asperiores repellendus quidem necessitatibus.',
      status: 'Available',
    },
    {
      id: 2,
      name: 'Flip Flops',
      desctiption:
        'Lorem, ipsum Tempore dolores aut nesciunt enim dolorem veritatis itaque asperiores repellendus quidem necessitatibus.',
      status: 'Out of Stock',
    },
    {
      id: 3,
      name: 'Adidas',
      desctiption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ',
      status: 'Available',
    },
    {
      id: 4,
      name: 'Adidas sneaker',
      desctiption:
        'Lorem, ipsum dolor sit amet consectetur demo test adipisicing elit. ',
      status: 'Out of Stock',
    },
  ]

  const { url, path } = useRouteMatch()

  const linkList = productData.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    )
  })

  return (
    <div>
      {/* /products - display a list of product */}
      {/* /products/:productId */}

      <div>
        <h3>Products</h3>
        <ul>{linkList}</ul>
      </div>

      <Route path={`${path}/:productId`}>
        <Product data={productData} />
      </Route>
      <Route exact path={path}>
        <p>Please select a product.</p>
      </Route>
    </div>
  )
}

export default Products
