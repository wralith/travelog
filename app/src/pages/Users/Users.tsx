import { useQuery } from '@tanstack/react-query'
import UserList from '../../components/User/UserList'
import { api } from '../../utils/api'

export function Users() {
  const { isLoading, error, data } = useQuery(['users'], () => api.get('/users').then((res) => res.data))

  return (
    <div className="flex items-center justify-center p-5">
      {data && <UserList users={data as User[]} />}
      {isLoading && 'Loading'}
      {error && 'Error'}
    </div>
  )
}
