'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  chatId: string;
};


function ChatInput({ chatId } : Props) {
  const [ prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  // USE SWR to get model
  const model = "text-davinci-003"

  const endMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )

    const notification = toast.loading('Thinking here....')

    // Toast Notificaiton loading

    //  Fetch Method to send message to backend
    // creating an API endpoint
    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input, chatId, model, session
      })
    }).then(() => {
      // toast notificaiton successfull
      toast.success('Message Sent', {
        id: notification,
      })
    })

  }
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form
        onSubmit={e => sendMessage(e)}
      className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type here..."
        />

        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disable:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
        </button>
      </form>
    </div>
  )
}

export default ChatInput