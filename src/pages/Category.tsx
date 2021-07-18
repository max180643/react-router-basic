import react from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'

const Category: react.FC = () => {
  const { url, path } = useRouteMatch()
  // url - (string) The matched portion of the URL. Useful for building nested <Link>
  // path - (string) The path pattern used to match. Useful for building nested <Route>

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwears`}>Footwears</Link>
        </li>
      </ul>

      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  )
}

interface ParamTypes {
  name: string
}

const Item: react.FC = () => {
  const { name } = useParams<ParamTypes>()

  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

export default Category
