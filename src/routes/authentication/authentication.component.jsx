import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./authentication.style.scss";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

function Authentication() {
  return (
    <div className="authentication-container">
      <h1>Sign In</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
