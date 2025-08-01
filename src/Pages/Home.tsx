import Footer from '../Components/Footer'
import HeroPost from '../Components/Heropost'
import Navbar from '../Components/NavBar'
import RecentPostsList from '../Components/RecentPost'
import HeadShot from '../assets/Headshot.jpg'
export default function Home() {
  return (
    <div>
      <div className='min-h-screen flex flex-col' >
      <Navbar/>
      <HeroPost
      />
     <RecentPostsList/>
     <Footer/>
     </div>
    </div>
  )
}