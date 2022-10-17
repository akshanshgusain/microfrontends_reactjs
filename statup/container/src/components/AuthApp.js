import { mount as authMount } from "auth/AuthApp";
// this mount funtion is NOT a react Component
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  // We'll use useRef to reference a HTML element we are trying to mount our marketing
  // App into
  const ref = useRef(null);
  const history = useHistory();

  // We need to take ref and provide it to the mount function
  // We also need to make sure to call the mount function one time only, when the component
  // is first displayed
  useEffect(() => {
    const { onParentNavigate } = marketingMount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
