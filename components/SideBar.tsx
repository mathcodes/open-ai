'use client'

import React from 'react'
import { useSession, signOut } from 'next-auth/react'

import NewChat from 'components/NewChat'

function SideBar() {
  // destructure the session object
  const { data: session } = useSession()
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* NEW CHAT */}
          <NewChat />

          <div>{/* models */}</div>

          {/* <button onClick={() => signOut()} className="text-white">Sign Out</button> */}


          {/* Map through the Chats */}
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