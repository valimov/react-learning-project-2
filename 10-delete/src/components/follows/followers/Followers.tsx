import { useEffect, useState } from 'react'
import followersService from '../../../services/followers'
import './Followers.css'
import type User from '../../../models/user/User'
import Follow from '../follow/Follow'
import Spinner from '../../common/spinner/Spinner'

export default function Followers() {
  const [followers, setFollowers] = useState<User[]>([])

  useEffect(() => {
    (async () => {
      try {
        const followers = await followersService.getFollowers()
        setFollowers(followers)
      } catch (e) {
        alert(e)
      }
    })()
  }, [])

  return (
    <div className="Followers">
      {followers.length === 0 && <Spinner />}
      {followers.length > 0 &&
        followers.map(user => (
          <Follow
            key={user.id}
            user={user}
            isAllowedAction={false}
            unfollow={() => {}}
          />
        ))}
    </div>
  )
}
