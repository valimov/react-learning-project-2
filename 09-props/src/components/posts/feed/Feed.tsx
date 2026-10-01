import { useEffect, useState } from 'react';
import feedService from '../../../services/feed';
import './Feed.css';
import type PostModel from '../../../models/post/Post';
import Post from '../post/Post';

export default function Feed() {
  const [feed, setFeed] = useState<PostModel[]>([]);

  useEffect(() => {
    (async () => {
      try { 
        const feed = await feedService.getFeed();
        setFeed(feed);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  return (
    <div className="Feed">
      {feed.map(post => <Post key={post.id} post={post} />
       )}
    </div>
  );
}