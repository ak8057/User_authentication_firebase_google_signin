import React, { useEffect, useState } from "react";
import { auth, db } from "../Auth/firebase"; // Adjust path if needed
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              setUserDetails(docSnap.data());
              console.log(docSnap.data());
            } else {
              console.log("User document does not exist in Firestore");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          console.log("User is not logged in");
        }
      });
    };

    fetchUserData();
  }, []);

  console.log("Image URL:", userDetails?.photo);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="text-center p-5">
      {userDetails ? (
        <>
          <div className="flex justify-center mb-4">
            {userDetails?.photo ? (
              <img
                src={userDetails.photo}
                alt="Profile"
                className="w-[120px] h-[120px] rounded-full border-2 border-blue-500 object-cover"
                width="40%"
                style={{ borderRadius: "50%" }}
                onLoad={() => console.log("Image loaded successfully!")}
                onError={(e) => {
                  if (e.target.src !== "https://via.placeholder.com/150") {
                    console.error("Error loading image:", userDetails?.photo);
                    e.target.src = "https://via.placeholder.com/150"; // fallback
                  }
                }}
              />
            ) : (
              <p>Loading image...</p>
            )}
          </div>
          <h3>Welcome, {userDetails.firstName} 🙏</h3>
          <div className="text-sm text-gray-600">
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
