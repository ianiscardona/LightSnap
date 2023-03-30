import React, { useEffect, useRef, useState } from "react";

export default function Timer({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0 || countdown === null) {
      // clearInterval(timerId.current);
      setCountdown(seconds);
    }
  }, [countdown]);

  return (
    <div className={`${countdown === -1 ? "hidden" : "flex"}`}>{countdown}</div>
  );
}
