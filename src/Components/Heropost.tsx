import HeadShot from '../assets/Headshot.jpg'
export default function HeroPost() {
  return (
    <section className="bg-[#EAF3E1] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            The Future of Environmental Policy
          </h1>
          <p className="font-serif text-lg text-gray-700 mt-4">
            A deeper study into the support need for harm reduction: the need to contact direct climate change.
          </p>
          <p className="text-sm text-gray-500 mt-2">April 24, 2024</p>
        </div>

        {/* Profile Image + Bio */}
        <div className="flex flex-col items-center text-center">
          <img
            src={HeadShot}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
          />
          <p className="mt-4 text-sm italic text-gray-600 max-w-xs">
            "Passionate about policy, people, and progress."
          </p>
        </div>
      </div>
    </section>
  );
}