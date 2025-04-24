import { useEffect, useState } from "react";

export default function ({ timer }) {
    const [timeRemaining, setTimeRemaining] = useState(timer);
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 10);
      }, 10);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return <progress value={timeRemaining} max={timer} />;
}