import { credential, ServiceAccount } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

import credentials from "../secrets/firebase_credentials.json";

initializeApp({
  credential: credential.cert(credentials as ServiceAccount),
  storageBucket: `${process.env.BUCKET_NAME}.appspot.com`,
});

const bucket = getStorage().bucket();

export default bucket;
