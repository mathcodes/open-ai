import React from 'react'
import NewChat from 'components/NewChat'

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">

    {/* NEW CHAT */}
    <NewChat />

    <div>
      {/* models */}
    </div>

    {/* Map through the Chats */}
      </div>
    </div>
  )
}

export default SideBar