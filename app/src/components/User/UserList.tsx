import { User } from '../../types/User'
import UserItem from './UserItem'

interface Props {
  users: User[]
}

function UserList({ users }: Props) {
  return users.length === 0 ? (
    <div>
      <h2>No Users Found</h2>
    </div>
  ) : (
    <ul className="flex flex-col gap-3 w-fit">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UserList
