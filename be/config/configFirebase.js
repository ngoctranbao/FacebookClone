import admin from 'firebase-admin'
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://facebook-c6f5f.appspot.com",
});

export const bucket = admin.storage().bucket();