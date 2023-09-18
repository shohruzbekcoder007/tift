import React, { memo, useEffect, useState } from "react";

export default function MyTimer({testTime, finishFunction}) {
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

    useEffect(() => {
        if(time == 0){
            finishFunction()
        }
    }, [time])
  
    return (
      <div>
        <p>
          Ajratilgan vaqt: {`${Math.floor(time / 60)}`.padStart(2, 0)}:
          {`${time % 60}`.padStart(2, 0)}
        </p>
      </div>
    );
  }