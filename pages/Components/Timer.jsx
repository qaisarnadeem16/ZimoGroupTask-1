import { useState, useEffect } from "react";

const Timer = ({ expireDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = expireDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: "Expired", hours: "", minutes: "", seconds: "" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
        const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expireDate]);

  return (
    <>
      {timeLeft.days === "Expired" ? (
        <span>{timeLeft.days}</span>
      ) : (
        <>
             <div className="text-white flex  md:gap-6 gap-5  font-normal    ">
                                    <div className="flex flex-col gap-1 items-center ">
                                        <span className="lg:text-[2.3rem] text-[1.5rem] pb-1 font-[100] ">{timeLeft.days}</span>
                                        <span className="text-[10px] absolute bottom-0 tracking-wide font-[100]">DAYS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="lg:text-[2.3rem] text-[1.5rem] pb-1 font-[100]">{timeLeft.hours}</span>
                                        <span className="text-[10px] absolute bottom-0 tracking-wide font-[100]">HOURS</span>
                                    </div>

                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="lg:text-[2.3rem] text-[1.5rem] pb-1 font-[100]">{timeLeft.minutes}</span>
                                        <span className="text-[10px] absolute bottom-0 tracking-wide font-[100]">MINUTES</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className="lg:text-[2.3rem] text-[1.5rem] pb-1 font-[100]">{timeLeft.seconds}</span>
                                        <span className="text-[10px] absolute bottom-0 tracking-wide font-[100]">SECONDS</span>
                                    </div>
                                </div>
        </>
      )}
    </>
  );
};

export default Timer;
