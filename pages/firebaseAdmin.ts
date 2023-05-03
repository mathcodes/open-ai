import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app'

// NOW WE NEED A SERVICE ACCOUNT KEY

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_KEY as string)

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
}

const adminDb = admin.firestore()

export { adminDb };

/*

so we've got the service account rebuilt out basically and now what I do is I say if
there is no get apps uh dot links right so no again absolute length right then
what I'm gonna do is I'm going to say admin dot initialize app okay and this
is a Singleton pattern and we say credential sure admin certificate service account so basically we rebuilt
it back from this environment variable and then we initialize the app with it and then what I'm going to do is I'm going to say admin DB equals admin Dot
firestore and then what I do is I export my admin database and

now what I can do is I can make admin calls from my backend to manipulate the database with zero permissions
*/