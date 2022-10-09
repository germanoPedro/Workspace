/*import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'


const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export function fetchUser(){
    return((dispatch) => {
        db()
                .collection("user")
                .doc(auth().currentUser.uid)
                .get()
                .then((snapshot) => {
                    if (snapshot.exists){
                        console.log(snapshot.data())
                        dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()})
                    }
                    else{
                        console.log('does not exist')
                    }
                })
    })
}
*/