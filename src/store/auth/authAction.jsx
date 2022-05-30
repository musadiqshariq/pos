import * as actionTypes from "./authTypes";
import Firebase from "../../config/firebase";


export const loginUser = (user, history) => {
  return (dispatch) => {
    Firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => {
      })
      .catch(error => {
        alert(error.message);
      });
  }
}

export const signupUser = (user) => {
    return (dispatch) => {
        Firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                Firebase.database().ref('/').child(`users/${res.user.uid}`).set(user)
                alert("User signup successfully")
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

export const signout = (hist) => {
  return (dispatch) => {
    Firebase.auth()
      .signOut()
      .then(() => {
        hist.push("/")
      })
      .catch(error => {
        console.log(error.message)
      })
  }

}