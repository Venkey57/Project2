import { useEffect, useRef } from "react";

function Sample() {

  const timeoutIdRef = useRef(null);
 const timeoutDuration = 5000; // 5 minutes
 const removeSessionIdCookie = () => {
   console.log("removing cookie");
 };


  const resetTimeout = () => {
    clearTimeout(timeoutIdRef.current);

    timeoutIdRef.current = setTimeout(removeSessionIdCookie, timeoutDuration);
    };
    
  useEffect(() => {
    resetTimeout();

    const handleActivity = () => resetTimeout();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", () =>  console.log("clicked")  );
    window.addEventListener("click", handleActivity);
    console.log(window.location)
    return () => {
      clearTimeout(timeoutIdRef.current);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, [timeoutDuration, removeSessionIdCookie]);

    return (
        <>
            <div>
                timeout function excuted
            </div>
        </>
  )
}

export default Sample;
