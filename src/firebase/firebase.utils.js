import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAQxSmhMQxA5mrFFf69lEF0UGRvujHVLAY",
  authDomain: "crwn-db-21a76.firebaseapp.com",
  projectId: "crwn-db-21a76",
  storageBucket: "crwn-db-21a76.appspot.com",
  messagingSenderId: "364658732908",
  appId: "1:364658732908:web:81acc63a726cdaa1734d49"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase