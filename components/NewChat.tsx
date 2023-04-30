import { PlusIcon } from '@heroicons/react/24/solid'

function NewChat() {
  return (
    <div className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      New Chat
    </div>
  )
}

export default NewChat