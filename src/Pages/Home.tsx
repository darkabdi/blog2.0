import Footer from '../Components/Footer'
import HeroPost from '../Components/Heropost'
import Navbar from '../Components/NavBar'
import RecentPostsList from '../Components/RecentPost'
import HeadShot from '../assets/Headshot.jpg'
export default function Home() {
  return (
    <div className=" flex-grow">
      <div className='min-h-screen flex flex-col' >
      <Navbar/>
      <HeroPost
        title="The Future of Environmental Policy"
        description="A deeper study into the support need for harmreduction: the need to contact direct climate change."
        date="April 24, 2024"
        image={HeadShot} // or use an import if bundling
      />
     <RecentPostsList/>
     <Footer/>
     </div>
    </div>
  )
}