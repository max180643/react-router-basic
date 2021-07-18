import react from 'react'
import { useParams } from 'react-router-dom'
import { ProductType } from '../pages/Products'

interface PropsType {
  data: ProductType[]
}

interface ParamTypes {
  productId: string
}

const Product: react.FC<PropsType> = ({ data }) => {
  const { productId } = useParams<ParamTypes>()
  const product = data.find((p) => p.id === Number(productId))

  let productData: react.ReactChild

  if (product) {
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.desctiption}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    )
  } else {
    productData = <h2>Sorry, Product doesn't exist.</h2>
  }

  return (
    <div>
      <div>{productData}</div>
    </div>
  )
}

export default Product
