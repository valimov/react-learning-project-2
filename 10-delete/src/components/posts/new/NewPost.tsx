import { useForm } from 'react-hook-form';
import './NewPost.css';
import type PostDraft from '../../../models/post/PostDraft';
import profileService from '../../../services/profile';
import type Post from '../../../models/post/Post';


interface NewPostProps {
    addPost: (post: Post) => void;
}
export default function NewPost(props: NewPostProps) {
    const { addPost } = props;

    const { register, handleSubmit, formState ,reset } = useForm<PostDraft>()
    async function submit(draft: PostDraft) {
        try {
            const newPost = await profileService.create(draft);
            reset();
            addPost(newPost);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div className="NewPost">
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Title" {...register('title', 
                    { required:
                     { value: true, message: 'Title is required' },
                      minLength: 
                      { value: 10, message: 'Title must be at least 10 characters long' } })} />
                <span className='form-error'>{formState.errors.title?.message}</span>
                <textarea placeholder="Content" {...register('body',
                     { required:
                      { value: true, message: 'Content is required' }, 
                      minLength: 
                      { value: 20, message: 'Content must be at least 20 characters long' } })} ></textarea>
                <span className='form-error'>{formState.errors.body?.message}</span>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}