'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

import NewChat from 'components/NewChat'

function SideBar() {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* NEW CHAT */}
          <NewChat />

          <div>{/* models */}</div>

          <button onClick={() => signOut()} className="text-white">Sign Out</button>


          {/* Map through the Chats */}
        </div>
      </div>
    </div>

  )
}

export default SideBar