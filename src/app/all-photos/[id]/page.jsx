import Image from 'next/image';
import React from 'react'

const PhotoDetailsPage = async({params}) => {

    const {id} = await params;
    const res = await fetch('https://pixgen-five.vercel.app/data.json')
    const photos = await res.json()
    const photo = photos.find(ph=> ph.id == id)
    
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* Large Image */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{photo.title}</h1>

          <p>
            <span className="font-semibold">Prompt:</span>{" "}
            {photo.prompt}
          </p>

          <p>
            <span className="font-semibold">Category:</span>{" "}
            {photo.category}
          </p>

          <p>
            <span className="font-semibold">Model:</span>{" "}
            {photo.model}
          </p>

          <p>
            <span className="font-semibold">Resolution:</span>{" "}
            {photo.resolution}
          </p>

          <div>
            <span className="font-semibold">Tags:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {photo.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-6 text-lg pt-4">
            <p>❤️ {photo.likes}</p>
            <p>⬇️ {photo.downloads}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoDetailsPage