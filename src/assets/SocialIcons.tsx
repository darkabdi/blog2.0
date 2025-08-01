import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";


function SocialIcons() {
  return (
    <div className="flex space-x-4 text-xl text-gray-600" >
     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-600 transition" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-400 transition" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition" />
      </a>
    
    </div>
  )
}

export default SocialIcons