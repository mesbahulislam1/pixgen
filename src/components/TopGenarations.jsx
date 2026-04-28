import PhotoCard from "./PhotoCard"

const TopGenarations = async() => {
    const res = await fetch('https://pixgen-five.vercel.app/data.json')
    const photos = await res.json()
    const topPhotos = photos.slice(0, 8)
    console.log(topPhotos)
  return (
    <div>
        <h1 className="text-2xl font-bold mt-5">Top Generations</h1>

        <div className="grid grid-cols-4 gap-5">
            {
                topPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
            }
        </div>
    </div>
  )
}

export default TopGenarations