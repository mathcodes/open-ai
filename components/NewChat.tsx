import { PlusIcon } from '@heroicons/react/24/solid'
import { addDoc, collection } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { db } from '../firebase'

function NewChat() {
  const {data : session } = useSession()
  const router = useRouter()

  const createNewChat = async() => {
    // pull the users information from the session, import it, rename data varaible iwth colon syntax to session

    // push something into the database: from our application we are pushing a value to the db
    // the response will be the document that we will push in

    // so we have to specify the collection
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'), {
        messages: [],
        userId: session?.user?.email!,
        createdAt: new Date().toISOString()
    }
    );

    router.push (`/chat/${doc.id}`)
    // the route for the new chat page is something like http://localhost:3000/chat/pEc2jEHcI7aoNGJisdhn,
    // which is a DYNAMIC ROUTE, which we need to create in the app folder (NEXTJS 13 folder structure) we draft out the route in the folders
  };


  return (
    <div onClick={createNewChat} className="border border-gray-700 chatRow">
      <PlusIcon className="w-4 h-4" />
      New Chat
    </div>
  )
}

export default NewChat