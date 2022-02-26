import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

 const onSubmit = async (e) => {
 e.preventDefault();

 try {
   const auth = getAuth();
   await sendPasswordResetEmail(auth,email);
   toast.success("email is sent");
 } catch (error) {
   toast.error("couldn't send reset email");
 }
 }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader"> Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input 
          type="email" 
          className="emailInput" 
          placeholder="Email" 
          id="email" 
          value={email}
          onChange={onChange} />

          <Link className="forgotPasswordLink" to="/sign-in">
            Sign in
          </Link>
          <div className="singInBar">
            <div className="signIntext">Send Reset Link</div>
            <div className="button signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
