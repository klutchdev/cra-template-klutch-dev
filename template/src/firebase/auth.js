// import { auth } from './index';


// // Google sign up
// const provider = new auth.GoogleAuthProvider();

// export const signOut = () => {
//   auth
//     .signOut()
//     .then(() => console.info('User signed out'))
//     .catch(error => console.log(error));
// };

// export const signIn = async (email, password) => {
//   await auth
//     .signInWithEmailAndPassword(email, password)
//     .then(() => console.info('User signed out'))
//     .catch(error => alert(error));
// };

// export const googleSignIn = async () => {
//   await auth
//     // To sign in by redirecting to the sign-in page
//     // use .signInWithRedirect(provider) instead
//     .signInWithPopup(provider)
//     .then(result => console.info(`${result.user} signed in`))
//     .catch(error => console.log(error));
// };

// export const signUpWithEmail = async (email, password) => {
//   await auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(userData => console.info(userData))
//     .catch(error => alert(error));
// };

// export const verifyEmail = async email => {
//   await auth
//     .sendEmailVerification()
//     .then(() => console.info(`Verification email sent to ${email}!`))
//     .catch(error => console.log(error));
// };

// export const resetPassword = async email => {
//   await auth
//     .sendPasswordResetEmail(email)
//     .then(() => console.info(`Password reset sent to ${email}!`))
//     .catch(error => console.log(error));
// };

