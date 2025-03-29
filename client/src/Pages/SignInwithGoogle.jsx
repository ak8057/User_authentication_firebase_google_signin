import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Auth/firebase.js";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {

  async function googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In Result:", result);

      const user = result.user;
      if (user) {
        try {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstName: user.displayName,
            photo: user.photoURL,
            lastName: "",
          });
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
          window.location.href = "/profile";
        } catch (firestoreError) {
          console.error("Firestore Write Error:", firestoreError);
          toast.error("Failed to store user data. Check Firestore rules.");
        }
      }
    } catch (authError) {
      console.error("Google Sign-In Error:", authError);
      toast.error("Google Sign-In Failed");
    }
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src="/google.png" width={"60%"} alt="Google Sign-In" />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
