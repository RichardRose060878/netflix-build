import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAnuEy0wCc6YnhBO5HtPLDOJL23Cc2SeY8',
  authDomain: 'netflix-build2.firebaseapp.com',
  projectId: 'netflix-build2',
  storageBucket: 'netflix-build2.appspot.com',
  messagingSenderId: '514064781261',
  appId: '1:514064781261:web:617117489a17dfe5a1be84',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
