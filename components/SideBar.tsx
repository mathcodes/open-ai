import React from 'react'
import NewChat from 'components/NewChat'

function SideBar() {
  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
          {/* NEW CHAT */}
          <NewChat />

          <div>{/* models */}</div>

          {/* Map through the Chats */}
        </div>
      </div>
    </div>
  )
}

export default SideBar