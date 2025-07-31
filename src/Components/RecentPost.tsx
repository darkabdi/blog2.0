import PostCard from "./Postcard";

const posts = [
  {
    title: "How to Run a Grassroots Campaign",
    description: "Practical tips for starting a local movement.",
    date: "April 29, 2024",
    imageUrl: "https://imagizer.imageshack.com/v2/640x480q70/673/hEBTkN.jpg",
  },
  {
    title: "Reflections on the Election Result",
    description: "What this means for the future of policy.",
    date: "April 19, 2024",
    imageUrl: "https://imagizer.imageshack.com/v2/640x480q70/540/34e4a9.jpg",
  },
  {
    title: "Finding Common Ground on Key Issues",
    description: "Building unity through discussion and empathy.",
    date: "April 10, 2024",
    imageUrl: "https://imagizer.imageshack.com/v2/640x480q70/538/xlMaV6.jpg",
  },
];

export default function RecentPostsList() {
  return (
    <section className="bg-[#F5F7ED] p-8 space-y-6">
      <h2 className="text-2xl font-serif font-bold text-green-900">Recent Posts</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}