import firebase from 'firebase';

export const signUp = async (username, password) => {
  try {
    const result = await firebase
      .auth()
      .createUserWithUsernameAndPassword(username, password);
    return result;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (username, password) => {
  try {
    const result = await firebase
      .auth()
      .signInWithUsernameAndPassword(username, password);
    return result;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    const result = await firebase.auth().signOut();
    return result;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async username => {
  try {
    const result = await firebase.auth().sendPasswordResetEmail(username);
    return result;
  } catch (error) {
    throw error;
  }
};
