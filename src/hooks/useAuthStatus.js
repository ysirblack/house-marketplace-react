import React from "react";
import { useEffect, useState, useRef } from "react/cjs/react.development";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setcheckingStatus] = useState(true);
  const isMounted = useRef(true); //added for warning after useEffect

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setcheckingStatus(false);
      });
    }

    return ()=>{
      isMounted.current = false;
    }
  });

  return { loggedIn, checkingStatus };
};
