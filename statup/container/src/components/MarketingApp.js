import { mount as marketingMount } from "marketing/MarketingApp";
// this mount funtion is NOT a react Component
import React, { useRef, useEffect } from "react";

export default () => {
  // We'll use useRef to reference a HTML element we are trying to mount our marketing
  // App into
  const ref = useRef(null);

  // We need to take ref and provide it to the mount function
  // We also need to make sure to call the mount function one time only, when the component
  // is first displayed
  useEffect(() => {
    marketingMount(ref.current);
  });

  return <div ref={ref} />;
};
