import type User from '../../../models/user/User'
import followingService from '../../../services/following'
import './Follow.css'

interface FollowProps {
    user: User
    isAllowedAction: boolean
    unfollow?(id: string): void
}
export default function Follow(props: FollowProps) {

    const { name } = props.user
    const { isAllowedAction, unfollow } = props

    async function unfollowMe(id: string) {
        try {
            if (confirm('Are you sure you want to unfollow this user?')) {
                await followingService.unfollow(id);
                unfollow!(id);
            }
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div className='Follow'>
            <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"/>
            <h3>{name}</h3>
            {isAllowedAction && <button onClick={() => unfollowMe(props.user.id)}>Unfollow</button>}
        </div>
    )
}