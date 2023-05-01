'use client'

import React from 'react'
import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession, signOut } from 'next-auth/react'
import ChatRow from 'components/ChatRow'

import NewChat from 'components/NewChat'



function SideBar() {
  // destructure the session object
  const { data: session } = useSession()

  const [chats, loading, error]= useCollection(
    session && collection(db, 'users', session?.user?.email!, 'chats')
  )

  console.log(chats, loading, error)
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* NEW CHAT */}
          <NewChat />

          <div>{/* models */}</div>

          {/* <button onClick={() => signOut()} className="text-white">Sign Out</button> */}


          {/* Map through the Chats */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} users={chat.data().users} />
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={session.user?.image || 'https://www.jonchristie.net/favicon.png'}
          alt=""
          className="w-12 h-12 mx-auto mb-10 rounded-full cursor-pointer hover:opacity-50"
        />
      )}
    </div>

  )
}

export default SideBar