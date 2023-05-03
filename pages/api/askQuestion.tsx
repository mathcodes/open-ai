import query from '../../lib/queryApi'
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'
import { adminDb } from 'pages/firebaseAdmin'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //  BUILDING THE API ENDOPINT
  // destructuring the request body
  // 3) Here we strip out what we need from the request body to pass through to the query function
  const {prompt, chatId, model, session} = req.body
  //  return the response 400 if the request body is empty

  // 4) Then we check to make sure we have all the details we need
  if (!prompt) {
    res.status(400).json({ answer: 'Please provide a prompt' })
    return
  }

  //  return the response 400 if the request body is empty
  if (!chatId) {
    res.status(400).json({ answer: 'Please provide a chatId' })
    return
  }

  // 5( When then query ChatGPT to get a response which we then package up into a message
  const response = await query(prompt, model)

  const message: Message = {
    text: response || "GPT was not able to generate a response",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://www.jonchristie.net/favicon.png'
    }


// NOW WE need to get the admin rights so Setting up Firebase Admin I need the admins firestore details because what I'm gonna need to do now is
// from the back end I need to basically create a a document into the messages collection from the server end SO   I need a special admin privilege right
  }

  // 6) Then we add this message to the firestore database
  await adminDb
  .collection('users')
  .doc(session?.user?.email!)
  .collection('chats')
  .doc(chatId)
  .collection('messages')
  .add(message)

  // 7) Then we return the answer as a bit of text
  res.status(200).json({ answer: message.text })
}
