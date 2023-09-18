import React, { useEffect, useState } from "react";

export default function MyTimer({testTime}) {
  const [time, setTime] = useState(testTime);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <p>
        Ajratilgan vaqt: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </p>
    </div>
  );
}