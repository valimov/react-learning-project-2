import { useEffect, useState } from 'react';
import followingService from '../../../services/following';
import './Following.css';
import type User from '../../../models/user/User';
import Follow from '../follow/Follow';

export default function Following() {
  const [following, setFollowing] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
      const following = await followingService.getFollowing();
        setFollowing(following);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  return (
    <div className="Following">
    {following.map(user => <Follow key={user.id} user={user}/>)}
    </div>
  );
}