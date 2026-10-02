import { useEffect, useState } from 'react'
import feedService from '../../../services/feed'
import './Feed.css'
import type PostModel from '../../../models/post/Post'
import type PostComment from '../../../models/post-comment/PostComment'
import Post from '../post/Post'
import Spinner from '../../common/spinner/Spinner'

export default function Feed() {
    const [feed, setFeed] = useState<PostModel[]>([])

    useEffect(() => {
        (async () => {
            try {
                const feed = await feedService.getFeed()
                setFeed(feed)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    function addComment(postId: string, comment: PostComment) {
        setFeed(feed.map(post =>
            post.id === postId
                ? { ...post, comments: [...(post.comments ?? []), comment] }
                : post
        ))
    }

    return (
        <div className="Feed">
            {feed.length === 0 && <Spinner />}
            {feed.length > 0 && (
                <>
                    {feed.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                            isAllowedAction={false}
                            addComment={addComment}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
