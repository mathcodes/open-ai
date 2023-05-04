"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();

  const [messages, loading, error] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email! || "",
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="flex-1 overflow-y-scroll overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-[#fefecb]">
            Type a prompt below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-[#fefecb] animate-bounce fixed bottom-0 left-0 right-0" />
          <div className="flex flex-col items-center">
  <p className="text-[#fefecb]">Some Text Here</p>
  <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-[#fefecb]  transition-transform duration-1000 transform translate-y-0 hover:translate-y-full" />
</div>

        </>

      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
