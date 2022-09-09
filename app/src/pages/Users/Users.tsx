import UserList from '../../components/User/UserList'

export function Users() {
  const users: User[] = [
    { id: '1', name: 'Wra', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '2', name: 'Lith', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '3', name: 'Norman', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '4', name: 'Derek', image: 'https://placeimg.com/192/192/people', placeCount: 2 }
  ]

  return <UserList users={users} />
}
