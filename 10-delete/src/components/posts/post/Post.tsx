import './Post.css'
import type PostModel from '../../../models/post/Post'
import type PostComment from '../../../models/post-comment/PostComment'
import profileService from '../../../services/profile'
import Comments from '../comments/Comments'

interface PostProps {
    post: PostModel
    isAllowedAction: boolean
    removePost?(id: string): void
    addComment(postId: string, comment: PostComment): void
}

export default function Post(props: PostProps) {
    const { id, title, body, user, createdAt, comments } = props.post
    const { isAllowedAction, removePost, addComment } = props

    async function deleteMe() {
        try {
            if (confirm('Are you sure you want to delete this post?')) {
                await profileService.remove(id)
                removePost?.(id)
            }
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="Post">
            <div className="title">{title}</div>
            <div className="by-line">
                by {user.name} at {new Date(createdAt).toLocaleDateString()}
            </div>
            <div className="body">{body}</div>
            {isAllowedAction && (
                <div className="button">
                    <button onClick={deleteMe}>Delete</button>
                </div>
            )}
            <Comments
                comments={comments}
                addComment={addComment}
                postId={id}
            />
        </div>
    )
}
