"use client"
import { UpdateUserModal } from '@/components/UpdateUserModal'
import { authClient } from '@/lib/auth-client'
import { Avatar, Card } from '@heroui/react'
import React from 'react'

const EditProfilePage = () => {
    const userData = authClient.useSession()
      const datas = userData.data?.user
      

  return (
    <div>
        <Card className='max-w-96 flex flex-col items-center'>
            <Avatar className='w-20 h-20'>
                <Avatar.Image alt='name' src={datas?.image}></Avatar.Image>
            </Avatar>
            <h2 className='text-xl font-bold'>{datas?.name}</h2>
            <p className='text-muted'>{datas?.email}</p>
            <UpdateUserModal></UpdateUserModal>
        </Card>
    </div>
  )
}

export default EditProfilePage