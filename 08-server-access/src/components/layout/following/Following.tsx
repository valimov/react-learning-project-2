import { useEffect, useState } from 'react';
import followingService from '../../../services/following';
import './Following.css';
import type User from '../../../models/user/User';

export default function Following() {
  const [following, setFollowing] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const following = await followingService.getFollowing();
      setFollowing(following);
    })();
  }, []);

  return (
    <div className="Following">
      <ul>
        {following.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}