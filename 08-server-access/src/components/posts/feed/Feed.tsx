import { useEffect, useState } from 'react';
import feedService from '../../../services/feed';
import './Feed.css';
import type Post from '../../../models/post/Post';

export default function Feed() {
  const [feed, setFeed] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const feed = await feedService.getFeed();
      setFeed(feed);
    })();
  }, []);

  return (
    <div className="Feed">
      <ul>
        {feed.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}