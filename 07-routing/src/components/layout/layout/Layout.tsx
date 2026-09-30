import './Layout.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Following from '../following/Following'
import Followers from '../followers/Followers'
import Main from '../main/Main'

export default function Layout() {
    return (
        <div className='Layout'>
            <header><Header /></header>
            <aside><Following /></aside>
            <aside><Followers /></aside>
            <main><Main /></main>
            <footer><Footer /></footer>
        </div>
    )
}