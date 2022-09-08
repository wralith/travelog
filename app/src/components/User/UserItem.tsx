import { Link } from 'react-router-dom'
import { User } from '../../types/User'
import Avatar from '../Shared/UI/Avatar'
import Card from '../Shared/UI/Card'

interface Props {
  user: User
}

function UserItem({ user }: Props) {
  return (
    <li>
      <Link to={`/users/${user.id}/places`}>
        <Card>
          <>
            <Avatar image={user.image} alt={user.name + '-image'} className="w-20" />
            <div className="flex flex-col">
              <h2 className="text-3xl text-primary">{user.name}</h2>
              <h3 className="text-lg font-bold">
                {user.placeCount} {user.placeCount == 1 ? 'Place' : 'Places'}
              </h3>
            </div>
          </>
        </Card>
      </Link>
    </li>
  )
}

export default UserItem
