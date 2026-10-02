import { useEffect, useState } from 'react'
import followingService from '../../../services/following'
import './Following.css'
import type User from '../../../models/user/User'
import Follow from '../follow/Follow'
import Spinner from '../../common/spinner/Spinner'

export default function Following() {
  const [following, setFollowing] = useState<User[]>([])

  useEffect(() => {
    (async () => {
      try {
        const following = await followingService.getFollowing()
        setFollowing(following)
      } catch (e) {
        alert(e)
      }
    })()
  }, [])

  async function unfollow(id: string) {
    setFollowing(following.filter(user => user.id !== id))
  }

  return (
    <div className="Following">
      {following.length === 0 && <Spinner />}
      {following.length > 0 &&
        following.map(user => (
          <Follow
            key={user.id}
            user={user}
            isAllowedAction={true}
            unfollow={unfollow}
          />
        ))}
    </div>
  )
}
