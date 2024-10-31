import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

const users = [
  {
    name: 'Arianna',
    userName: 'aryclement',
    isFollowing: true
  },
  {
    name: 'Adrian',
    userName: 'deycov',
    isFollowing: false
  },
  {
    name: 'Maria',
    userName: 'midudev',
    isFollowing: true
  }
]

export function App() {


  return (
    <>
      <section className="App">
        {
          users.map(({ name, userName, isFollowing }) => (
            <XFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </XFollowCard>
          ))
        }
      </section>
    </>
  )
}
