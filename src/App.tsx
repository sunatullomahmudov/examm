import { useSelector } from 'react-redux'
import type { RootState } from './store/store'

const App = () => {
  const data = useSelector((state: RootState) => state.data.data)

  return (
    <div>
        {data.map((user) => (
          <div key={user.id}>
            <img src={user.image} alt={user.name} width="100" />
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Status: {user.status ? 'Active' : 'Inactive'}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
    </div>
  )
}

export default App
