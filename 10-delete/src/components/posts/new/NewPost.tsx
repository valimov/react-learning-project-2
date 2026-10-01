import { useForm } from 'react-hook-form';
import './NewPost.css';
import type PostDraft from '../../../models/post/PostDraft';

export default function NewPost() {

    const { register } = useForm<PostDraft>()
    return (
        <div className="NewPost">
            <form action="">
                <input type="text" placeholder="Title" {...register('title')} />
                <textarea placeholder="Content" {...register('body')} ></textarea>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}