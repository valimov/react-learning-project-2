import { useEffect, useState } from 'react'
import profileService from '../../../services/profile'
import './EditPost.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type PostDraft from '../../../models/post/PostDraft'
import Spinner from '../../common/spinner/Spinner'
import SpinnerButton from '../../common/spinner-button/SpinnerButton'

export default function EditPost() {
    const { id } = useParams<'id'>()
    const { register, handleSubmit, formState, reset } = useForm<PostDraft>()

    const [isReady, setIsReady] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                const post = await profileService.getPost(id!)
                const { title, body } = post
                reset({ title, body })
                setIsReady(true)
            } catch (error) {
                alert(error)
            }
        })()
    }, [id, reset])

    const navigate = useNavigate()

    async function submit(draft: PostDraft) {
        try {
            await profileService.edit(id!, draft)
            alert('post edited successfully')
            navigate(`/profile`)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="EditPost">
            {!isReady && <Spinner />}
            {isReady && (
                <form onSubmit={handleSubmit(submit)}>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register('title', {
                            required: { value: true, message: 'Title is required' },
                            minLength: {
                                value: 10,
                                message: 'Title must be at least 10 characters long',
                            },
                        })}
                    />
                    <span className="form-error">{formState.errors.title?.message}</span>
                    <textarea
                        placeholder="Content"
                        {...register('body', {
                            required: { value: true, message: 'Content is required' },
                            minLength: {
                                value: 20,
                                message: 'Content must be at least 20 characters long',
                            },
                        })}
                    />
                    <span className="form-error">{formState.errors.body?.message}</span>
                    <SpinnerButton
                        isSubmitting={formState.isSubmitting}
                        buttonText="Edit Post"
                        spinnerText="saving changes to database..."
                    />
                </form>
            )}
        </div>
    )
}