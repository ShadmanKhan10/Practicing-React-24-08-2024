import React, { useEffect, useState } from "react";

export default function Datee() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meredian = hours >= 12 ? "PM" : "Am";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}${meredian}`;
  };

  return (
    <>
      <div>{formatTime()}</div>
    </>
  );
}
