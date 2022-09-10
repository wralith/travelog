import UserList from '../../components/User/UserList'

export function Users() {
  const users: User[] = [
    { id: '1', name: 'Wra', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '2', name: 'Lith', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '3', name: 'Norman', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '4', name: 'Page', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '5', name: 'Billy Jean', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '6', name: 'Michael', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '7', name: 'Amy', image: 'https://placeimg.com/192/192/people', placeCount: 2 },
    { id: '8', name: 'Derek', image: 'https://placeimg.com/192/192/people', placeCount: 2 }
  ]

  return (
    <div className='flex items-center justify-center p-5'>
      <UserList users={users} />
    </div>
  )
}
