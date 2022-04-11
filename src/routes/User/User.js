import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import auth from "../../firebase.init";

const User = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div>
        {user ? (
          <>
            <h4 className="inline-block text-xl font-bold my-5 bg-yellow-400 px-10 py-2 rounded-md text-slate-600">
              Welcome!{" "}
              <Link to="/user" className="text-slate-800">
                {user.displayName}
              </Link>
            </h4>
            <div className="p-5 border border-yellow-500 shadow-xl w-fit mx-auto rounded my-10">
              <div className="flex flex-col justify-center items-center gap-4">
                <img
                  className="w-20 rounded-full border-2 border-yellow-600"
                  src={user.photoURL}
                  alt=""
                />
                <p className="font-serif text-xl md:text-2xl mx-2">
                  {user.displayName}
                </p>
                <p className="text-slate-500">{user.email}</p>
              </div>
              <button
                onClick={logOut}
                className="bg-yellow-400 text-slate-900 px-5 py-2 font-bold  rounded hover:shadow-md shadow-none my-5"
                type="submit"
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <div className="my-5">
            <Login></Login>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
