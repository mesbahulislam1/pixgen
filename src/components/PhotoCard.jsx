import { Separator, Card } from '@heroui/react'
import Image from 'next/image'
import React from 'react'
import { FaDownload, FaHeart } from 'react-icons/fa'

const PhotoCard = ({photo}) => {
  return (
    <Card className='border rounded-xl '>
        <div className='relative w-full aspect-square'>
            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill={true} src={photo.imageUrl}   alt='Photos' className='rounded-xl object-cover'></Image>
        </div>
        <div>
            <h2 className='font-medium'>{photo.title}</h2>
        </div>
        <div className='flex gap-5'>
            <div className='flex items-center gap-2'>
            <p><FaHeart></FaHeart></p>
            <p>{photo.likes}</p>
        </div>
        <Separator orientation='vertical'></Separator>
        <div className='flex items-center gap-2'>
            <p><FaDownload></FaDownload></p>
            <p>{photo.downloads}</p>
        </div>
        </div>
    </Card>
  )
}

export default PhotoCard