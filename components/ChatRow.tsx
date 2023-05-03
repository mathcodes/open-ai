import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';

import { deleteDoc, doc, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, query } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

type Props = {
  id: string;
  users: any;
}

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = React.useState(false);
  const [messages] = useCollection(query(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
    orderBy('createdAt', 'asc')
  ))

  useEffect(() => {
    if (!pathname) return

    setActive(pathname.includes(id))
  }, [pathname])

  const removeChat = async () => {
    await deleteDoc(doc(db,
    "users", session?.user?.email!, "chats", id));
    router.replace('/')
    }
  return (

    <Link
      href={`/chat/${id}`}
      className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}
    >


      <ChatBubbleLeftIcon className="w-4 h-4" />
      <p
        className="flex-1 hidden truncate md:inline-flex"
      >
        {/*  */}
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="w-5 h-5 text-gray-700 hover:text-red-700" />

    </Link>
  )
}

export default ChatRow