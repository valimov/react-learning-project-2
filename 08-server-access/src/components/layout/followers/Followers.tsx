import { useEffect, useState } from 'react';
import followersService from '../../../services/followers';
import './Followers.css';
import type User from '../../../models/user/User';

export default function Followers() {
  const [followers, setFollowers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const followers = await followersService.getFollowers();
      setFollowers(followers);
    })();
  }, []);

  return (
    <div className="Followers">
      <ul>
        {followers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}