import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("https://pixgen-apk.vercel.app/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
  console.log(photos);

  return (
    <div>
      <h1 className="text-2xl font-bold my-5">Top Generations</h1>

      <div className="grid grid-cols-4 gap-5">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
