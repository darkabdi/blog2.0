export default function PostCard({ title, description, date, imageUrl }:any) {
  return (
    <div className="flex items-start gap-4">
      <img src={imageUrl} alt={title} className="w-20 h-20 rounded-md object-cover" />
      <div>
        <h3 className="text-lg font-semibold text-green-900">{title}</h3>
        <p className="text-sm text-green-800">{description}</p>
        <p className="text-xs text-green-700 mt-1">{date}</p>
      </div>
    </div>
  );
}