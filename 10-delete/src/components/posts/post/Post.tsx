import './Post.css';
import type PostModel from '../../../models/post/Post';
import profileService from '../../../services/profile';

interface PostProps {
    post: PostModel;
    isAllowedAction: boolean;
    removePost: (id: string) => void;
}
export default function Post(props: PostProps) {
    const { title, body, user, createdAt } = props.post;
    const { isAllowedAction, removePost } = props;

  async function deleteMe() {
        try {
            if (confirm('Are you sure you want to delete this post?')) {
                await profileService.remove(props.post.id);
                removePost(props.post.id);
            }
        } catch (e) {
            alert(e);
        }
    }
        return (
        <div className="Post">
        <div className="title">{title}</div>
        <div className="by-line">by {user.name} at { new Date(createdAt).toLocaleDateString()}</div>
        <div className="body">{body}</div>
        {isAllowedAction && <div className="button"><button onClick={deleteMe}>Delete</button></div>}
        </div>
    );
}