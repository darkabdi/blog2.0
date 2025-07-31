export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 p-6 md:p-12 rounded-t-lg shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left: Logo / Brand */}
        <div className="text-xl font-serif font-bold text-leaf">
          Enligt Marina
        </div>

        {/* Middle: Navigation Links */}
        <nav>
          <ul className="flex sm:flex-row md:flex-row content-between space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base">
            <li><a href="#" className="hover:text-leaf transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-leaf transition-colors">About</a></li>
            <li><a href="#" className="hover:text-leaf transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-leaf transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Right: Copyright */}
        <div className="text-sm md:text-base">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</div>
      </div>
    </footer>
  );
}

