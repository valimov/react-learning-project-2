import { useState } from 'react'
import type User from '../../../models/user/User'
import followingService from '../../../services/following'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'
import './Follow.css'

interface FollowProps {
    user: User
    isAllowedAction: boolean
    unfollow?(id: string): void
}

export default function Follow(props: FollowProps) {
    const { id, name } = props.user
    const { isAllowedAction, unfollow } = props

    const [isSubmitting, setIsSubmitting] = useState(false)

    async function unfollowMe() {
        try {
            if (confirm('Are you sure you want to unfollow this user?')) {
                setIsSubmitting(true)
                await followingService.unfollow(id)
                unfollow?.(id)
            }
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="Follow">
            <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" />
            <h3>{name}</h3>
            <div>
                {isAllowedAction && (
                    <SpinnerButton
                        isSubmitting={isSubmitting}
                        buttonText="Unfollow"
                        spinnerText="unfollowing..."
                        onClick={unfollowMe}
                    />
                )}
            </div>
        </div>
    )
}
