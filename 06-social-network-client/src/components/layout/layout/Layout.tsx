import './Layout.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Following from '../following/Following'
import Followers from '../followers/Followers'

export default function Layout() {
    return (
        <div className='Layout'>
       <header><Header /></header>
      <aside><Following /></aside>
      <aside><Followers /></aside>
      <main>main</main>
      <footer><Footer /></footer>
        </div>
    )
}