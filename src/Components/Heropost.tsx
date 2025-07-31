export default function HeroPost({ title, description, date, image }:any) {
  return (
    <section className="flex flex-row md:flex-col items-center bg-[#e9f1e1] p-6 rounded-lg shadow">
      <div className="md:w-2/3">
        <h1 className="text-4xl font-serif font-bold text-leaf">{title}</h1>
        <p className="mt-4 text-gray-700">{description}</p>
        <p className="mt-2 text-sm text-gray-500">{date}</p>
      </div>
      <div className="md:w-1/3 mt-6 md:mt-0">
        <img src={image} alt={title} className="rounded-full w-60 h-60 object-cover mx-auto" />
      </div>
    </section>
  )
}