/*
 * Sign up validation is handled by firebase, so this file overwrite the firebase error texts to provide more user-friendly error messages
 */
import validation from "../locales/en/validation.json";
import { getTextFromParentheses } from "../helpers/helpers";

export const overwriteFirebaseErrorMessage = (firebaseErrorMessage: string) => {
  // Use helper function to extract the error type from the Firebase error message
  const errorType = getTextFromParentheses(firebaseErrorMessage);

  console.log(errorType);

  let errorMessage = "";

  switch (errorType) {
    case "auth/invalid-email":
      errorMessage = validation.signup.error.invalidEmail;
      break;
    case "auth/email-already-in-use":
      errorMessage = validation.signup.error.emailInUse;
      break;
    case "auth/weak-password":
      errorMessage = validation.signup.error.weakPassword;
      break;
    case "auth/missing-password":
      errorMessage = validation.signup.error.missingPassword;
      break;
    case "auth/operation-not-allowed":
      errorMessage = validation.signup.error.operationNotAllowed;
      break;
    case "auth/too-many-requests":
      errorMessage = validation.signup.error.tooManyRequests;
      break;
    default:
      errorMessage = validation.signup.error.defaultError;
  }

  return errorMessage;
};
